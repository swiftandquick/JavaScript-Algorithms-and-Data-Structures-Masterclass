// reverse("cat")
// "t" + newStr.concat(reverse("ca"))
// "t" + ("a" + newStr.concat(reverse("c")))
// "t" + ("a" + ("c" + newStr.concat(reverse(""))))
// "t" + ("a" + ("c" + ""))
// "t" + ("a" + "c")
// "t" + "ac"
// "tac"
function reverse(str) {
  // Set newStr equals empty string.
  let newStr = "";
  // Base case, if str's length equals 0, return newStr.
  if (str.length === 0) {
    return newStr;
  }
  // Different case, invoke reverse until there's str became an empty string,
  // for each invocation, the new value is the original value without the last character.
  newStr =
    str[str.length - 1] + newStr.concat(reverse(str.slice(0, length - 1)));
  return newStr;
}

console.log(reverse("cat")); // 'tac
console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
