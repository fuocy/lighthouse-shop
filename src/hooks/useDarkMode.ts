import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.theme === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? "light" : "dark";

    html.classList.remove(prev);
    const next = isDarkMode ? "dark" : "light";
    html.classList.add(next);

    localStorage.setItem("theme", next);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode] as const;
}
