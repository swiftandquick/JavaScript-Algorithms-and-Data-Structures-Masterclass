// capitalizeWords(["car", "taco", "banana"])
// ["CAR"].concat(capitalizeWords(["taco", "banana"]))
// ["CAR"].concat(["TACO"].concat(capitalizeWords(["banana"])))
// ["CAR"].concat(["TACO"].concat(["BANANA"].concat(capitalizeWords([]))))
// ["CAR"].concat(["TACO"].concat("[BANANA"].concat([])))
// ["CAR"].concat(["TACO"].concat(["BANANA"]))
// ["CAR"].concat(["TACO", "BANANA"])
// ["CAR", "TACO", "BANANA"]
function capitalizeWords(arr) {
  let newArr = [];
  // Base case, return newArr if arr is an empty array.
  if (arr.length === 0) {
    return newArr;
  }
  // Push the uppercase version of the first arr element into newArr.
  newArr.push(arr[0].toUpperCase());
  // Different case, remove the first element of arr, then invoke capitalizeWords with the new newArr array.
  newArr = newArr.concat(capitalizeWords(arr.slice(1)));
  return newArr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));

let words2 = ["car", "taco", "banana"];
console.log(capitalizeWords(words2));
