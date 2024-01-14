// recursiveRange(2)
// 2 + recursiveRange(1)
// 2 + (1 + recursiveRange(0))
// 2 + (1 + 0)
// 2 + 1
// 3
function recursiveRange(x) {
  // Base case, return 0 if x equals 0.
  if (x === 0) {
    return 0;
  }
  // Different case, when x is not 0, keep invoke recursiveRange with a new x value, new x value is 1 less than the original.
  return x + recursiveRange(x - 1);
}

console.log(recursiveRange(2)); // 3
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
