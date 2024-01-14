// factorial(4)
// 4 * factorial(3)
// 4 * (3 * factorial(2))
// 4 * (3 * (2 * factorial(1)))
// 4 * (3 * (2 * 1))
// 4 * (3 * 2)
// 4 * 6
// 24
function factorial(x) {
  // Base case 1, return 0 if x is less than 0.
  if (x < 0) {
    return 0;
  }
  // Base case 2, return 1 if x is less than or equal to 1.
  if (x <= 1) {
    return 1;
  }
  // Different case, invoke factorial with a new x value every invocation.
  // Subtract x by 1 every time factorial is invoked.
  return x * factorial(x - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
