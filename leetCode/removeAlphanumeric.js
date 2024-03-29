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

console.log(alphaNumeric("A man, a plan, a canal: Panama"));

// function keepAlphanumeric(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     // Check if the character is alphanumeric
//     if (
//       (char >= "a" && char <= "z") ||
//       (char >= "A" && char <= "Z") ||
//       (char >= "0" && char <= "9")
//     ) {
//       result += char;
//     }
//   }
//   return result;
// }

// // Test the function
// var inputString = "A man, a plan, a canal: Panama";
// var result = keepAlphanumeric(inputString);
// console.log(result); // Output: "AmanaplanacanalPanama"
