// reverse("cat")
// reverse("at") + "c"
// (reverse("t") + "a") + "c"
// ("t" + "a") + "c"
// "ta" + "c"
// "tac"
function reverse(str) {
  // Base case, if str's length is 1 or less, return str.
  if (str.length <= 1) {
    return str;
  }
  // Otherwise, invoke reverse, and the new str is the original str value without the first character.
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("cat")); // 'tac
console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
