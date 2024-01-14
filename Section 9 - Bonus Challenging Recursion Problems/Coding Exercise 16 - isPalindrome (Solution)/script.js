// isPalindrome("tacocat")
// isPalindrome("acoca")
// isPalindrome("coc")
// isPalindrome("o")
// true
function isPalindrome(str) {
  // Base case 1, if str's length is 1, return true.
  if (str.length === 1) {
    return true;
  }
  // Base case 2, if str's length is 2, return whatever str[0] === str[1] is, it could be true or false.
  if (str.length === 2) {
    return str[0] === str[1];
  }
  // Different case, if first and last character are equal, invoke isPalindrome again with a new str value (without first and last character).
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  // If none of the if statement is invoked, return false.
  return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
