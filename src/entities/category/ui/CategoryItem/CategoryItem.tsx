import Link from "next/link";

import {
  CategoryLength,
  CategoryName,
  StyledCategoryItem,
} from "./CategoryItem.styled";

type Props = {
  category: string;
  length: number;
};

export function CategoryItem({ category, length }: Props) {
  return (
    <Link href={`/category/${category}`}>
      <StyledCategoryItem>
        <CategoryName>{category}</CategoryName>
        <CategoryLength>{`(${length})`}</CategoryLength>
      </StyledCategoryItem>
    </Link>
  );
}
