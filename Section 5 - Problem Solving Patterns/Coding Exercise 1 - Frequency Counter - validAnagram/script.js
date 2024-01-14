// Time complexity:  O(n).
function validAnagram(str1, str2) {
  // Replace non letter and number from both strings and turn both strings to lower case.
  str1 = str1.replace(/[^0-9a-z]/gi, "").toLowerCase();
  str2 = str2.replace(/[^0-9a-z]/gi, "").toLowerCase();
  // If array length is different, then it's automatically false.
  if (str1.length !== str2.length) {
    return false;
  }
  // Create empty objects.
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // Iterate over each char (character) in str1.
  // If char doesn't exist in frequencyCounter1, set it to 1, otherwise, increment the value by 1.
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = frequencyCounter1[str1[i]] + 1 || 1;
  }
  // Iterate over each char (character) in str2.
  // If char doesn't exist in frequencyCounter2, set it to 1, otherwise, increment the value by 1.
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = frequencyCounter2[str2[i]] + 1 || 1;
  }
  // Iterate over every key in frequencyCounter1.
  for (let key in frequencyCounter1) {
    // If the key in frequencyCounter1 doesn't exist in frequencyCounter2, return false.
    if (!(key in frequencyCounter2)) {
      return false;
    }
    // If the value of frequencyCounter1[key] doesn't equal to the value of frequencyCounter2[key], return false.
    // If frequencyCounter1['a'] is 2 and frequencyCounter2['a'] is 1, which means 'a' appears once in str2 and twice in str1.
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  // Return true if the for loop doesn't return false.
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
console.log(validAnagram("A1!", "1a@#")); // true
