// flatten([1, 2, 3, [4, 5]])
// [1, 2, 3].push(...flatten[4, 5])
// [1, 2, 3].push(...[4, 5])
// [1, 2, 3].push(4, 5)
// [1, 2, 3, 4, 5]
function flatten(items) {
  const flat = [];
  // Iterate through each item in the items array.
  items.forEach((item) => {
    // Different case, if the element is an array, invoke flatten until the element is not a nested array.
    // After flatten returns a non-nested array, then use spread operator to turn the single array into individual elements.
    // Which then can be added onto the flat array.
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    }
    // Base case, if the element isn't an array, add it to the flat array.
    else {
      flat.push(item);
    }
  });
  return flat;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
