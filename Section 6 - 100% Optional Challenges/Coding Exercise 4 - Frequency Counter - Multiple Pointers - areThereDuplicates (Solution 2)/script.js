// Use frequency counter.
function areThereDuplicates() {
  // Create an empty array.
  let collection = {};
  // Get the frequency of each element.
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  // Return true if one element's frequency is greater than 1.
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  // Otherwise, return false.
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
