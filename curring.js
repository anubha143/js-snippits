// sum(1)(2)(3)

// const curry = (a) => (b) => (c) => a + b + c;
// console.log(curry(1)(2)(3));

// same sum function without using arrow functin

// function curry2(a) {
//   return function (b) {
//     if (typeof b !== "undefined") {
//       return function (c) {
//         if (typeof c !== "undefined") {
//           return a + b + c;
//         } else {
//           return a + b;
//         }
//       };
//     } else {
//       return a;
//     }
//   };
// }
// console.log("curry2", curry2(5)(4)());

function curry3(a) {
  console.log("a", a);
  return function (b) {
    console.log("b", b);
    if (b) return curry3(a + b);
    return a;
  };
}
console.log("curry3", curry3(10)(4)());

// Question 2
// evaluate("sum")(1)(2)
// evaluate("multiply")(1)(2)
// evaluate("divide")(1)(2)
// evaluate("subtract")(1)(2)

// const evaluate = (operation) => (a) => (b) => {
//   if (operation === "sum") return a + b;
//   else if (operation === "multiply") return a * b;
//   else if (operation === "divide") return a / b;
//   else if (operation === "subtract") return a - b;
//   else return "Invalid operation";
// };

// console.log(evaluate("sum")(1)(2));
// console.log(evaluate("multiply")(5)(2));

// const mul = evaluate("multiply"); //this is the example of closure also
// console.log(mul(7)(4));

// Question 3 -> Infinite Currying => sum(1)(2)(3)

// const infiniteCurrying = (a) => (b) => {
//   if (b) return infiniteCurrying(a + b);
//   return a;
// };
// console.log(infiniteCurrying(2)(8)(10)());
