Function.prototype.myDebounce = function (delay = 300) {
  let timerId, result;
  const context = this;
  console.log("tt:", this);
  return function newer(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      result = context.call(context, ...args);
    }, delay);
    return result;
  };
};

export const getList = async (searchText) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await response.json();
  return data.filter((item) => item?.title.toLowerCase().substr(0, searchText?.length) === searchText?.toLowerCase())
}

export const getListDebounced = getList.myDebounce(500);

