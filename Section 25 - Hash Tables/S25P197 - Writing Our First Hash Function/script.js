// Hash a key into a numerical value.
// The prime number in the hash is helpful in spreading out the keys more uniformly.
// It's also helpful if the array that I am putting values into has a prime length.
// If the key length is greater than 100, only hash based on the first 100 characters.
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// char.charCodeAt(0) = 16, 9, 14, 11.
// (0 * 31 + 16) % 10 = 16 % 10 = 6.
// (6 * 31 + 9) % 10 = 195 % 10 = 5.
// (5 * 31 + 14) % 10 = 169 % 10 = 9.
// (9 * 31 + 11) % 10 = 290 % 10 = 0.
// "pink" is hashed into 0.
console.log(hash("pink", 10));
