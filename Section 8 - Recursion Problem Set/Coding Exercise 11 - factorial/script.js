// factorial(4)
// 4 * factorial(3)
// 4 * (3 * factorial(2))
// 4 * (3 * (2 * factorial(1)))
// 4 * (3 * (2 * 1))
// 4 * (3 * 2)
// 4 * 6
// 24
function factorial(num) {
  // Base case, return 1 if num is 1 or less.
  if (num <= 1) {
    return 1;
  }
  // Different case, invoke factorial with a new num value every invocation.
  // Subtract num by 1 every time factorial is invoked.
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
