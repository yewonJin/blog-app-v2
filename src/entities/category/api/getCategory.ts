export const getCategory = async () => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/category`)
  ).json();

  return result;
};

export const getCategoryByName = async (categoryName: string) => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/category?name=${categoryName}`)
  ).json();

  return result;
};
