// console.log("================Let's Start=====================");

// // 1.clouser
// function timer(duration) {
//   let timerId;
//   return function (a, b) {
//     timerId && clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       console.log(`ran after ${duration} second(s).`);
//     }, duration * 1000);
//   };
// }

// timer(2)();
// timer(10)();

// const tt = timer(4);
// console.log("clouser:", tt.length);

// // 2. type coresion

// // The Number 10 is converted to
// // string '10' and then '+'
// // concatenates both strings
// var x = 10 + "20";
// var y = "20" + 10;

// // The string '5' is converted
// // to number 5 in all cases
// // implicitly
// var w = 10 - "5";
// var x = 10 * "5";
// var y = 10 / "5";
// var z = 10 % "5";

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// // The Boolean value true is converted
// // to string 'true' and then '+'
// // concatenates both the strings
// var z = true + "10";

// console.log(x);
// console.log(y);
// console.log(z);

// // The Boolean value true is
// // converted to number 1 and
// // then operation is performed
// var x = true + 2;

// // The Boolean value false is
// // converted to number 0 and
// // then operation is performed
// var y = false + 2;

// console.log(x);
// console.log(y);

// // Should output 'true' as string '10'
// // is coerced to number 10
// var x = 10 == "10";

// // Should output 'true', as boolean true
// // is coerced to number 1
// var y = true == 1;

// // Should output 'false' as string 'true'
// // is coerced to NaN which is not equal to
// // 1 of Boolean true
// var z = true == "true";

// console.log(x);
// console.log(y);
// console.log(z);

// 3. Event Loop
// console.log("Start");
// setTimeout(function () {
//   console.log("Timeout");
// }, 0);
// console.log("End");

// console.log('Start');
// setTimeout(() => console.log('Timeout 1'), 0);
// setTimeout(() => console.log('Timeout 2'), 0);
// console.log('End');

// const delay = (duration) =>
//   new Promise((resolve) => setTimeout(resolve, duration));
// console.log("Start");
// delay(1000)
//   .then(() => console.log("Promise 1"))
//   .then(() => delay(1000))
//   .then(() => console.log("Promise 2"));
// console.log("End");

// // let vs var example 1:
// var x = 5;
// if (true) {
//   var x = 10;
// }
// console.log(x); // 10
// let y = 5;
// if (true) {
//   let y = 10;
// }
// console.log(y); // 5

// //let vs var example 2:
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i); // 5
// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// console.log(j); // ReferenceError: j is not defined

// This
// const person = {
//   name: "John",
//   sayHello: function () {
//       console.log('ttt:',this);
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
// person.sayHello(); // Hello, I'm John
// const greet = person.sayHello;
// greet(); // Hello, I'm undefined

// class Person {
//   constructor(name, d, d1) {
//     this.name = name;
//   }
//   static sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const john = new Person("John");
// Person.sayHello();
// console.log("ppp:", Person.__proto__.__proto__.__proto__);

// const person = {
//   name: "John",
//   sayHello: () => {
//       console.log('ttt:',this);
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// person.sayHello();

// const person = {
//   name: "John",
//   sayHello: function () {
//     const that = this;
//     setTimeout(()=>{
//         console.log('tt:',this,that);
//       console.log(`Hello, my name is ${that.name}`);
//     }, 1000);
//   },
// };
// person.sayHello();

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = () => {
//   console.log(`Hello, my name is ${this.name}`);
// };
// const john = new Person("John");
// john.sayHello();

for (var i = 0; i < 5; i++) {
  //const j = i;
  setTimeout((x=i) => {
    console.log(x);
  }, 0);
}
