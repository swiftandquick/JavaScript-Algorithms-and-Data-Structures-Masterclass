// [1, 2, 3, 4, 5], left = 0, right = 4, middle = 2, arr[2] = 3, 3 > 2, set right equals 2 - 1, which is 1.
// [1, 2], left = 0, right = 1, middle = 0, arr[0] = 1, 1 < 2, set left = 0 + 1, which is 1.
// [2], left = 1, right = 1, middle = 1, arr[1] = 1, while oop ends.
// Since arr[1] = 2, return 1.
function binarySearch(arr, elem) {
  let start = 0; // First index.
  let end = arr.length - 1; // Last index.
  let middle = Math.floor((start + end) / 2); // Middle index.
  // Iterate the while loop while middle index element isn't equal to elem and start is less than or equal to end.
  while (arr[middle] !== elem && start <= end) {
    // If elem is smaller than current middle index element, set end to left index of middle.
    if (elem < arr[middle]) {
      end = middle - 1;
    }
    // If elem is larger than current middle index element, set start to right index of middle.
    else {
      start = middle + 1;
    }
    // Recalculate middle after setting start or end to a new value.
    middle = Math.floor((start + end) / 2);
  }
  // If arr[middle] equals to elem, return middle, otherwise return -1.
  if (arr[middle] === elem) {
    return middle;
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
