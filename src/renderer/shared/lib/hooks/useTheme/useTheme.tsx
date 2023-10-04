import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";

import { Theme } from "./useTheme.type";

const useTheme = (themeKey: string) => {
  const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [preferredTheme, setPreferredTheme] = useState<Theme>(() =>
    darkSchemeQuery.matches ? "dark" : "light",
  );

  const [savedTheme, setSavedTheme] = useLocalStorage<Theme>(themeKey);

  const currentTheme = useMemo(
    () => savedTheme ?? preferredTheme,
    [preferredTheme, savedTheme],
  );

  const handleColorPreferenceChange = (event: MediaQueryListEvent) => {
    setPreferredTheme(event.matches ? "dark" : "light");
  };

  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setSavedTheme(newTheme);
  }, [currentTheme, setSavedTheme]);

  useEffect(() => {
    darkSchemeQuery.addEventListener("change", handleColorPreferenceChange);

    return () => {
      darkSchemeQuery.removeEventListener(
        "change",
        handleColorPreferenceChange,
      );
    };
  }, []);

  useEffect(() => {
    const theme = savedTheme || preferredTheme;

    document.body.setAttribute("data-theme", theme);
  }, [savedTheme, preferredTheme]);

  return { toggleTheme, setPreferredTheme, theme: currentTheme };
};

export { useTheme };
