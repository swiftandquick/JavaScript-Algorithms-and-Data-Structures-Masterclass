function sameFrequency(num1, num2) {
  // Transform numbers to strings.
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  // If length are different, return false.
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  // Create empty objects.
  let countNum1 = {};
  let countNum2 = {};
  // The objects will contain the frequency of the digits that appear in the number.
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  // If the frequencies are different, return false.
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false;
    }
  }
  // Otherwise, return true.
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
