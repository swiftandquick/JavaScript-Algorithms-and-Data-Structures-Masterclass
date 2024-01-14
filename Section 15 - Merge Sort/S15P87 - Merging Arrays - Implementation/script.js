function merge(arr1, arr2) {
  let results = [];
  // i is current index for arr1, starts at 0.
  let i = 0;
  // j is current index for arr2, starts at 0.
  let j = 0;
  // While there are still elements to iterate for arr1 and arr2, iterate the while loop.
  while (i < arr1.length && j < arr2.length) {
    // If arr1's current index value is less than arr2's current index value, push arr1's current index value into results array.
    // Move the index for arr1 one index forward.
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    }
    // If arr1's current index value is greater than or equal to arr2's current index value, push arr1's current index value into results array.
    // Move the index for arr2 one index forward.
    else {
      results.push(arr2[j]);
      j++;
    }
  }
  // If arr2 elements are all added into results, add all the remaining arr1 elements into results.
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // If arr1 elements are all added into results, add all the remaining arr2 elements into results.
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// i = 0, j = 0, 1 < 2, [1]
// i = 1, j = 0, 10 > 2, [1, 2]
// i = 1, j = 1, 10 < 14, [1, 2, 10]
// i = 2, j = 1, 50 > 14, [1, 2, 10, 14]
// i = 2, j = 2, 50 < 99, [1, 2, 10, 14, 50]
// First while loop ends.  Skips second while loop.  Begins third while loop.
// j = 2, [1, 2, 10, 14, 50, 99]
// j = 3, [1, 2, 10, 14, 50, 99, 100]
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
