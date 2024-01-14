// Time complexity:  O(log(n)), binary search.
function search(arr, val) {
  // Since array is sorted from smallest to largest, I can set min as index 0 and max as last index.
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    // Get the middle element, min and max changes every iteration so middle also changes every iteration.
    let middle = Math.floor((min + max) / 2);
    // If the middle element is less than val, set min equals middle + 1.
    if (arr[middle] < val) {
      min = middle + 1;
    }
    // If the middle element is greater than val, set min equals middle -1 1.
    else if (arr[middle] > val) {
      max = middle - 1;
    }
    // If the middle element is equal to val, return middle.
    else {
      return middle;
    }
  }
  // If nothing returns from the while loop, that means val is not in arr, return -1.
  return -1;
}

console.log(search([1, 2, 3, 4, 5], 2));
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

/* 
arr = [1, 2, 3, 4, 5, 6], val = 4.  
First iteration, min = 0, max = 5, middle = 2.  arr[2] = 3, 3 < 4, new min = 3.
Second iteration, min = 3, max = 5, middle = 4.  arr[4] = 5, 5 > 4, new max = 3.  
Third iteration, min = 3, max = 3, middle = 3.  arr[3] = 4, 4 = 4, return 3.   
*/
