// someRecursive([4, 6, 8, 9])
// someRecursive([6, 8, 9])
// someRecursive([8, 9])
// someRecursive([9])
// true

// The function tests whether if the number is odd, return true if it is.
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  // Base case 1, if array's length is 0, return false.
  if (array.length === 0) {
    return false;
  }
  // Base case 2, if callback with array[0] as argument returns true, return true.
  if (callback(array[0])) {
    return true;
  }
  // Different case, invoke someRecursive until base case is reached, new array value is the old array without the first element.
  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false, tests if there is a number greater than 10.
