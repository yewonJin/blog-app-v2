export const getPostIndex = (markdown: string) => {
  const index =
    markdown.match(/(#+)(\s)(.+)/gi)?.map((item, index) => ({
      order: index,
      header: item.split(" ")[0],
      originalContent: item.replace(item.split(" ")[0], "").trim(),
      content: item.replace(item.split(" ")[0], "").trim(),
      isDuplicated: false,
    })) || [];

  const sortedIndex = index.sort((a, b) => a.order - b.order);

  sortedIndex.forEach((item, i) => {
    const duplication = sortedIndex.filter((x) => x.content === item.content);

    if (duplication.length === 1) {
      sortedIndex[i].isDuplicated = true;
      return;
    }

    if (!item.isDuplicated) {
      duplication.forEach((item2, index) => {
        sortedIndex[item2.order].isDuplicated = true;

        if (index === 0) return;

        sortedIndex[item2.order].content += "-" + index;
      });
    }
  });

  const result = sortedIndex.map((item) => ({
    order: item.order,
    header: item.header,
    originalContent: item.originalContent,
    content: `${item.content.replaceAll(" ", "-")}`,
  }));

  return result;
};
