// USING ARRAY

// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;

//   const sCount = new Array(26).fill(0);
//   const pCount = new Array(26).fill(0);

//   for (let i = 0; i < s1.length; i++) {
//     sCount[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
//     pCount[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
//   }

//   console.log("sCount", sCount);
//   console.log("pCount", pCount);

//   let matches = 0;
//   for (let i = 0; i < 26; i++) {
//     if (sCount[i] === pCount[i]) matches++;
//   }

//   console.log("matches", matches);

//   for (let i = s1.length; i < s2.length; i++) {
//     if (matches === 26) return true;

//     const leftIndex = s2.charCodeAt(i - s1.length) - "a".charCodeAt(0);
//     const rightIndex = s2.charCodeAt(i) - "a".charCodeAt(0);

//     pCount[rightIndex]++;
//     if (pCount[rightIndex] === sCount[rightIndex]) matches++;
//     else if (pCount[rightIndex] === sCount[rightIndex] + 1) matches--;

//     pCount[leftIndex]--;
//     if (pCount[leftIndex] === sCount[leftIndex]) matches++;
//     else if (pCount[leftIndex] === sCount[leftIndex] - 1) matches--;
//   }

//   return matches === 26;
// }

// // Test cases
// console.log(checkInclusion("ab", "eidbaooo")); // Output: true
// console.log(checkInclusion("ab", "eidboaoo")); // Output: false

// USING HASHMAP

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const sCount = {};
  const pCount = {};

  // Initialize character counts in sCount and pCount
  for (let i = 0; i < s1.length; i++) {
    const s1Char = s1[i];
    const s2Char = s2[i];

    sCount[s1Char] = (sCount[s1Char] || 0) + 1;
    pCount[s2Char] = (pCount[s2Char] || 0) + 1;
  }

  console.log("sCount", sCount);
  console.log("pCount", pCount);

  let matches = 0;

  // Count matches for characters in s1 and s2
  for (let char in sCount) {
    if (sCount[char] === pCount[char]) matches++;
  }
  console.log("matches", matches);
  // Slide window and update character counts
  for (let i = s1.length; i < s2.length; i++) {
    if (matches === Object.keys(sCount).length) return true;

    const leftIndex = s2[i - s1.length];
    const rightIndex = s2[i];

    console.log("leftIndex", leftIndex);
    console.log("rightIndex", rightIndex);
    console.log("sCount -> rightIndex", sCount[rightIndex] + 1);
    pCount[rightIndex] = (pCount[rightIndex] || 0) + 1;
    if (pCount[rightIndex] === sCount[rightIndex]) matches++;
    else if (pCount[rightIndex] === sCount[rightIndex] + 1) matches--;

    pCount[leftIndex]--;
    if (pCount[leftIndex] === sCount[leftIndex]) matches++;
    else if (pCount[leftIndex] === sCount[leftIndex] - 1) matches--;
    console.log("second matches", matches);
    console.log("i", i);
  }

  return matches === Object.keys(sCount).length;
}

// Test cases
console.log(checkInclusion("hello", "ooolleoooleh"));
// console.log(checkInclusion("ab", "eidbaooo")); // Output: true
// console.log(checkInclusion("ab", "eidboaoo")); // Output: false

// -----------------------------------------------------------------------

// function checkInclusion(s1, s2) {
//   const s1hash = new Array(26).fill(0);
//   const s2hash = new Array(26).fill(0);
//   const s1len = s1.length;
//   const s2len = s2.length;

//   if (s1len > s2len) return false;

//   let left = 0,
//     right = 0;

//   while (right < s1len) {
//     s1hash[s1.charCodeAt(right) - "a".charCodeAt(0)]++;
//     s2hash[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
//     right++;
//   }

//   console.log("s1hash", s1hash);
//   console.log("s2hash", s2hash);

//   right--;
//   console.log("right", right);
//   while (right < s2len) {
//     if (s1hash.join("") === s2hash.join("")) return true;
//     right++;
//     if (right !== s2len) {
//       s2hash[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
//     }
//     s2hash[s2.charCodeAt(left) - "a".charCodeAt(0)]--;
//     left++;
//   }

//   return false;
// }

// // Example usage:
// console.log(checkInclusion("ab", "eidbaooo")); // Output: true
// console.log(checkInclusion("ab", "eidboaoo")); // Output: false
