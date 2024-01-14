// O(1) space complexity.
function sum(arr) {
  // O(1), a number.
  let total = 0;
  // O(1), another number.
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3]));

// O(n) space complexity.
function double(arr) {
  // O(n), an array.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  // n numbers.
  return newArr;
}

console.log(double([1, 2, 3]));
