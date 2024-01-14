// Time complexity:  O(n), space complexity O(1).
function sumZero(arr) {
  // left is index 0.
  let left = 0;
  // right is last index.
  let right = arr.length - 1;
  // Iterate the while loop while left is less than right.
  while (left < right) {
    // Sum up value of index left and value of index right.
    let sum = arr[left] + arr[right];
    // If sum is 0, return the current values of index left and index right.
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // Since the array is a sorted array, if sum is greater than 0, that means the absolute value of arr[right] is greater than arr[left],
    // subtract right by 1, so the new right is the left index of the old right index.  For example, right would go from 5 to 4.
    else if (sum > 0) {
      right--;
    }
    // If sum is less than 0, that means the absolute value of arr[left] is greater than arr[right],
    // add left by 1, so the new left is the right index of the old left index.  For example, left would go from 0 to 1.
    else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
