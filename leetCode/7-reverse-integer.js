var reverse = function (x) {
  const reversed =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) return 0;
  return reversed;
};
// console.log(reverse(120));
console.log(reverse(-129));
