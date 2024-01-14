// Time complexity:  O(n).
function same(arr1, arr2) {
  // If array length is different, then it's automatically false.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Create empty objects.
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // Iterate over each element in arr1.
  // If the element exists in arr1, add 1 to it, if the element doesn't exist in arr1 yet, set it to 0 then add 1 to it (or set it to 1).
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // Iterate over each element in arr2.
  // If the element exists in arr2, add 1 to it, if the element doesn't exist in arr1 yet, set it to 0 then add 1 to it (or set it to 1).
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // Iterate through every key in both frequencyCounter1 object.
  for (let key in frequencyCounter1) {
    // If the key in frequencyCounter1 is not in frequencyCounter2, return false.
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // If the value of the key^2 in frequencyCounter2 is not equal to the value of key in frequencyCounter1, return false.
    // For example, if the key 4 has the value of 2 in frequencyCounter2, but the key 2 has the value of 1 in frequencyCounter1,
    // that means arr1 has one 2 and arr2 has two 4's, so return false.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // If the for loop doesn't return false, return true by default.
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3, 2], [9, 1, 4])); // false
console.log(same([1, 4, 3], [9, 1, 4])); // false
