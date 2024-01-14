// Use one liner.
function areThereDuplicates() {
  // Transform the arguments into a set, if the set's size is equal to array's length, return true, otherwise return false.
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
