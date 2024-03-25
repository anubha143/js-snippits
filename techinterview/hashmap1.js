// Given a string, return the character that is most commonly used in the string

// example maxChar("abbbcccccdddee") -> c

// WAY-1
const maxChar = (str) => {
  const hashmap = {};
  let max = 0;
  let char = "";
  for (let char of str) {
    hashmap[char] = (hashmap[char] ?? 0) + 1;
  }
  for (const [key, value] of Object.entries(hashmap)) {
    if (value > max) {
      max = value;
      char = key;
    }
  }
  return char;
};
console.log(maxChar("aabbccdddd"));

// WAY-2

const maxChar2 = (str) => {
  const hashmap = {};
  let max = 0;
  let char = "";
  for (let char of str) {
    hashmap[char] = (hashmap[char] ?? 0) + 1;
  }
  for (let key in hashmap) {
    if (hashmap[key] > max) {
      max = hashmap[key];
      char = key;
    }
  }
  return char;
};
console.log(maxChar2("aaaarr"));
