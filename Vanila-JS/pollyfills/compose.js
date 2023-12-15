

function compose(...arg){
    let result;
  return function(val){
      if(!arg?.length) return undefined;
      result = val;
      for(let i=arg.length-1;i>=0;i--){
          if(typeof arg[i] !=='function') throw new Error('not valid argument passed in compose');
        result = arg[i](result);
      }
      return result;
  }
}

const fn1= (num)=>num*1;
const fn2 = num=>num+2;
const fn3 = 3
const fun = compose();

console.log('ree:',fun(3));