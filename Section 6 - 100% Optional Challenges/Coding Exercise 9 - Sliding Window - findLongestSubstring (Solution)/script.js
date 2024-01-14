function findLongestSubstring(str) {
  let longest = 0; // Longest substring's length.
  let seen = {}; // Characters that are already in the substring, key is the character, value is what index they appear in.
  let start = 0; // Starting index.
  // Iterate through the string str.
  for (let i = 0; i < str.length; i++) {
    // Set char equal to current element.
    let char = str[i];
    // If char (current element) exists in the seen object, set start equals the maximum between seen[char]
    // (index of the character that already exists) and the current start value.
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // Get the longest substring in every iteration.  Index - beginning of substring + 1 (to include current in count).
    longest = Math.max(longest, i - start + 1);
    // Store the index of the next char so as to not double count.
    seen[char] = i + 1;
  }
  // Return the number of characters in the longest non-repeating substring.
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
