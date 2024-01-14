function averagePair(arr, num) {
  // start and end are indexes.
  let start = 0;
  let end = arr.length - 1;
  // Iterate teh while loop while start is less than end.
  while (start < end) {
    // Calculate the average.
    let avg = (arr[start] + arr[end]) / 2;
    // If the average equals num, return true, if average < num, increment start, otherwise, decrement end.
    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  // Return false if while loop doesn't return true.
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
