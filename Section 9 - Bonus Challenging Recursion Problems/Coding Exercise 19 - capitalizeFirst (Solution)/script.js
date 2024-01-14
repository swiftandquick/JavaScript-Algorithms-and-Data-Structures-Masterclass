// capitalizeFirst(["car", "taco", "banana"])
// capitalizeFirst(["car", "taco"]).push(["Banana"])
// capitalizeFirst(["car"]).push(["Taco"]).push("Banana")
// ["Car"].push(["Taco"]).push(["Banana"])
// ["Car", "Taco", "Banana"]
function capitalizeFirst(array) {
  // Base case, if the array length is 1, capitalize the first letter of the only element.
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  // Different case, keep invoking capitalizeFirst, but with each new invocation, get rid of the last element in array.
  const res = capitalizeFirst(array.slice(0, -1));
  // Capitalize the first letter of last element of the array.
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
