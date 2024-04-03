"use client";

import { useEffect } from "react";

import { type Theme } from "../model/types";
import { useStore } from "../model/store";

type Props = {
  localStorageTheme?: Theme;
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const setTheme = useStore((state) => state.setTheme);

  useEffect(() => {
    const theme = document
      .getElementsByTagName("html")[0]
      .getAttribute("data-theme") as Theme;

    setTheme(theme);
  }, []);

  return <>{children}</>;
}
