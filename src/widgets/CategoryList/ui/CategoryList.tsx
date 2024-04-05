import { TCategory } from "@/entities/category";
import { SortBy } from "@/features/category/sortBy";
import { StyledCategoryList } from "./CategoryList.styled";

export function CategoryList({ categories }: { categories: TCategory[] }) {
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
