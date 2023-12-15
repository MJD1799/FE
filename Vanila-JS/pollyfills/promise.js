// // const resolver = (value) => 2 * value;
// // const rejector = (value) => -1 * value;

// // const p1 = new Promise((res, rej) => {
// //     if (true) {
// //         res(123);
// //     } else {
// //         rej("err");
// //     }
// // });

// //  p1.then((value) => { console.log('res:', value) }, (err) => { console.log('ee:', err) });
// //  p1.then((value) => { console.log('res:', value) }, (err) => { console.log('ee:', err) });

const STATE = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED',
};

class MyPromise {

  result;
  constructor(callBack) {
    this.state = STATE.PENDING;
    this.thenCb = [];
    this.catchCb = [];
    try {
      callBack(this.onResolve.bind(this), this.onReject.bind(this));
    } catch {
      this.onReject(this.result);
    }
  }

  onResolve(value) {
    if (this.state === STATE.PENDING) {
      // console.log('resolve:',value,this.thenCb);
      if (value instanceof MyPromise) {
        console.log('value:', value);
        value.then(this.onResolve.bind(this), this.onReject.bind(this));
        return;
      }
      this.state = STATE.COMPLETED;
      this.result = value;
      this.thenCb && this.thenCb.forEach((cb) => cb(value));
    }
  }

  onReject(value) {
    if (this.state === STATE.PENDING) {
      this.state = STATE.REJECTED;
      this.result = value;
      this.catchCb && this.catchCb.forEach((cb) => cb(value));
    }
  }


  then(resCb, rejCb) {
    if (this.state === STATE.COMPLETED) {
      resCb && resCb(this.result);
    }
    if (this.state === STATE.REJECTED) {
      rejCb && rejCb(this.result);
    }
    if (resCb) this.thenCb.push(resCb);
    if (rejCb) this.catchCb.push(rejCb);
    //console.log('then:',this.thenCb)
    return this;
  }

  catch(cb) {
    return this.then(null, cb);
  }
}

const p1 = new MyPromise((res, rej) => {
  //res("hello");
  //res("world");
  setTimeout(() => {
    //res("hello");
    res("world");
  }, 1000);
});

const r1 = p1.then((val) => {
  return new MyPromise((res, rej) => {
    res(val);
  });
});
//console.log('r1:', r1, r1.catch(console.log));
p1.then((val) => {
  const p1nested = new MyPromise((res, rej) => {
    setTimeout(() => {
      res(val)
    }, 1000);
  });
  setTimeout(() => {
    return
  }, 1000);

}).catch((err) => {
  console.log(err);

}).then(console.log);
//p1.then(console.log);

//const run = (result, isError = false, isAsync = false, isPromise = false) => new MyPromise((res, rej) => {
//  const exec = isError ? rej : res;


//  if (isPromise) {
//    exec(new MyPromise((res1, rej1) => {
//      const nestedExec = isError ? rej1 : res1;
//      if (isAsync) {
//        setTimeout(() => {
//          nestedExec(result);
//          nestedExec(result);
//        }, 1000);
//      } else {
//        nestedExec(result);
//        nestedExec(result);
//      }
//    }));
//    return exec;
//  }
//  if (isAsync) {
//    setTimeout(() => {
//      exec(result);
//      exec(result);
//    }, 1000);
//  } else {
//    exec(result);
//    exec(result);
//  }



//});

//const type1 = run("success-simple", false, false);
//const type2 = run("success-async", false, true);
//const type3 = run("err-simple", true, false);
//const type4 = run("err-async", true, true);

//const chain1 = run("success-simple-chain", false, false, true);

////const runPromise = (promise) => {
////  promise.then((val) => {
////    console.log('res:', val);
////  }, (err) => {
////    console.log('errTh:', err);
////  }).catch((e) => console.log('errC:', e)).then(val1 => console.log('lvl2-res:', val1));
////}

//runPromise(type1);
// runPromise(type2);
// runPromise(type2);
// runPromise(type3);
// runPromise(type3);
//runPromise(chain1);
//runPromise(type4);








//const p1 = new Promise((res, rej) => {
//    if (true) {
//        return res(new Promise((res1,rej1)=>{
//            setTimeout(()=>{
//                res1(123);
//            },1000);
//        }))

//    } else {
//        rej()
//    }
//});

//p1.then((v)=>{
//    console.log('vvv:',v.then((vv1)=>console.log('11:',vv1)));
//   // console.log('v:',v)
//})