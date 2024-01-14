// Use frequencyCounter object to store the frequency of each number.
// Iterate over the frequencyCounter object, return numbers that appear twice.
function findAllDuplicates(arr) {
  const frequencyCounter = {};
  const appearTwice = [];
  for (let i = 0; i < arr.length; i++) {
    frequencyCounter[arr[i]] = frequencyCounter[arr[i]] + 1 || 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] === 2) {
      appearTwice.push(Number(key));
    }
  }
  return appearTwice;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [1, 2, 3]
