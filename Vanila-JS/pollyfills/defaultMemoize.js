

const defaultEqualityChecker = (newArgs, lastArgs) => {
  if (newArgs?.length !== lastArgs?.length) return false;
  for (let i = 0; i < newArgs.length; i++) {
    if (!Object.is(newArgs[i], lastArgs[i])) {
      return false;
    }
  }
  return true;
}

Function.prototype.defaultMemoize = (fn, equalityChecker = defaultEqualityChecker) => {
  let lastArgs = null;
  let lastResult;

  return function (...args) {
    if (!equalityChecker(args, lastArgs)) {
      console.log('called:');
      lastResult = fn(...args);
    }
    lastArgs = args;
    return lastResult;
  }
};

const f1 = ({ a, b, c, d }) => {
  return 4 + a + b + c + d;
};

const memof1 = f1.defaultMemoize(f1);

const obj = { a: 2, b: 4, c: 2, d: 4 };
//memof1();
memof1(obj);
memof1(obj, 2);

