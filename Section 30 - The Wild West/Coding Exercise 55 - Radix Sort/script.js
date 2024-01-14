function getDigit(num, i) {
  let newStr = num.toString();
  if (i >= newStr.length) return 0;
  return parseInt(newStr[newStr.length - i - 1]);
}

function digitCount(num) {
  let newStr = num.toString();
  return newStr.length;
}

function mostDigits(nums) {
  let maxNum = 0;
  let temp = 0;
  nums.forEach((item, index) => {
    temp = digitCount(item);
    maxNum = temp > maxNum ? temp : maxNum;
  });
  return maxNum;
}

function radixSort(nums) {
  let numberOfRounds = mostDigits(nums);
  for (let j = 0; j <= numberOfRounds; j++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], j)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
