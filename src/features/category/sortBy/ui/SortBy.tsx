"use client";

import { CategoryItem, useStore } from "@/entities/category";
import { StyledSortBy } from "./SortBy.styled";

type Props = {
  category: string;
  length: number;
};

export function SortBy({ category, length }: Props) {
  const sortBy = useStore((state) => state.sortBy);
  const setSortBy = useStore((state) => state.setSortBy);

  const handleClick = () => {
    if (sortBy === category) {
      setSortBy("");
    } else {
      setSortBy(category);
    }
  };

  return (
    <StyledSortBy isSorted={sortBy === category} onClick={handleClick}>
      <CategoryItem category={category} length={length} />
    </StyledSortBy>
  );
}
