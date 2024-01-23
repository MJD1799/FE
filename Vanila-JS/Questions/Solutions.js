// Ans-1

//const retry = async (fn, maxRetries = 3, delay = 50, onError = () => "Something Wrong!!", successCallBack) => {
//  let result;
//  let errorCount = 0;
//  try {
//    result = await fn(maxRetries);
//    successCallBack(result);
//  } catch (e) {
//    console.log('ee:', e);
//    if (maxRetries <= 1) {
//      onError(e);
//    } else {
//      await new Promise(res => {
//        setTimeout(() => {
//          res()
//        }, delay);
//      });
//      retry(fn, maxRetries - 1, delay, onError, successCallBack);
//    }
//  }
//}

//const p = (count) => {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      console.log('c:', count);
//      if (count === 1) {
//        res('ran');
//      } else {
//        rej('failed');
//      }

//    }, 3000);
//  });
//}

//retry(p, 3, 50, (e) => {
//  console.log('not able to run task!!', e);
//}, (res) => {
//  console.log('success:', res);
//})

// ********** Ans-2 ********************

//const getSlicedArr = (arr, limit) => {
//  const ans = [];
//  let i;
//  for (i = 0; i < arr.length; i += limit) {
//    ans.push(arr.slice(i, i + limit));
//  };

//  return ans;
//}
//const mapLimit = (arr, limit, callBack) => {
//  const slicedArr = getSlicedArr(arr, limit);

//  return new Promise((finalRes,finalRej)=>{
//    slicedArr.reduce(async (acc,val)=>{
//      const prevResult = await acc;
//      val.reduce(async(subResult,subItem)=>{
//        const prevSubArray = await subResult;
//        callBack(subItem,())

//      },new Promise.resolve([]));



//    },new Promise.resolve([]));


//  });


//}

//mapLimit([1, 2, 3, 4, 4, 5, 5, 5], 3)


// ans-3

//class AutoIncrement {
//  constructor(initialValue, step) {
//    this.count = initialValue;
//    this.step = step;
//    this.init();
//  }

//  init() {
//    this.timerId = setInterval(() => {
//      this.count += this.step;
//      console.log('Count:', this.count);
//    }, 1000);

//    return this.timerId;
//  }

//  pause() {
//    clearInterval(this.timerId);
//  }

//  resume() {
//    this.init();
//  }

//}

//const counter1 = new AutoIncrement(0, 2);
//setTimeout(() => {
//  counter1.pause();
//  console.log('paused:');
//}, 4000);

//setTimeout(() => {
//  counter1.resume();
//  console.log('resumed:');
//}, 5000);


// ans -4

function Add(...args) {
  let result;
  return {
    value: () => this.result,

  }

}