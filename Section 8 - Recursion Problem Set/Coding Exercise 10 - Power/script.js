// power(2, 2)
// 2 * power(2, 1)
// 2 * (2 * power(2, 0))
// 2 * (2 * 1)
// 2 * 2
// 4
function power(base, exp) {
  // Base case, return 1 if exp is 0.
  if (exp === 0) {
    return 1;
  }
  // Subtract exp by 1 every time power() is invoked.
  exp--;
  // Different case, invoke power() with a new exp value every iteration.
  return base * power(base, exp);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
