function factorial(num) {
  let total = 1;
  // Iterate through 5 to 2, then multiply each number on top of each other.
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(5)); // 120, 1 * 2 * 3 * 4 * 5 = 120.
