function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount([nums[i]]));
  }
  return maxDigits;
}

function radixSort(nums) {
  // Find the number with the most digits, and return the number of digits.
  let maxDigitCount = mostDigits(nums);
  // Iterate "maxDigitCount" times, starting from one, then ten, then hundred.
  for (let k = 0; k < maxDigitCount; k++) {
    // Create an array of 10 empty subarrays, essentially 10 buckets, representing numbers from 0 to 9.
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // Starting from the smallest digit, get the value of that digit, and the numbers in a bucket base on the current digit.
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // Merge the arrays (buckets) together into one array.
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// maxDigitCount = 4, loop from 0 to 4.
// Sort by one, [12, 9852, 23, 345, 2345, 5467]
// Sort by ten, [12, 23, 345, 2345, 9852, 5467]
// Sort by hundred, [12, 23, 345, 2345, 5467, 9852]
// Sort by thousand, [12, 23, 345, 2345, 5467, 9852]
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
