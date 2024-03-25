const memoize = (fn) => {
  const res = {};
  return (...args) => {
    console.log("args", args);
    let argsCache = JSON.stringify(args);
    console.log("argsCache", argsCache);
    if (!res[argsCache]) {
      res[argsCache] = fn(...args);
    }
    return res[argsCache];
  };
};

const clumsyCalculation = (num1, num2) => {
  for (let i = 1; i < 100000; i++) {}
  return num1 * num2;
};
// console.time("First Call");
// console.log(clumsyCalculation(12, 12));
// console.timeEnd("First Call");

const memoizeClumsyCalculation = memoize(clumsyCalculation);
console.time("First Call");
console.log(memoizeClumsyCalculation(12, 14));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizeClumsyCalculation(12, 14));
console.timeEnd("Second Call");
