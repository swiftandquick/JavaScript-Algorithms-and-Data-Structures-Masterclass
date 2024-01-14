function countUniqueValues(arr) {
  // Create an empty array.
  const newArr = [];
  // Iterate through every element in arr.
  for (let i = 0; i < arr.length; i++) {
    // If arr[i] doesn't exist in newArr, add it.
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  // Return the size of newArr, the number should equal to the number of unique elements in arr.
  return newArr.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
