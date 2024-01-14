// sumRange(4)
// 4 + sumRange(3)
// 4 + (3 + sumRange(2))
// 4 + (3 + (2 + sumRange(1)))
// 4 + (3 + (2 + 1))
// 4 + (3 + 3)
// 4 + 6
// 10

function sumRange(num) {
  // Base case, if num equals 1, return 1.
  if (num === 1) {
    return 1;
  }
  // Different input, keep invoking sumRange with a different new num value (decrease by 1) until num equals 1.
  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 10, 4 + 3 + 2 + 1 = 10.
