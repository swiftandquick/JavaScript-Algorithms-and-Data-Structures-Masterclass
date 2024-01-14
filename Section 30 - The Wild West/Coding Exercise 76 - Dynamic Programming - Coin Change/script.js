// The fill() method fills all the elements of an array from a start index to an end index.
// The amount of elements in the ways array equals to value plus 1.
// Set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins.
// Use a nested array to calculate how many ways to get up to certain amount of money in cents.
// The last index is the number of ways to get up to the specified value in cents.
function coinChange(coins, value) {
  let ways = Array(value + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (coins[i] <= j) {
        ways[j] = ways[j - coins[i]] + ways[j];
      }
    }
  }
  return ways[ways.length - 1];
}

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1

// ways = [1, 0, 0, 0, 0, 0].
// i = 0, which is 1, coins[i] = 1.
// ways = [1, 1, 0, 0, 0, 0], 1 <= 1, ways[1] = ways[1 - 1] + ways[1], ways[1] = ways[0] + ways[1], ways[1] = 1 + 0, ways[1] = 1
// ways = [1, 1, 1, 0, 0, 0], 1 <= 2, ways[2] = ways[2 - 1] + ways[2], ways[2] = ways[1] + ways[2], ways[2] = 1 + 0, ways[2] = 1
// ways = [1, 1, 1, 1, 0, 0], 1 <= 3, ways[3] = ways[3 - 1] + ways[3], ways[3] = ways[2] + ways[3], ways[3] = 1 + 0, ways[3] = 1
// ways = [1, 1, 1, 1, 1, 0], 1 <= 4, ways[4] = ways[4 - 1] + ways[4], ways[4] = ways[3] + ways[4], ways[4] = 1 + 0, ways[4] = 1
// ways = [1, 1, 1, 1, 1, 1], 1 <= 5, ways[5] = ways[5 - 1] + ways[4], ways[5] = ways[4] + ways[5], ways[4] = 1 + 0, ways[5] = 1
// j = 6, ways.length = 6, 6 < 6 is false, break out of inner for loop.
// i = 1, which is 5, coins[i] = 5.
// 5 <= 1, 5 <= 2, 5 <= 3, 5 <= 4 are all false, skip to when j = 5.
// ways = [1, 1, 1, 1, 1, 2], 1 <= 5, ways[5] = ways[5 - 5] + ways[5], ways[5] = ways[0] + ways[5], ways[5] = 1 + 1, ways[5] = 2.
// Should return 2, tehre are two ways to obtain 5 cents, with 5 pennies or with a nickel.
console.log(coinChange(denominations, 5)); // 2

console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339
