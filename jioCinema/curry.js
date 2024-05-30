// Implement a function that will return the sum of all the args and returns the total if no args are passed, can be called multiple times sum(10,12,12)(20,21)(32)(40)()

// function sum(...args) {
//   const curSum = args.reduce((a, b) => a + b, 0);
//   return (...ar) => {
//     console.log("...ar", ar);
//     if (ar.length === 0) {
//       return curSum;
//     }
//     return sum(curSum, ...ar);
//   };
// }
// console.log(sum(10, 12, 12)(20, 21)(32)(40)());

// another version of curry

function curry(fn) {
  return function curried(...args) {
    console.log("args", args);
    console.log("function length", fn.length);

    if (args.length >= fn.length) {
      console.log("in the if");
      return fn.apply(this, args);
    } else {
      console.log("in the else");
      return function (...args2) {
        console.log("args2", args2);
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function add(a, b, c, d) {
  return a + b + c + d;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)(4));
