// nestedEvenSum({a: 2, b: {c: 3, d: 2}})
// 2 + nestedEvenSum({c: 3, d: 2})
// 2 + 2
// 4
function nestedEvenSum(obj) {
  // sum starts off as 0.
  let sum = 0;
  // Iterate through each property in obj.
  for (const key in obj) {
    // Different case, if the current property is an object, invoke nestedEvenSum to flatten the object until a base case is returned.
    if (obj[key].constructor === Object) {
      sum += nestedEvenSum(obj[key]);
    }
    // If the current property's value is an even number, add the current value to sum.
    else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  // Return the sum.
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
