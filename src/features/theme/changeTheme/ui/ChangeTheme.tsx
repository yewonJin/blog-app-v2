"use client";

import { Theme, useThemeStore } from "@/entities/theme";
import { Icon } from "@/shared/ui";

type Props = {
  theme: Theme;
};

export function ChangeTheme({ theme }: Props) {
  const setTheme = useThemeStore((state) => state.setTheme);

  const onClick = () => {
    if (theme === "dark") {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");

      setTheme("light");
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "dark");

      localStorage.setItem("theme", "dark");

      setTheme("dark");
    }
  };

  return (
    <div className={theme}>
      <Icon onClick={onClick} type={theme === "light" ? "sun" : "moon"} />
    </div>
  );
}
