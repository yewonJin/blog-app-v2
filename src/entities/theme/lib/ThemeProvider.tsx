"use client";

import { useEffect } from "react";

import { type Theme } from "@/entities/theme";
import { useThemeStore } from "@/entities/theme";

type Props = {
  localStorageTheme?: Theme;
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const theme = document
      .getElementsByTagName("html")[0]
      .getAttribute("data-theme") as Theme;

    setTheme(theme);
  }, []);

  return <>{children}</>;
}
