// Return false if str1's length is greater than str2's length.
// Use objects to store str1 and str2's letter frequency in numeric value.
// If letter is in str1 but not in str2, return false.
// If the frequency of the ltter is greater in str1 than in str2, return false.
function constructNote(str1, str2) {
  str1 = str1.replace(/[^0-9a-z]/gi, "").toLowerCase();
  str2 = str2.replace(/[^0-9a-z]/gi, "").toLowerCase();
  if (str1.length > str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = frequencyCounter1[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = frequencyCounter2[str2[i]] + 1 || 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] > frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
console.log(constructNote("abcc", "aabbcc")); // true
