export const makeOptions = (response) => {
  return response.map((item) => ({ value: item?.id, label: item?.title }));
};
