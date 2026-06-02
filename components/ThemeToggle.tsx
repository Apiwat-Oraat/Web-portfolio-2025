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
      className="fixed bottom-6 right-6 md:top-5 md:bottom-auto md:right-5 z-[60] flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-black/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 md:w-4 md:h-4 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90,
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute flex items-center justify-center"
        >
          <Moon className="w-5 h-5 md:w-4 md:h-4" strokeWidth={2.5} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 90,
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute flex items-center justify-center"
        >
          <Sun className="w-5 h-5 md:w-4 md:h-4" strokeWidth={2.5} />
        </motion.div>
      </div>
    </button>
  );
}
