function bubbleSort(arr) {
  let noSwaps;
  // Iterate from the end of array to index 1.
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // Iterate from index 0 to index i - 2.
    for (let j = 0; j < i - 1; j++) {
      // Swap variables if arr[j] is greater than arr[j + 1].
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    // If there's no swap after iterating the inner for loop, break out of the outer for loop, because the array is alraedy sorted.
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

// i = 4, j = 0, noSwap = true, [37, 45, 29, 8], 37 > 45 = false.
// i = 4, j = 1, noSwap = false, [37, 29, 45, 8], 45 > 29, swap 45 and 29.
// i = 4, j = 2, noSwap = false, [37, 29, 8, 45], 45 > 8, swap 45 and 8.
// i = 3, j = 0, noSwap = false, [29, 37, 8, 45], 37 > 29, swap 37 and 29.
// i = 3, j = 1, noSwap = false, [29, 8, 37, 45], 37 > 8, swap 37 and 8.
// i = 2, j = 0, noSwap = false, [8, 29, 37, 45], 29 > 8, swap 29 and 8.
// i = 1, j = 0, j < 1 - 1, j < 0 is false, break out of inner for loop.
// i = 0, i > 0 is false, break out of outer for loop.
// Return [8, 29, 37, 45].
console.log(bubbleSort([37, 45, 29, 8]));

// i = 4, j = 0, noSwap = true, [1, 2, 3, 4], 1 > 2 is false.
// i = 4, j = 1, noSwap = true, [1, 2, 3, 4], 2 > 3 is false.
// i = 4, j = 2, noSwap = true, [1, 2, 3, 4], 3 > 4 is false.
// noSwap remains true after inner for loop iterations end, array is already sorted, return [1, 2, 3, 4].
console.log(bubbleSort([1, 2, 3, 4]));
