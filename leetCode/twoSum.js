// Question-1: given an array find the combination of values that gives the target number
// Input: [1,2,3,4,5] target-9, there will be only one pair

const combination = (arr, target) => {
  const hashmap = {};
  for (let [index, value] of arr.entries()) {
    let diff = target - value;
    if (diff in hashmap) return [hashmap[diff], index];
    hashmap[value] = index;
  }
};

// console.log(combination([1, 2, 3, 4, 5], 9));

// Question-2: given an array find the combination of values that gives the target number
// Input: [6,2,3,5,1,7] target-8, there will be more than one pair(print index here)

const combination2 = (arr, target) => {
  const hashmap = {};
  const result = [];
  for (let [index, value] of arr.entries()) {
    let diff = target - value;
    if (diff in hashmap) {
      result.push(index, hashmap[diff]);
      delete hashmap[diff];
    } else hashmap[value] = index;
  }
  return result;
};
console.log(combination2([6, 2, 3, 5, 1, 7, 7, 3, 2, 0], 8));

// ------------------------------------------------------------------------------

// Question-3: given an array find the combination of values that gives the target number
// Input: [6,2,3,5,1,7] target-8, there will be more than one pair(print value here)

const combination4 = (arr, target) => {
  const hashmap = {};
  const result = [];
  for (let [index, value] of arr.entries()) {
    let diff = target - value;
    if (diff in hashmap) {
      result.push(value, diff);
      delete hashmap[diff];
    } else hashmap[value] = index;
  }
  return result;
};
console.log(combination4([6, 2, 3, 5, 1, 7, 7, 3, 2, 0], 8));
console.log(combination4([6, 2, 2], 8));
console.log(combination4([6, 2, 3, 5, 6], 8));
