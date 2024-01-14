function maxSubarraySum(arr, num) {
  // If arr.length is less than sum, return null.
  if (arr.length < num) {
    return null;
  }
  let total = 0;
  // Find the total of the first set of numbers.
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  // Keep shifting the sliding window one index to the right, then find the compare the current total to the highest total.
  // If the current total is higher than the previous highest total, set it to the current highest total.
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  // Return the highest total.
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
