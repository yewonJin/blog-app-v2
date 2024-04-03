export const setInitialThemeMode = `
  const getIntialThemeMode = () => {
    const storageTheme = localStorage.getItem("theme");
    const hasStorageTheme = typeof storageTheme === "string";

    if (hasStorageTheme) {
      return storageTheme;
    }

    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }

    return "light";
  };

  const currentMode = getIntialThemeMode();

  document.documentElement.setAttribute("data-theme", currentMode);
  localStorage.setItem("theme", currentMode);
`;
