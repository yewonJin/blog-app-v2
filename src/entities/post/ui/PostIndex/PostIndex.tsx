"use client";

import { useEffect, useRef, useState } from "react";

import { useThrottle } from "@/shared/lib";
import { getPostIndex } from "../../lib/postIndex";
import { PostIndexItem, StyledPostIndex } from "./PostIndex.styled";

interface ExtendedElement extends Element {
  offsetTop: number;
}

export function PostIndex({ markdown }: { markdown: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const onScroll = (offsets: number[]) => {
    setHighlightedIndex(offsets.filter((x) => window.scrollY >= x).length - 1);
  };

  const throttleOnScroll = useThrottle(onScroll, 100);

  useEffect(() => {
    if (
      !divRef.current ||
      !divRef.current.parentNode ||
      !divRef.current.parentNode.parentNode ||
      !divRef.current.parentNode.parentNode.parentNode
    )
      return;

    const children =
      (Array.from(
        divRef.current.parentNode.parentNode.parentNode.children[1].children[1]
          .children[0].children
      ) as ExtendedElement[]) || [];

    const offsets = children
      .filter(
        (x) =>
          x.nodeName === "H1" ||
          x.nodeName === "H2" ||
          x.nodeName === "H3" ||
          x.nodeName === "H4"
      )
      .map((item) => item.offsetTop - 100);

    document.addEventListener("scroll", () => throttleOnScroll(offsets));

    return document.removeEventListener("scroll", () =>
      throttleOnScroll(offsets)
    );
  }, []);

  return (
    <div ref={divRef}>
      <StyledPostIndex>
        {getPostIndex(markdown).map((item, i) => (
          <PostIndexItem
            key={item.order}
            href={`#${item.content}`}
            heading={item.header.split("").length}
            isHighlighted={highlightedIndex === i}
          >
            {item.originalContent}
          </PostIndexItem>
        ))}
      </StyledPostIndex>
    </div>
  );
}
