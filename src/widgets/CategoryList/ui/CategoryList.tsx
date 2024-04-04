import { getCategory } from "@/entities/category";
import { CategoryItem } from "@/entities/category";
import { StyledCategoryList } from "./CategoryList.styled";

export async function CategoryList() {
  const categories = await getCategory();

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
