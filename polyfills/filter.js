const sum = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

console.log(sum.myFilter((item) => item > 4));
