// Recursive but not O(1) space.  Keep removing first characters until str1 or str2 become an empty string.
function isSubsequence(str1, str2) {
  // If str1's length hits 0 first, this means all str1 characters appear in order in str2, return true.
  if (str1.length === 0) {
    return true;
  }
  // If str2's length hits 0 first, this means there are still str1 characters that doesn't appear in order in str2, return false.
  if (str2.length === 0) {
    return false;
  }
  // Compare the first character of both strings, if they are equal, remove first characters from both strings.
  if (str2[0] === str1[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  }
  // If the first two characters are not equal, remove the first character from the second string.
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
