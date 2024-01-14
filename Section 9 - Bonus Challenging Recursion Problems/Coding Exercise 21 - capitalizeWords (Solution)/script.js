// capitalizeWords(["car", "taco", "banana"])
// capitalizeWords(["car", "taco"]).push(["BANANA"])
// capitalizeWords(["car"]).push(["TACO"]).push("BANANA")
// ["CAR"].push(["TACO"]).push(["BANANA"])
// ["CAR", "TACO", "BANANA"]
function capitalizeWords(array) {
  // Base case, if array length is 1, return the only element in all uppercases.
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  // Different case, every time capitalizeWords is invoked, the new array value is the original array value without the last element.
  let res = capitalizeWords(array.slice(0, -1));
  // Push the last element into the res array and make it upper case.
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));

let words2 = ["car", "taco", "banana"];
console.log(capitalizeWords(words2));
