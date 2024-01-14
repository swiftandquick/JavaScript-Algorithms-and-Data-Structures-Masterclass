// flatten([1, 2, 3, [4, 5]])
// [1, 2, 3].push(...flatten[4, 5])
// [1, 2, 3].push(...[4, 5])
// [1, 2, 3].push(4, 5)
// [1, 2, 3, 4, 5]
function flatten(oldArr) {
  var newArr = [];
  // Iterate through each of oldArr.
  for (let i = 0; i < oldArr.length; i++) {
    // Different case, if the element is an array, invoke flatten until the element is not a nested array.
    // After flatten returns a non-nested array, then use concat the array into individual elements.
    // Which then can be added onto the newArr array.
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    }
    // Base case, if the element isn't an array, add it to the newArr array.
    else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
