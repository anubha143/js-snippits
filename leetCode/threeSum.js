// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  const result = [];
  let threeSum;
  nums = nums.sort((a, b) => a - b);
  for (let [index, value] of nums.entries()) {
    if (index > 0 && value === nums[index - 1]) {
      continue;
    }
    let l = index + 1,
      r = nums.length - 1;
    while (l < r) {
      threeSum = value + nums[l] + nums[r];
      if (threeSum > 0) {
        r -= 1;
      } else if (threeSum < 0) {
        l += 1;
      } else {
        result.push([value, nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
