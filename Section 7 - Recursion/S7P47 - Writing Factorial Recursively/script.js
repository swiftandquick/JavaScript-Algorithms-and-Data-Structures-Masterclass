// factorial(5)
// 5 * factorial(4)
// 5 * (4 * factorial(3))
// 5 * (4 * (3 * factorial(2)))
// 5 * (4 * (3 * (2 * factorial(1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * (3 * 2))
// 5 * (4 * 6)
// 5 * 24
// 120

function factorial(num) {
  // Base case, if num is 1 or less, return 1.
  if (num <= 1) {
    return 1;
  }
  // Different case, keep invoke factorial with a different num value, each time the function is called, new num is decrease by 1.
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120, 1 * 2 * 3 * 4 * 5 = 120.
