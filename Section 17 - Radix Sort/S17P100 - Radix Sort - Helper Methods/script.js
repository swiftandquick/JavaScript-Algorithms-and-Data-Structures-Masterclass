function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // Since I can't log10 on 0, if num is 0, return 1.
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  // Iterate through each number in nums, if digitCount returns a higher value, set it to the new maxDigits value.
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount([nums[i]]));
  }
  return maxDigits;
}

// Math.floor(7323 / 10^2) % 10 = Math.floor(7323 / 100) % 10 = 73 % 10 = 3.
console.log(getDigit(7323, 2)); // 3

// Math.floor(Math.log10(7323)) + 1 = Math.floor(3.86) + 1 = 3 + 1 = 4.
console.log(digitCount(7323)); // 4

console.log(mostDigits([1, 22, 333, 4444])); // 4
