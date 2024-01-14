// collectStrings({ word: "hello", innerObj: { bool: true, word2: "world" } })
// ["hello"].concat({ bool: true, word2: "world" })
// ["hello"].concat(["world"])
// ["hello", "world"]
function collectStrings(obj) {
  // arr starts off as empty.
  let arr = [];
  // Iterate through each property in obj.
  for (let key in obj) {
    // Different case, if the current property is an object, invoke collectStrings to flatten the object until a base case is returned.
    if (typeof obj[key] === "object") {
      arr = arr.concat(collectStrings(obj[key]));
    }
    // Base case, if the current property's value is a string, push it into the to arr array.
    else if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
  }
  // Return the sum.
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

const obj2 = {
  word: "hello",
  innerObj: { bool: true, word2: "world" },
};

console.log(collectStrings(obj2)); // ["hello", "world"]
