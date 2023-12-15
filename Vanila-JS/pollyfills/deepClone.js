function deepClone(value) {
  let result;
  if (Array.isArray(value)) {
    result = [];
    value.forEach((val) => {
      result.push(deepClone(val));
    });

    return result;
  }

  if (typeof value === "object" && value !== null) {
    result = {};
    for (let arr of Object.entries(value)) {
      result = {
        ...result,
        [arr[0]]: deepClone(arr[1]),
      };
    }
    return result;
  }

  result = value;
  return result;
}
