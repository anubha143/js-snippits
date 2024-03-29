// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const alphaNumeric = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      result += char;
    }
  }
  return result;
};

// console.log(alphaNumeric("A man, a plan, a canal: Panama"));

const validPalindrome = (str) => {
  const string = alphaNumeric(str);
  let l = 0,
    r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) return false;
    l = l + 1;
    r = r - 1;
  }
  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
