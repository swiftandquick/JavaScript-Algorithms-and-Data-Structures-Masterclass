function insertionSort(arr) {
  let i, j;
  // Iterate from second index to last index.
  for (i = 1; i < arr.length; i++) {
    // Set currentVal equals current i's value.
    let currentVal = arr[i];
    // Iterate from index i - 1 to index 0.  If arr[j] > currentVal, the inner for loop also stops iterating.
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Push the arr[j] into the next index.
      arr[j + 1] = arr[j];
    }
    // Set j + 1 to currentVal.
    arr[j + 1] = currentVal;
  }
  return arr;
}

// i = 1, j = 0, currentVal = 1, 2 > 1 is true, [2, 2, 1, 76, 4]
// j = -1, break out of inner for loop, arr[-1 + 1] or arr[0] = currentVal, arr[0] = 1, [1, 2, 9, 76, 4]
// i = 2, j = 1, currentVal = 9, 2 > 9 is false, [1, 2, 9, 76, 4]
// j = 1, break out of inner for loop, arr[1 + 1] or arr[2] = currentVal, arr[2] = 9, [1, 2, 9, 76, 4]
// i = 3, j = 2, currentVal = 76, 9 > 76 is false, [1, 2, 9, 76, 4]
// j = 2, break out of inner for loop, arr[2 + 1] or arr[3] = currrentVal, arr[3] = 74, [1, 2, 9, 76, 4]
// i = 4, j = 3, currentVal = 4, 76 > 4 is true, [1, 2, 9, 76, 76]
// i = 4, j = 2, currentVal = 4, 9 > 4 is true, [1, 2, 9, 9, 76]
// i = 4, j = 1, currentVal = 2, 2 > 4 is false, [1, 2, 9, 9, 76]
// j = 1, break out of inner for loop, arr[1 + 1] or arr[2] = currentVal, arr[2] = 4, [1, 2, 4, 9, 76]
console.log(insertionSort([2, 1, 9, 76, 4]));
