// Time complexity:  O(n^2).
function maxSubarraySum(arr, num) {
  // If the num is greater than arr's length, return null.
  if (num > arr.length) {
    return null;
  }
  // Set max equals negative infinity.
  let max = -Infinity;
  // Iterate from index 0 to index arr.length - num.
  for (let i = 0; i < arr.length - num + 1; i++) {
    // Set a temp value, starts off as 0.
    temp = 0;
    // Add the next num amount of numbers together, the sum is stored in temp.
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    // If the current temp is greater than the current max, set max equals to the current temp.
    if (temp > max) {
      max = temp;
    }
  }
  // Return max.
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
