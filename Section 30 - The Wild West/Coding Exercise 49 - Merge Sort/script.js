function mergeSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

function merge(arr1, arr2, comparator) {
  let i = 0;
  let j = 0;
  let totalLength = arr1.length + arr2.length;
  let mergeArr = [];
  while (totalLength > 0) {
    for (i = 0; i < arr1.length && j < arr2.length; i++) {
      if (typeof comparator !== "function") {
        if (arr1[i] < arr2[j]) {
          mergeArr.push(arr1[i]);
        } else {
          mergeArr.push(arr2[j]);
          j++;
          i--;
        }
      } else {
        if (comparator(arr1[i], arr2[j]) < 0) {
          mergeArr.push(arr1[i]);
        } else {
          mergeArr.push(arr2[j]);
          j++;
          i--;
        }
      }
      totalLength--;
    }
    while (i < arr1.length) {
      mergeArr.push(arr1[i]);
      i++;
      totalLength--;
    }
    while (j < arr2.length) {
      mergeArr.push(arr2[j]);
      j++;
      totalLength--;
    }
  }

  return mergeArr;
}
