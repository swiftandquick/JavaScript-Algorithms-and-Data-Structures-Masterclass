function maxSubarraySum(arr, num) {
  // If arr's length is less than num, return null.
  if (arr.length < num) {
    return null;
  }
  let max;
  let sum = 0;
  // Find sum of the first set of numbers.
  for (let i = 0; i < num; i++) {
    sum = sum + arr[i];
  }
  // Set max equals the sum of first set of numbers.
  max = sum;
  // Iterate through from the num index to the last index.
  for (let i = num; i < arr.length; i++) {
    // Add the current index value to sum, subtract the [i - num] index from sum, effectively push the sliding window to one index to the right.
    sum = sum + arr[i] - arr[i - num];
    // Set max to sum if sum is greater than max.
    if (sum > max) {
      max = sum;
    }
  }
  // Return max value.
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
