export const searchService = async ({
  searchText = "",
  pageInfo = {},
  networkOptions = {}
}) => {
  console.log("pageInfo:", pageInfo);
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchText}&limit=${pageInfo.limit}&skip=${pageInfo.skip}`,
    networkOptions
  );
  const data = await response.json();
  console.log("data:", data);
  return data?.products;
};
