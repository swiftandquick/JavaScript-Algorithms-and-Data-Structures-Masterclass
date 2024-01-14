// isPalindrome("tacocat")
// isPalindrome("acoca")
// isPalindrome("coc")
// isPalindrome("o")
// true
function isPalindrome(str) {
  // Base case 1, if str's length is 1 or less, return true.
  if (str.length <= 1) {
    return true;
  }
  // Base case 2, if first character and last character are not equal, return false.
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Different case, invoke isPalindrome with a new string, new str value is without first and last character.
  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
