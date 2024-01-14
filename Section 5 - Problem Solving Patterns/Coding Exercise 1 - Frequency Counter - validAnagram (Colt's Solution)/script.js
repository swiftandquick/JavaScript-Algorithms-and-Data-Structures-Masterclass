function validAnagram(first, second) {
  // If the length of two strings aren't the same, return false.
  if (first.length !== second.length) {
    return false;
  }
  // Create an empty object.
  const lookup = {};
  // Iterate through each character in the first string.
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If letter exists, increment, otherwise set to 1.
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // Iterate through the second string.
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // Can't find letter or letter is zero then it's not an anagram, return false.
    if (!lookup[letter]) {
      return false;
    }
    // If the letter from second exists in first, subtract lookup[letter] by 1.
    else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
