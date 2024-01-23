Function.prototype.myDebounce = function (delay = 0) {
  let timerId, result;
  const context = this;
  console.log("tt:", this);
  return function newer(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      result = context.call(context, ...args);
    }, delay * 1000);
    return result;
  };
};

const fun = (type) => {
  console.log("hello", type);
  return 5;
};

const debounced_fun = fun.myDebounce(2);
console.log("ddL", debounced_fun);
console.log(debounced_fun("2"));


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };


const myDebounce = (fn, delay, immediate) => {
  let timerId;

  return function (...args) {
    const immediateCall = immediate && !timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (!immediate) fn.apply(this, args);
    }, delay);

    if (immediateCall) return fn.apply(this, args);
  }
}