// collectStrings, { word: "hello", innerObj: { bool: true, word2: "world" } }
// ["hello"], { bool: true, word2: "world" }
// ["hello", "world"]
function collectStrings(obj) {
  const stringsArr = [];
  // Helper method.
  function gatherStrings(o) {
    // Iterate through each property in o (obj).
    for (let key in o) {
      // Base case, if the value is a string, push it into stringsArr.
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      }
      // Different case, if the value is an object, keep invoking gatherStrings to flatten the object.
      else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }
  gatherStrings(obj);
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
