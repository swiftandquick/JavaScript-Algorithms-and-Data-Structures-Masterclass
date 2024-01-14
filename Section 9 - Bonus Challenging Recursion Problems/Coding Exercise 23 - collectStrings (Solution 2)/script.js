// collectStrings({ word: "hello", innerObj: { bool: true, word2: "world" } })
// ["hello"].concat({ bool: true, word2: "world" })
// ["hello"].concat(["world"])
// ["hello", "world"]
function collectStrings(obj) {
  var stringsArr = [];
  // Iterate through each property in obj.
  for (var key in obj) {
    // Base case, if obj[key] is string, push the string value onto stringArr.
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    }
    // Different case, if obj[key] is an object, invoke collectString to flatten the object.
    else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }
  return stringsArr;
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
