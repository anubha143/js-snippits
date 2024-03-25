// find all the duplicates in the array

// Input: nums=[4,3,2,7,8,2,3,1]
// Output: [2,3]

const duplicate = (arr) => {
  const hashmap = {};
  const result = [];
  for (let num of arr) {
    hashmap[num] = (hashmap[num] || 0) + 1;
  }
  for (let key in hashmap) {
    if (hashmap[key] > 1) {
      result.push(parseInt(key));
    }
  }
  return result;
};

console.log(duplicate([4, 3, 2, 7, 8, 2, 3, 1]));
