function averagePair(arr, num) {
  // Sort the array from smallest to largest.
  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log(arr);
  // Set low equals to first index and high equals to last index.
  let low = 0;
  let high = arr.length - 1;
  // Iterate the while loop while loop equals high.
  while (low < high) {
    // If arr[low] and arr[high]'s average equals to num, return true.
    if ((arr[low] + arr[high]) / 2 === num) {
      return true;
    }
    // If the arr[low] and arr[high] is greater than num, subtract high by 1.
    // In the next iteration, we add the current arr[low] to the element left of the current arr[high], which should result in a smaller value.
    else if ((arr[low] + arr[high]) / 2 > num) {
      high--;
    }
    // If the arr[low] and arr[high] is less than num, increment low by 1.
    // In the next iteration, we add the current arr[high] to the element right of the current arr[low], which should result in a higher value.
    else {
      low++;
    }
  }
  // If the while loop ends and true isn't returned, return false automatically.
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
