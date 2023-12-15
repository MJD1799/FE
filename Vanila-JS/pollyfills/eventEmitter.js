class EventEmitter{
    constructor(){
      this.events={};
    }

    on(event,handler){
        if(this.events[event]){
            this.events[event].add(handler);
        }else{
            this.events[event] = new Set([handler]);
        }

    }

    emit(event,...args){
       const handlers = this.events[event];
       if(!handlers) return new Error('given event is not registerd');
       for(const fn of handlers) {
        fn(...args);
    }
    //    handlers.forEach((cb)=>{
    //        cb();
    //    });
    }

    removeListener(event,handler){
        const handlers = this.events[event];
        handlers &&  handlers.delete(handler);
    
    }

    removeAllListeners(event){
        delete this.events[event];
    }
}

const e1 = new EventEmitter();
const fn1 = (msg)=>{console.log('mm1:',msg)}
const fn2 = (msg)=>{console.log('mm2:',msg)}
e1.on('e1',fn1);
e1.on('e1',fn2);
e1.on('e2',fn1);

e1.emit('e1','chk');
e1.emit('e2','chk-2');

e1.removeListener('e1',fn1);
e1.removeListener('e1',fn2);
e1.removeListener('e1',fn2);
e1.on('e1',fn2);
e1.removeAllListeners('e1');
e1.emit('e1','event=1');

