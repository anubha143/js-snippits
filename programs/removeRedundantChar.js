// write a program to remove redundant chars from the string
// const removeRedundantChar = (str) => {
//   const hashmap = {};
//   let result = "";
//   for (let char of str) {
//     hashmap[char] = (hashmap[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (hashmap[char] === 1) result += char;
//   }
//   return result;
// };

// console.log(removeRedundantChar("three"));

// ---------------------------------------------------------------------------------------------

// write a program to remove redundant chars from array of string

// const removeRedundantFromArray = (arr) => {
//   const finalArr = [];
//   for (let element of arr) {
//     const hashmap = {};
//     let result = "";
//     for (let char of element) {
//       hashmap[char] = (hashmap[char] || 0) + 1;
//     }
//     for (let char of element) {
//       if (hashmap[char] === 1) result += char;
//     }
//     finalArr.push(result);
//     result = "";
//   }
//   return finalArr;
// };
// console.log(removeRedundantFromArray(["three", "four", "eight", "once"]));

// ---------------------------------------------------------------------------------------------

function findMaxLengthString(arr) {
  return arr.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, "");
}

const removeRedundantFromArray = (arr) => {
  const finalArr = [];

  for (let element of arr) {
    const hashmap = {};
    let result = "";
    for (let char of element) {
      hashmap[char] = (hashmap[char] || 0) + 1;
    }
    for (let char of element) {
      if (hashmap[char] === 1) {
        result += char;
      }
    }
    finalArr.push(result);
    result = "";
  }
  finalArr.sort();
  return findMaxLengthString(finalArr);
};
console.log(
  removeRedundantFromArray(["three", "four", "eight", "once", "mesmerizing"])
);
console.log(removeRedundantFromArray(["four", "foar"]));
console.log(removeRedundantFromArray(["four", "foar", "abbcddertyu"]));
