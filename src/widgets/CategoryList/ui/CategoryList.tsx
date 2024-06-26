import { Category } from "@/entities/category";
import { SortBy } from "@/features/post/sortBy";
import { StyledCategoryList } from "./CategoryList.styled";

export function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <StyledCategoryList>
      {categories.map((category) => (
        <SortBy
          key={category.name}
          category={category.name}
          length={category.posts.length}
        />
      ))}
    </StyledCategoryList>
  );
}
