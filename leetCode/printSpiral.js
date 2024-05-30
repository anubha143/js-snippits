function printSpiral(matrix) {
  let result = [];

  // Define boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Print top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Print right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Print bottom row (if applicable)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log("Anubha");
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Print left column (if applicable)
    if (left <= right) {
      console.log("weird");
      for (let i = bottom; i >= top; i--) {
        console.log("pant");
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// Example 2D array
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(printSpiral(matrix)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
