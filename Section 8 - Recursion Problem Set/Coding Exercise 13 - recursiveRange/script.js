// recursiveRange(2)
// 2 + recursiveRange(1)
// 2 + (1 + recursiveRange(0))
// 2 + (1 + 0)
// 2 + 1
// 3
function recursiveRange(num) {
  // Base case, return 0 if num equals 0.
  if (num === 0) {
    return 0;
  }
  // Different case, when num is not 0, keep invoke recursiveRange with a new num value, new num value is 1 less than the original.
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(2)); // 3
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
