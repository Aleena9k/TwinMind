import { useTheme } from "../context/ThemeContext.jsx";

function ThemeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <button
      type="button"
      className="mode-toggle"
      onClick={toggleMode}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;