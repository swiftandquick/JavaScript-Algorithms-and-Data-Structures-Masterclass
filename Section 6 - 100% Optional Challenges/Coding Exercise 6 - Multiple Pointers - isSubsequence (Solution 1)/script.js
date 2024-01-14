// Iterative.
function isSubsequence(str1, str2) {
  // Both i and j starts at index 0.
  let i = 0;
  let j = 0;
  // If str1 is an empty array, return true.
  if (!str1) {
    return true;
  }
  // Iterate through str2.
  while (j < str2.length) {
    // If current index of str2 is equal to current index of str1, increment i by 1.
    if (str2[j] === str1[i]) {
      i++;
    }
    // If i equals str1's length, return true.
    if (i === str1.length) {
      return true;
    }
    // Increment j by 1 each time the while loop ends.
    j++;
  }
  // Return false if while loop doesn't return true.
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
