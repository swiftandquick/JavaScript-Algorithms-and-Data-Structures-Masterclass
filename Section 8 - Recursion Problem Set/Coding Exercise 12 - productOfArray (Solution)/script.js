// productOfArray([1, 2, 3])
// 1 * productOfArray[(2, 3)]
// 1 * (2 * productOfArray([3]))
// 1 * (2 * (3 * productOfArray([])))
// 1 * (2 * (3 * 1))
// 1 * (2 * 3)
// 1 * 6
// 6
function productOfArray(arr) {
  // Base case, if arr is down to the length 0, return 1.
  if (arr.length === 0) {
    return 1;
  }
  // Different case, invoke productOfArray as long as arr.length isn't 0, then the new argument is the original arr without the first element.
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
