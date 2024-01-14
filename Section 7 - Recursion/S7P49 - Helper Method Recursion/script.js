// collectOddValues([1, 2, 3])
// collectOddValues([1, 2, 3]), result = [] -> helper([1, 2, 3])
// collectOddValues([1, 2, 3]), result = [1] -> helper([2, 3])
// collectOddValues([1, 2, 3]), result = [1, 3] -> helper([3])
// collectOddValues([1, 2, 3]), result = [1, 3] -> helper([])
// collectOddValues([1, 2, 3]), result = [1, 3]

function collectOddValues(arr) {
  // result array will store odd numbers from arr, initially empty.
  let result = [];
  function helper(helperInput) {
    // Base case, if helperInput is an empty array, return nothing.
    if (helperInput.length === 0) {
      return;
    }
    // If the current first index is an odd number, push it to result array.
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // Different input, remove the first element from the original array every time helper is invoked,
    // then the new array will be the new helperInput value in the next function call.
    helper(helperInput.slice(1));
  }
  // The initial value of helperInput will be arr itself.
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3])); // [1, 3]
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
