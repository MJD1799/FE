const aa = {
  p: "poke",
  getP: function (...args) {
      console.log('ar:',args);
    return this.p + "mon";
  },
};

const bb = {
  p: "mon",
};

const cc = {
    p: "ppppppp",
  };
  

Function.prototype.myBind = function pppp(newContext,...arg){
    const context = this;
    console.log('ss')
    return function (...callArgs){
           console.log('ss:',context);
           const totalArgs = [...arg,...callArgs];
           return context.call(newContext,...totalArgs);
    }
}

const bbBinded = aa.getP.bind(bb,'one');
const bb_1 = aa.getP.myBind(bb,'one');

console.log(bbBinded('two'),bb_1('three','four'),aa.getP.myBind(cc,'one-19029')());
