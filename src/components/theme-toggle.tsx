import { useEffect, useState } from "react";

const THEME_KEY = "cc-theme";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(THEME_KEY)) as
      | "light"
      | "dark"
      | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  };

  return { theme, toggle };
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-9 w-16 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-secondary)] transition-colors duration-500"
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full transition-all duration-500 ease-out flex items-center justify-center text-[13px]"
        style={{
          left: isDark ? "calc(100% - 32px)" : "4px",
          background: "var(--gradient-gold)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
