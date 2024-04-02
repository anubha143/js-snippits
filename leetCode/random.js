const searchValue = "hello";
const data = "ooolleoooleh";

const searchValueMap = new Map();

for (const char of searchValue) {
  searchValueMap.set(char, true);
}

console.log("searchValueMap", searchValueMap);

let matchedValue = 0;

for (const char of data) {
  if (searchValueMap.has(char)) {
    matchedValue++;
  } else matchedValue = 0;
  if (matchedValue === searchValueMap.size) break;
}

console.log(matchedValue === searchValueMap.size ? "YES" : "NO");

// function checkInclusion(s1, s2) {
//   const searchMap = new Map();
//   let matchedValue = 0;
//   for (let char of s1) {
//     searchMap.set(char, true);
//   }
//   console.log("searchMap", searchMap);
//   for (let char of s2) {
//     if (searchMap.has(char)) {
//       matchedValue++;
//     } else matchedValue = 0;
//     if (matchedValue === searchMap.size) break;
//   }
//   return matchedValue ? true : false;
// }
// console.log(checkInclusion("ab", "eidbaooo"));
