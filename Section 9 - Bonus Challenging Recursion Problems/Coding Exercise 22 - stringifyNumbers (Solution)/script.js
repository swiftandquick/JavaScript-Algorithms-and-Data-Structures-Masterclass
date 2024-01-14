// stringifyNumbers({ num: 1, test: { num2: 2, bool: true } });
// { num: 1, test: {stringifyNumbers({ num2: 2, bool: true }) };
// { num: 1, test: { num2: 2, bool: true } }
function stringifyNumbers(obj) {
  const newObj = {};
  // Iterate through each key in obj.
  for (let key in obj) {
    // Base case 1, if key is a number, add the key to newObj, with the value of the key being the string version of the number.
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    }
    // Different case, if value is an object, keep invoking stringifyNumbers until the value is not an object.
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    }
    // Base case 2, if value is neither an object or number, add the key-value pairs into newObj.
    else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

let obj2 = {
  num: 1,
  test: { num2: 2, bool: true },
};

console.log(stringifyNumbers(obj2));

/*
{
  num: "1",
  test: { num2: "2", bool: true },
};
*/
