function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Second argument's default value is 0.
// Third argument's default value is arr.
function quickSort(arr, left = 0, right = arr.length - 1) {
  // Once left < right become false, recursion stops.
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Recursively call quickSort for the left half of the pivot.
    quickSort(arr, left, pivotIndex - 1);
    // Recursively call quickSort for the right half of the pivot.
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Pivot for 4 in [4, 6, 9, 1, 2, 5, 3], left = 0, right = 6, pivotIndex = 3, [3, 1, 2, 4, 9, 5, 6]
// Pivot for 3 in [3, 1, 2], left = 0, right = 2, pivotIndex = 2, [2, 1, 3, 4, 9, 5, 6]
// Pivot for 2 in [2, 1], left = 0, right = 1, pivotIndex = 1, [1, 2, 3, 4, 9, 5, 6]
// Pivot for 9 in [9, 5, 6], left = 4, right = 6, pivotIndex = 6, [1, 2, 3, 4, 6, 5, 9]
// Pivot for 6 in [6, 5], left = 4, right = 5, pivotIndex = 5, [1, 2, 3, 4, 5, 6, 9]
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
