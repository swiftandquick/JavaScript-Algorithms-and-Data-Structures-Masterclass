function sameFrequency(num1, num2) {
  // Transform num1 and num2 into strings.
  const str1 = num1 + "";
  const str2 = num2 + "";
  // If length are not equal, return false.
  if (str1.length !== str2.length) {
    return false;
  }
  // Create empty objects that contain the frequencies.
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // If the current character exists in the object, increment its value by 1, otherwise, set it to 1.
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = frequencyCounter1[str1[i]]++ || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = frequencyCounter2[str2[i]]++ || 1;
  }
  // Iterate over frequencyCounter1.
  for (let key in frequencyCounter2) {
    // If the key is found in frequencyCounter1 but not in frequencyCounter2, return false.
    if (!(key in frequencyCounter2)) {
      return false;
    }
    // If key's value in frequencyCounter1 is not the same as the frequencyCounter2's counterpart, return false.
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  // If the for loop returns false, return true.
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
