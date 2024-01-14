// someRecursive([4, 6, 8, 9])
// someRecursive([6, 8, 9])
// someRecursive([8, 9])
// someRecursive([9])
// true

// The function tests whether if the number is odd, return true if it is.
const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, func) {
  // Base case 1, if arr's length is 0, return false.
  if (arr.length === 0) {
    return false;
  }
  // Base case 2, if func with argument of arr[0] returns true, return true.
  if (func(arr[0])) {
    return true;
  }
  // Different case, invoke someRecursive, new arr is the original arr value without the first element.
  return someRecursive(arr.slice(1), func);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false, tests if there is a number greater than 10.
