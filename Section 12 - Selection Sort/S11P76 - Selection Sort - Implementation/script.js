function selectionSort(arr) {
  // Iterate from index i to last index.
  for (let i = 0; i < arr.length; i++) {
    // Lowest value index is initially i.
    let lowest = i;
    // Iterate from index i + 1 to last index.
    for (let j = i + 1; j < arr.length; j++) {
      // If index j's value is less than lowest, set lowest to index j.
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // Swap i with the lowest index.
    const temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

// i = 0, j = 1, lowest = 1, [34, 22, 10, 19, 17], 22 < 34 is true
// i = 0, j = 2, lowest = 2, [34, 22, 10, 19, 17], 10 < 22 is true
// i = 0, j = 3, lowest = 2, [34, 22, 10, 19, 17], 19 < 10 is false
// i = 0, j = 4, lowest = 2, [34, 22, 10, 19, 17], 17 < 10 is false
// [10, 22, 34, 19, 17], swap i (0) and lowest (2)
// i = 1, j = 2, lowest = 1, [10, 22, 34, 19, 17], 34 < 22 is false
// i = 1, j = 3, lowest = 3, [10, 22, 34, 19, 17], 19 < 22 is true
// i = 1, j = 4, lowest = 4, [10, 22, 34, 19, 17], 17 < 19 is true
// [10, 17, 34, 19, 22], swap i (1) and lowest (4)
// i = 2, j = 3, lowest = 3, [10, 17, 34, 19, 22], 19 < 34 is true
// i = 2, j = 4, lowest = 3, [10, 17, 34, 19, 22], 22 < 19 is false
// [10, 17, 19, 34, 22], swap i (2) and lowest (3)
// i = 3, j = 4, lowest = 4, [10, 17, 19, 34, 22], 22 < 34 is true
// [10, 17, 19, 22, 34], swap i (3) and lowest (4)
console.log(selectionSort([34, 22, 10, 19, 17]));
