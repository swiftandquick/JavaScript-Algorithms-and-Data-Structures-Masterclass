// long = "abcab", short = "ab"
// i = 0, j = 0, short[0] = "a", long[0 + 0] = "a"
// i = 0, j = 1, short[1] = "b", long[0 + 1] = "b", count = 1
// i = 1, j = 0, short[0] = "a", long[1 + 0] = "b", break inner loop.
// i = 2, j = 0, short[0] = "a", long[2 + 0] = "c", break inner loop.
// i = 3, j = 0, short[0] = "a", long[3 + 0] = "a"
// i = 3, j = 1, short[1] = "a", long[3 + 1] = "b", count = 2
// i = 4, j = 0, short[0] = "a", long[4 + 0] = "b", break inner loop, outer loop ends.
// Return count as 2.
function naiveSearch(long, short) {
  // Counter starts as 0.
  let count = 0;
  // Iterate through the long string.
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("abcab", "ab")); // 2
console.log(naiveSearch("lorie loled", "lol")); // 1
