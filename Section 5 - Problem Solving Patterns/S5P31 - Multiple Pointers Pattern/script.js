// Time complexity:  O(n^2), space complexity O(1).
function sumZero(arr) {
  // Iterate through every element.
  for (let i = 0; i < arr.length; i++) {
    // Iterate through every element that comes after arr[i].
    for (let j = i + 1; j < arr.length; j++) {
      // If arr[i] and arr[j] sums up to 0, return them as an array.
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
