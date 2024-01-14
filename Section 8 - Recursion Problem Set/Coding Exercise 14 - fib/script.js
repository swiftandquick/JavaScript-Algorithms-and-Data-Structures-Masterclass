// fib(4)
// fib(3) + fib(2)
// (fib(2) + fib(1)) + (fib(1) + fib(0))
// ((fib(1) + fib(0)) + 1) + (1 + 0)
// ((1 + 0) + 1) + 1
// (1 + 1) + 1
// 2 + 1
// 3
function fib(num) {
  // Base case, if num <= 1, return num.
  if (num <= 1) {
    return num;
  }
  // Different case, otherwise, invoke fib until num reaches 1 or less, new num values will be num - 1 and num - 2.
  return fib(num - 1) + fib(num - 2);
}

// 1, 1, 2, 3, 5, 8, ...
console.log(fib(4)); // 3
console.log(fib(6)); // 8
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
