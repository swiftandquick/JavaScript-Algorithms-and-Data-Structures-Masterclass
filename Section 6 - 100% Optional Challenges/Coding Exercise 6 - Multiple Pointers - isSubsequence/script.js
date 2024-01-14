function isSubsequence(str1, str2) {
  let counter = 0;
  let indexStop = 0; // Gets what the index stops at.
  // Iterate through every current str1 index (cs1i).
  for (let cs1i = 0; cs1i < str1.length; cs1i++) {
    // Set cs2i (current str2 index) to indexStop reset
    let cs2i = indexStop;
    while (cs2i < str2.length) {
      // Increment counter by 1 if both strings' current characters match.  Set indexStop equals cs2i, exit out of the while loop.
      if (str1[cs1i] === str2[cs2i]) {
        counter++;
        indexStop = cs2i;
        break;
      }
      // Increment cs2i by 1 at the end of the while loop.
      cs2i++;
    }
  }
  // If counter equals str1's length, that means all characters are found in order in str2, return true.
  if (counter === str1.length) {
    return true;
  }
  // Otherwise, return false.
  else {
    return false;
  }
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
