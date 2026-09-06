import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme, isDark: false }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
