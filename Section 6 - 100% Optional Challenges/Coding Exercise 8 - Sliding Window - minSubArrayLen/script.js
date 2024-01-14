function minSubArrayLen(arr, num) {
  // Current minimum number of indexes, which is Infinity..
  let minIndexes = Infinity;
  // Number of indexes that are moved.
  let indexes;
  // Starting index.
  let startingIndex;
  // Set the initial sum to 0.
  let sum = 0;
  // Iterate the for loop until sum is greater than or equal to num.
  for (let i = 0; i < arr.length; i++) {
    // Add current indexed element to sum.
    sum = sum + arr[i];
    // Set startingIndex and indexes greater than or equals to i and minIndexes equal to i + 1.
    if (sum >= num) {
      startingIndex = i;
      indexes = i;
      minIndexes = i + 1;
      break;
    }
  }
  while (startingIndex < arr.length) {
    // If sum is greater than or equal to num and (indexes + 1) is less than minIndexes, set minIndexes equals indexes + 1.
    if (sum >= num && indexes + 1 < minIndexes) {
      minIndexes = indexes + 1;
    }
    // If sum is greater or equal to num, remove the first element in the sliding window.  Decrease indexes by 1.
    if (sum >= num) {
      sum = sum - arr[startingIndex - indexes];
      indexes--;
    }
    // If sum is less than num, add the next element in the sliding window.  Increases both indexes and startIndex by 1.
    else {
      sum = sum + arr[startingIndex + 1];
      indexes++;
      startingIndex++;
    }
  }
  // Return minIndexes, if it's still Infinity, return 0.
  if (minIndexes === Infinity) {
    return 0;
  } else {
    return minIndexes;
  }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
