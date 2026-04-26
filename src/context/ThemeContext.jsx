import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem("tm-mode") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mode", mode);
    root.setAttribute("data-theme", "cyberpunk");
    localStorage.setItem("tm-mode", mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}