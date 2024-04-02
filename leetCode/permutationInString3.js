function checkInclusion(s1, s2) {
  const s1Hashmap = {},
    s2Hashmap = {};
  s2Hashmap = {};
  let matches = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Hashmap[s1[i]] = (s1Hashmap[s1[i]] || 0) + 1;
    s2Hashmap[s2[i]] = (s2Hashmap[s2[i]] || 0) + 1;
  }
  console.log("s1 & s2", s1Hashmap, s2Hashmap);
  for (let char in s1Hashmap) {
    if (s1Hashmap[char] === s2Hashmap[char]) matches++;
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (matches === Object.keys(s1Hashmap).length) return true;
  }
  return s1Hashmap;
}
console.log(checkInclusion("hello", "ooolleoooleh"));
