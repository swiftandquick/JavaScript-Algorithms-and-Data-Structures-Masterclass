// Time complexity:  O(n^2).
function same(arr1, arr2) {
  // If array length is different, then it's automatically false.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Time complexity:  O(n).
  // Loop over each index in arr1.
  for (let i = 0; i < arr1.length; i++) {
    // Time complexity:  O(n).  indexOf's run time is O(n).
    // Find the index of the current element in arr1 that's squared.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // If current element squared exists in arr2, index will not be -1, if correctIndex returns -1, return false.
    if (correctIndex === -1) {
      return false;
    }
    // If the matching index exists, remove the element from arr2.
    // So if 2 exists in arr1 and 4 exists in arr2, remove 4 from arr2.
    // If there's another 2 in arr1, then there needs to a second 4 in arr2 because the first 4 in arr2 is removed.
    arr2.splice(correctIndex, 1);
  }
  // Return true if false isn't returned during the for loop iterations.
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3, 2], [9, 1, 4])); // false
console.log(same([1, 4, 3], [9, 1, 4])); // false
