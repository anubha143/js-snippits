// const createBase = (a) => (b) => a + b;

// let addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(20));

// time optimization

// const find = () => {
//   let a = [];
//   for (let i = 0; i < 10000; i++) {
//     a[i] = i * i;
//   }
//   return (index) => console.log(a[index]);
// };

// const closure = find();
// console.time("time of 6");
// closure(6);
// console.timeEnd("time of 6");
// console.time("time of 20");
// closure(20);
// console.timeEnd("time of 20");

// without closure

// const find2 = (index) => {
//   let a = [];
//   for (let i = 0; i < 10000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// };
// console.time("time of 6");
// find2(6);
// console.timeEnd("time of 6");

// console.time("time of 20");
// find2(20);
// console.timeEnd("time of 20");

// ---------------------------------------------------------------------------------

// for (var i = 0; i < 3; i++) {
//   let inner = (i) => {
//     setTimeout(() => console.log(i), i * 1000);
//   };
//   inner(i);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// USE CLOSURE TO CREATE A PRIVATE COUNTER

// const counter = () => {
//   let count = 0;
//   return () => {
//     return count++;
//   };
// };

// let increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// var Module = (function () {
//   const privateMethod = () => {
//     console.log("Private");
//   };
//   return {
//     publicMethod: function () {
//       console.log("Public");
//     },
//   };
// })();

// Module.publicMethod();
// Module.privateMethod();

// -----------------------------------------------------------------------

// Make this run only once

let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already called");
    } else {
      view = "Called once";
      console.log("this is", view);
    }
  };
}
let called = likeTheVideo();
called();
called();
called();
