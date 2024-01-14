// capitalizeFirst(["car", "taco", "banana"])
// ["Car"].concat(capitalizeFirst(["taco", "banana"]))
// ["Car"].concat(["Taco"].concat(capitalizeFirst(["banana"])))
// ["Car"].concat(["Taco"].concat(["Banana"].concat(capitalizeFirst([]))))
// ["Car"].concat(["Taco"].concat("[Banana"].concat([])))
// ["Car"].concat(["Taco"].concat(["Banana"]))
// ["Car"].concat(["Taco", "Banana"])
// ["Car", "Taco", "Banana"]
function capitalizeFirst(arr) {
  let newArr = [];
  // Base case, return newArr if arr is an empty array.
  if (arr.length === 0) {
    return newArr;
  }
  // Push the capitalized version of the first arr element into newArr.
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  // Different case, remove the first element of arr, then invoke capitalizeFirst with the new newArr array.
  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
