"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme, isAnimating } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get button center coordinates for animation origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme(x, y);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isAnimating}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center justify-center p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-lg overflow-hidden group hover:scale-110 active:scale-95"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90,
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute"
        >
          <Moon size={24} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 90,
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute"
        >
          <Sun size={24} />
        </motion.div>
      </div>
    </button>
  );
}
