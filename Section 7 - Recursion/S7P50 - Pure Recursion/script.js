// collectOddValues([1, 2, 3])
// [1].concat(collectOddValues([2, 3]))
// [1].concat(collectOddValues([2, 3])), [].concat(collectOddValues([3]))
// [1].concat(collectOddValues([2, 3])), [].concat(collectOddValues([3])), [3].concat(collectOddValues([]))
// [1].concat(collectOddValues([2, 3])), [].concat([3])
// [1].concat([3])
// [1, 3]

function collectOddValues(arr) {
  let newArr = [];
  // Base case, return newArr if arr is an empty array.
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // Different case, remove the first element of arr, then invoke collectOddValues with the new newArr array.
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3])); // [1, 3]
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
