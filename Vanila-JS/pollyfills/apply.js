Function.prototype.myApply = function pppp(newContext,arg){
    const context = this;
    return context.call(newContext,...arg);
}


const aa={
    name:'aaa',
    getA: function(a,b,c){
        console.log('arg:',a,b,c);
        return this.name+a;
    }
};
const b= {
    name:'bbb',
}
console.log(aa.getA.apply(b,['a2','b6']),aa.getA.myApply(b,['a93932','b6']));