// Second argument's default value is 0.
// Third argument's default value is arr.
function pivot(arr, start = 0, end = arr.length - 1) {
  // Swap index i and index j.
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // Set pivot equals to the starting element.
  let pivot = arr[start];
  // Set swapIdex initially equals to start index.
  let swapIdx = start;
  // Iterate from the element after the start element to the end of the array.
  for (let i = start + 1; i < arr.length; i++) {
    // If pivot is greater than current element, push the element to the left side.
    // By increment swapIdx by 1 then swapping index i with the new swapIdx value.
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // After the entire array is iterated, swarp the start index with swapIdx.
  swap(arr, start, swapIdx);
  return swapIdx;
}

// pivot = 4
// swapIdx = 0, i = 1, 4 > 8 is false, [4, 8, 2, 1, 5, 7, 6, 3]
// swapIdx = 0, i = 2, 4 > 2 is true, swapIdx = 1, swap index 1 and 2, [4, 2, 8, 1, 5, 7, 6, 3]
// swapIdx = 1, i = 3, 4 > 1 is true, swapIdx = 2, swap index 2 and 3, [4, 2, 1, 8, 5, 7, 6, 3]
// swapIdx = 2, i = 4, 4 > 5 is false, [4, 2, 1, 8, 5, 7, 6, 3]
// swapIdx = 2, i = 5, 4 > 7 is false, [4, 2, 1, 8, 5, 7, 6, 3]
// swapIdx = 2, i = 6, 4 > 6 is false, [4, 2, 1, 8, 5, 7, 6, 3]
// swapIdx = 2, i = 7, 4 > 3 is true, swapIdx = 3, swap index 3 and 7, [4, 2, 1, 3, 5, 7, 6, 8]
// swap index 0 and swapIdx (3), [3, 2, 1, 4, 5, 7, 6, 8]
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
