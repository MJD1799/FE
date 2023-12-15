const arr = [1, 2, [3, 7, 9, [56, 65, []]], "78"];


Array.prototype.myFlat = function callBack(depth = 1) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const ele = this[i];
    if (Array.isArray(ele)) {
      result =
        depth - 1 >= 0
          ? [...result, ...callBack.call(ele, depth - 1)]
          : [...result, ele];
    } else {
      result = [...result,ele];
    }
  }
  return result;
};

console.log('flat:',arr.flat());
console.log('myFlat:',arr.myFlat());

console.log('flat2:',arr.flat(2));
console.log('myFlat2:',arr.myFlat(2));

console.log('flat3:',arr.flat(3));
console.log('myFlat3:',arr.myFlat(3));

console.log('myFlat3:',[].myFlat());