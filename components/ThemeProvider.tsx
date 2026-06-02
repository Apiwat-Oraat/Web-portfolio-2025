"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initial load - force dark by default if not set
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (x: number, y: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newTheme = theme === "dark" ? "light" : "dark";
    
    if (!document.startViewTransition) {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
        setIsAnimating(false);
        return;
    }

    const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
    });

    transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`
        ];

        document.documentElement.animate(
          {
            clipPath: newTheme === "dark" ? clipPath.reverse() : clipPath,
          },
          {
            duration: 700,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            pseudoElement: newTheme === "dark" ? "::view-transition-old(root)" : "::view-transition-new(root)",
          }
        ).onfinish = () => {
            setIsAnimating(false);
        };
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
