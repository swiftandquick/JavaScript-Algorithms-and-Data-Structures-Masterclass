// Sort the coins in ascending order from smallest to largest.
// Loop starting from the end of the array, so big numbers will be checked first.

function minCoinChange(coins, amount) {
  coins.sort((a, b) => {
    return a - b;
  });
  console.log(coins);
  let change = [];
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= amount && amount - coins[i] >= 0) {
      amount = amount - coins[i];
      change.push(coins[i]);
      i = i + 1;
    }
    if (amount <= 0) {
      break;
    }
  }
  return change;
}

const denominations = [1, 5, 10, 25];

// i = 3, coins[3] = 25, 25 <= 41, 41 - 25 >= 0, amount = 41 - 25 = 16, change = [25], i = 4.
// i = 3, coins[3] = 25, 25 <= 16 is false.
// i = 2, coins[2] = 10, 10 <= 16, 16 - 10 >= 0, amount = 16 - 10 = 6, change = [25, 10], i = 3.
// i = 2, coins[2] = 10, 10 <= 6 is false.
// i = 1, coins[1] = 5, 5 <= 6, 6 - 5 >= 0, amount = 6 - 5 = 1, change = [25, 10, 5], i = 2.
// i = 1, coins[1] = 5, 5 <= 1 is false.
// i = 0, coins[0] = 1, 1 <= 1, 1 - 1 >= 0, amount = 1 - 1 = 0, change = [25, 10, 5, 1], i = 1.
// i = 0, coins[0] = 1, 1 <= 0 is false.
// i = -1, break out of for loop.
// Return [25, 10, 5, 1], which is the minimum number of coins in 41 cents.
console.log(minCoinChange(denominations, 41)); // 2
