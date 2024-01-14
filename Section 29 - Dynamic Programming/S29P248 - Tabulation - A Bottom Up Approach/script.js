// Time complexity:  O(n).
// Use tabulation, start from bottom and work to the top, better space complexity.
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

// fibNums = [0, 1, 1]
// fibNums[3] = 1 + 1 = 2, fibNums = [0, 1, 1, 2].
// fibNums[4] = 2 + 1 = 3, fibNums = [0, 1, 1, 2, 3].
// fibNums[5] = 3 + 2 = 5, fibNums = [0, 1, 1, 2, 3, 5].
// Return fibNums[5], which is 5.
console.log(fib(5));
