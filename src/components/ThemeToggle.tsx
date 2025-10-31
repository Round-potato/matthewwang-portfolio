import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "light" ? "dark" : "light";
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-full border border-border px-3 py-1 text-sm text-muted hover:bg-card transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}




