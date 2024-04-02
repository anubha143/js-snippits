// PROBLEM No. 11

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// BRUTE FORCE WAY
var maxArea = function (height) {
  let result = 0,
    area;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      area = Math.min(height[i], height[j]) * (j - i);
      result = Math.max(result, area);
    }
  }
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 0(n)

var maxArea2 = function (height) {
  let result = 0,
    area;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);

    if (height[left] <= height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return result;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
