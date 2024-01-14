function minSubArrayLen(nums, sum) {
  let total = 0; // The sum of all elements in the sliding window.
  let start = 0; // Starting index.
  let end = 0; // Ending index.
  let minLen = Infinity; // Minimum length is initially Infinity.
  // Iterate the nums array using the while loop.
  while (start < nums.length) {
    // If current window doesn't add up to the given sum then move the window to right.
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // If current window adds up to at least the sum given, then we can shrink the window.
    // If end - start is smaller than minLen, set that to minLen.
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // Current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  // If minLen is Infinity, return 0, otherwise, return minLen.
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
