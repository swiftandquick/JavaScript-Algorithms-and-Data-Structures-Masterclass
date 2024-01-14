function charCount(str) {
  // Make object to return at the end.
  const result = {};
  // Loop over the string, for each character...
  for (let char of str) {
    // Change the string to lowercase.
    char = char.toLowerCase();
    // Only proceed if the char passes the regex test, which means only proceed if char is a lower case letter or number.
    if (/[a-z0-9]/.test(char)) {
      // If the char is a number / letter AND is a key in the object, add one to the count.
      // If the char is a number / letter AND is not in the object, add it to the object and set value to 1.
      result[char] = ++result[char] || 1;
    }
  }
  // Return object at the end.
  return result;
}

console.log(charCount("aaaa"));
console.log(charCount("hello"));
console.log(charCount("Your PIN number is 1234!"));
