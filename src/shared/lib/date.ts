export const getDate = (date: string | Date) => {
  return new Date(date).toISOString().split("T")[0];
};
