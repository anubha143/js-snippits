var checkInclusion = function (s1, s2) {
  const strArray = s2.split("");
  const hashmap = {};
  for (let char of strArray) {
    hashmap[char] = (hashmap[char] ?? 0) + 1;
  }
  for (let char of s1) {
    if (hashmap[char] > 0) {
      --hashmap[char];
    } else return false;
  }
  return true;
};
console.log(checkInclusion("abza", "aeidbaooz"));
