"use client";

import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import { StyledScrollToTop } from "./ScrollToTop.styled";
import { useThrottle } from "@/shared/lib";

export function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => setScrollY(window.scrollY);

  const throttleOnScroll = useThrottle(onScroll, 100);

  useEffect(() => {
    document.addEventListener("scroll", throttleOnScroll);
  }, []);

  if (scrollY <= 30) return;

  return (
    <StyledScrollToTop onClick={() => window.scrollTo(0, 0)}>
      <Icon type="arrow_upward" />
    </StyledScrollToTop>
  );
}
