import { CategoryItem } from "@/entities/category";
import { Category } from "@/entities/category/model/types";
import { StyledCategoryList } from "./CategoryList.styled";

type Props = {
  categories: Category[];
};

export function CategoryList({ categories }: Props) {
  return (
    <StyledCategoryList>
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          category={category.name}
          length={category.posts.length}
        />
      ))}
    </StyledCategoryList>
  );
}
