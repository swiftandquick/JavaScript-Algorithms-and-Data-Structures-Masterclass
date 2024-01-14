function findLongestSubstring(str) {
  // Set substring equals to "".
  let substr = "";
  // Set the longest substring to "".
  let longestSubstr = "";
  // startingIndex is the current Index for the sliding window.
  let startingIndex;
  for (let i = 0; i < str.length; i++) {
    // Add the substr to str if i is 0.
    if (i === 0) {
      substr = substr + str[i];
    }
    // Otherwise:  If the current index's value is inside substr value, exit the for loop.
    // If current index's value is not equal to the previous index's value, add the current character to substr.
    else {
      startingIndex = i;
      if (substr.includes(str[i])) {
        break;
      } else {
        substr = substr + str[i];
      }
    }
  }
  // Set longestSubstr equals to substr for now.
  longestSubstr = substr;
  while (startingIndex < str.length) {
    // If the substr includes the current starting index, delete the first character.
    if (substr.includes(str[startingIndex])) {
      substr = substr.slice(1);
    }
    // If the substr doesn't include the current index, add the current index's value, increase startingIndex by 1.
    else {
      substr = substr + str[startingIndex];
      startingIndex++;
    }
    // Set longestSubstr to substr if current substr is longer.
    if (substr.length > longestSubstr.length) {
      longestSubstr = substr;
    }
  }
  // Return longestSubstr's length.
  return longestSubstr.length;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
