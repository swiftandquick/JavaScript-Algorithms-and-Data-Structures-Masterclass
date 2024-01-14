// fib(4)
// fib(3) + fib(2)
// (fib(2) + fib(1)) + 1
// (1 + 1) + 1
// 2 + 1
// 3
function fib(n) {
  // Base case, if n <= 2, return n, because the first two fibonacci numbers are 1.
  if (n <= 2) {
    return 1;
  }
  // Different case, otherwise, invoke fib until num reaches 2 or less, new num values will be num - 1 and num - 2.
  return fib(n - 1) + fib(n - 2);
}

// 1, 1, 2, 3, 5, 8, ...
console.log(fib(4)); // 3
console.log(fib(6)); // 8
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
