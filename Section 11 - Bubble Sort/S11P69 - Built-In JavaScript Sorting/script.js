// If num1 - num2 is negative, num1 is less than num2, put num1 before num2.
// If num1 - num2 is positive, num1 is greater than num2, put num1 after num2.
// If 0 is returned, no position change.
function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberCompare)); // [4, 6, 10, 15]

// Sort from shortest to longest string.
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
); // ["Colt", "Steele", "Algorithms", "Data Structures"]
