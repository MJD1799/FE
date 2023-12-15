/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
  return new Promise((res, rej) => {
    let result = [],
      count = 0;
    if (iterable.length === 0) return res([]);
    for (let i = 0; i < iterable.length; i++) {
      const val = Promise.resolve(iterable[i]);
      val
        .then((reolved) => {
          result[i] = reolved;
          count++;
          if (count === iterable.length) return res(result);
        })
        .catch((err) => rej(err));
    }
  });
}
const p0 = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve(2);
  }, 10);
});
const p1 = Promise.reject(3);
const p2 = 4;

const fun = async () => {
  const res = await promiseAll([p1]);
  console.log("res:", res);
};
fun();
