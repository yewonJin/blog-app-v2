"use client";

import { CategoryItem, useCategoryStore } from "@/entities/category";
import { StyledSortBy } from "./SortBy.styled";

type Props = {
  category: string;
  length: number;
};

export function SortBy({ category, length }: Props) {
  const sortBy = useCategoryStore((state) => state.sortBy);
  const setSortBy = useCategoryStore((state) => state.setSortBy);

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
