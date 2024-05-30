// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// const longestCommonPrefix = function (strs) {
//   let result = "";
//   if (strs.length < 2) {
//     return strs;
//   }
//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < strs[i].length; j++) {
//       if (strs[i][j] === strs[i + 1][j] && strs[i][j] === strs[i + 2][j]) {
//         result += strs[i][j];
//       } else return result;
//     }
//   }
//   return result;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

const longestCommonPrefix = (str) => {
  let prefix = str[0];
  if (str.length === 0) return "";
  for (let word of str) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix === "") return "";
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
