// Given an array and chunk size, divide the array into many subarray
// Example
// chunk([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5],4) -> [[1,2,3,4],[5]]

const chunk = (arr, size) => {
  let result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
};
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 4));
