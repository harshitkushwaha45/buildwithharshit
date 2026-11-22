import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-line bg-surface hover:bg-surface-elevated text-ink hover:text-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 ${className}`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-accent transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
