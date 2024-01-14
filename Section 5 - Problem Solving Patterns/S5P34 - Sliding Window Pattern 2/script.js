// Time complexity:  O(n).
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // If the num is greater than arr's length, return null.
  if (arr.length < num) {
    return null;
  }
  // Find the first sum from index 0 to index (num - 1), store the result in maxSum.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // Set tempSum equals maxSum.
  tempSum = maxSum;
  // Iterate through arr from index num to the last index.
  // Set tempSum to tempSum - arr[i - num] + arr[i].
  // Set maxSum equals to tempSum is tempSum is greater than maxSum.
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

/*
([1, 2, 5, 2, 8, 1, 5], 4)
tempSum = 1 + 2 + 5 + 2 = 10 at the start.  
In the second for loop.  
First iteration:  i = 4, tempSum = 10 - arr[0] + arr[4] = 10 - 1 + 8 = 17, maxSum = max(10, 17) = 17.  
Second iteration:  i = 5, tempSum = 18 - arr[1] + arr[5] = 17 - 2 + 1 = 16, maxSum = max(17, 16) = 17. 
Third  iteration:  i = 6, tempSum = 18 - arr[2] + arr[6] = 16 - 5 + 5 = 16, maxSum = max(17, 16) = 17. 
Return 17. 
*/
