// calcSum({a: 2, b: {c: 3, d: 2}})
// 2, calcSum({c: 3, d: 2})
// 2 + 2
// 4
function nestedEvenSum(obj) {
  let sum = 0;
  // Helper method.
  function calcSum(o) {
    // Iterate through each property in o (obj).
    for (let key in o) {
      // Base case, if the value is an even number, add it to sum.  .
      if (typeof o[key] === "number" && o[key] % 2 === 0) {
        sum = sum + o[key];
      }
      // Different case, if the value is an object, keep invoking calcSum to flatten the object.
      else if (typeof o[key] === "object") {
        calcSum(o[key]);
      }
    }
  }
  calcSum(obj);
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const obj3 = {
  a: 2,
  b: { c: 3, d: 2 },
};

console.log(nestedEvenSum(obj1)); // 6, 2 + 2 + 2
console.log(nestedEvenSum(obj2)); // 10, 2 + 2 + 2 + 2 + 2
console.log(nestedEvenSum(obj3)); // 4, 2 + 2
