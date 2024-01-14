function sortedFrequency(arr, num) {
  let count = 0;
  for (let el of arr) {
    if (el === num) {
      count++;
    }
  }
  if (count === 0) {
    count = -1;
  }
  return count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
