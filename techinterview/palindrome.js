const isPalindrome = (str) => {
  const result = str.split("").reverse().join("");
  return str === result;
};

console.log(isPalindrome("anubha"));
console.log(isPalindrome("madam"));
