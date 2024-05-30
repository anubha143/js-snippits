const sum = [1, 2, 3, 4, 5];
const result = sum.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], this) : this[i];
  }
  return acc;
};

console.log(sum.myReduce((acc, curr) => acc * curr, 1));
