// Product of Array Except Self

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function (arr) {
  const left = new Array(arr.length),
    right = new Array(arr.length);
  (left[0] = 1), (right[arr.length - 1] = 1);

  for (let i = 1; i < arr.length - 1; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }
  for (j = arr.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * arr[j + 1];
  }
  for (k = 0; k < arr.length - 1; k++) {
    arr[k] = left[k] * right[k];
  }
  return arr;
};

console.log(productExceptSelf([1, 2, 3, 4, 5]));
