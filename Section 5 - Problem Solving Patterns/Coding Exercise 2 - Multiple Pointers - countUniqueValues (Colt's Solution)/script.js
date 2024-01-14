function countUniqueValues(arr) {
  let i = 0;
  // Iterate arr from index 1 to last index.
  for (let j = 1; j < arr.length; j++) {
    // If i and j are not equal, increment i by 1, set i equals j.
    // Let's say arr is [-2, -1, -1, 0, 1], i is 0, j is 1, arr[1] is -2 and arr[j] is -1, set i equal to 1 and arr[1] (arr[i]) to -1.
    // Now j automatically increment by 1 at the start of the new iteration because this is for loop, new j will be 2, and arr[2] (arr[j]) = -1.
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2;
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); // 7

/*
First iteration:  [-2, -1, -1, 0, 1], i = 1, j = 1, arr[i] = -1, arr[j] = -1.  
Second iteration:  [-2, -1, -1, 0, 1], i = 1, j = 2, arr[i] = -1, arr[j] = -1.  
Third iteration:  [-2, -1, 0, 0, 1], i = 2, j = 3, arr[i] = 0, arr[j] = 0;
Fourth iteration:  [-2, -1, 0, 1, 1], i = 3, j = 4, arr[i] = 1, arr[j] = 1.  
i is 3, return i + 1 is 4.  
*/
