export const login = async (body: { id: string; password: string }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: myHeaders,
    });
  } catch (error) {
    throw error;
  }
};
