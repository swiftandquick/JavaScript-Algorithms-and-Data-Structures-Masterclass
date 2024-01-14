// Helper function, merge and sort two arrays into a single array.
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  // If arr.length is less than or equal to 1, return the arr.
  if (arr.length <= 1) {
    return arr;
  }
  // Divide the array into halves until we get an array of 1 or 0 element.
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// mergeSort([10, 24, 76, 73])
// mergeSort([10, 24])
// mergeSort([10])
// mergeSort([24])
// mergeSort([76, 73])
// mergeSort([76])
// mergeSort([73])
// merge([10], [24]) = [10, 24]
// merge([76, 73]) = [73, 76]
// merge([10, 24], [73, 76]) = [10, 24, 73, 76]
console.log(mergeSort([10, 24, 76, 73]));
