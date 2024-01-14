// Time complexity:  O(n), linear search.
function search(arr, val) {
  // Iterate through arr.
  for (let i = 0; i < arr.length; i++) {
    // If the current element is equal to val, return i (index).
    if (arr[i] === val) {
      return i;
    }
  }
  // If an index is not found, return -1.
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
