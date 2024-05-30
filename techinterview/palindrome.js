// const isPalindrome = (str) => {
//   const result = str.split("").reverse().join("");
//   return str === result;
// };

// console.log(isPalindrome("anubha"));
// console.log(isPalindrome("madam"));

var isPalindrome = function (x) {
  const reversed = x.toString().split("").reverse().join("");
  const result = parseInt(reversed);
  return result === x;
};
console.log(isPalindrome(121));
