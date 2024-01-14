// Time complexity:  O(n).
// Use memoization, if function call's argument is already invoked once, store the value in a specific index for reuse.
function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}

// fib(4) + fib(3)
// (fib(3) + fib(2)) + fib(3)
// ((fib(2) + fib(1)) + fib(2)) + fib(3)
// ((1 + 1) + 1) + fib(3)
// (2 + 1) + fib(3), 2 is stored in memo's index 3, so memo[3] = 2
// 3 + fib(3), since memo[3] !== undefined, return 2 instead.
// 3 + 2 = 5.
console.log(fib(5));
