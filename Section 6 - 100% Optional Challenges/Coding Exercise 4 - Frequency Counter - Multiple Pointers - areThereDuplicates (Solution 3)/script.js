// Use multiple pointers.  Use spread operator.
function areThereDuplicates(...args) {
  // Sort the array from smallest to largest.  Now, if the repeated elements are next to each other if they exist.
  args.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log(args);
  // Compare the current and the next element, if they are equal, return true.
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  // If there aren't repeated elements next to each other, there aren't repeated element at all, return false.
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
