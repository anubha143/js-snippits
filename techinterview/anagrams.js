// check if two string provided are anagrams of one another or not

// Way 1
const anagrams = (str1, str2) => {
  str1 = str1.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  return false;
};
console.log(anagrams("a!!!nubha is good", "nuahba gd ioos"));
console.log(anagrams("hawai is cool", "adiaos amigo"));

// Way2

// const hashMap = (str) => {
//   const charmap = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");
//   for (let char of str) {
//     charmap[char] = (charmap[char] ?? 0) + 1;
//   }
//   return charmap;
// };

// const anagrams2 = (str1, str2) => {
//   const charMapA = hashMap(str1);
//   const charMapB = hashMap(str2);
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;
//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) return false;
//   }
//   return true;
// };

// console.log(anagrams2("a!!!nubha is good", "nuahba gd ioos"));
// console.log(anagrams2("hawai is cool", "adiaos amigo"));
