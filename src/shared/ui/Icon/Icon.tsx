import StyledIcon from "./Icon.styled";

import SearchIcon from "../../../../public/assets/icons/search.svg";
import GitHubIcon from "../../../../public/assets/icons/github.svg";
import SunIcon from "../../../../public/assets/icons/sun.svg";
import MoonIcon from "../../../../public/assets/icons/moon.svg";
import ArrowUpWardIcon from "../../../../public/assets/icons/arrow_upward.svg";
import LinkIcon from "../../../../public/assets/icons/link.svg";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: "search" | "sun" | "moon" | "github" | "arrow_upward" | "link";
};

const icons = {
  search: <SearchIcon />,
  github: <GitHubIcon />,
  sun: <SunIcon />,
  moon: <MoonIcon />,
  arrow_upward: <ArrowUpWardIcon />,
  link: <LinkIcon />,
};

export function Icon({ onClick, type }: Props) {
  return <StyledIcon onClick={onClick}>{icons[type]}</StyledIcon>;
}
