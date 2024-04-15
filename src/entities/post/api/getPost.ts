export const getPost = async () => {
  const result = await (await fetch(`${process.env.BASE_URL}/api/post`)).json();

  return result;
};

export const getPostByPostNumber = async (postNumber: number) => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/post?id=${postNumber}`)
  ).json();

  return result;
};

export const getPostByPostNumberWithoutContent = async (postNumber: number) => {
  const result = await (
    await fetch(
      `${process.env.BASE_URL}/api/post?id=${postNumber}&content=false`
    )
  ).json();

  return result;
};

export const getLastestPost = async () => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/post?postNumber=true`)
  ).json();

  return result;
};
