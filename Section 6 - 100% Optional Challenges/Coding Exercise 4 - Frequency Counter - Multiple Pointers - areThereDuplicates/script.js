// Use spread operator.
function areThereDuplicates(...args) {
  // Create an empty array frequencyCounter.
  const frequencyCounter = {};
  // If the arg[i] exists in frequencyCounter as a key, increment that key's value by 1, otherwise, set the key's value to 1.
  for (let i = 0; i < args.length; i++) {
    frequencyCounter[args[i]] = frequencyCounter[args[i]] + 1 || 1;
  }
  // Iterate through all keys.  If the a key's value is greater 1, that means there's a repeat, return true.
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  // Otherwise, return false.
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
