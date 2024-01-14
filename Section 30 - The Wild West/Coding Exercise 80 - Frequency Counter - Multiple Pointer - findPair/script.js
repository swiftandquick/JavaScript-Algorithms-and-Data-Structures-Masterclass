// Return false is arr has less than 2 elements.
// Compare two numbers using a nested for loop, if addition or subtraction of the two equals val, return true.
// If the for loop is done iterating and no pair is found, return false.
function findPair(arr, val) {
  if (arr.length < 2) {
    return false;
  } else {
    let bool = false;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length - 1; j++) {
        let a = arr[i];
        let b = arr[j + 1];
        if (a + b === val || a - b === val || b - a === val) {
          bool = true;
        }
      }
    }
    return bool;
  }
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
