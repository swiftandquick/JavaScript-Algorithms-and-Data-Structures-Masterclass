// O(n) run time.
// Number of operations is eventually bound by a multiple of n.
function countUpAndDown(n) {
  console.log("Going up!");
  // O(n).
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  // O(n).
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down.  Bye.");
}

countUpAndDown(10);

// O(n^2) run time.
// O(n) operation inside an O(n) operation).
function printAllPairs(n) {
  // O(n).
  for (let i = 0; i < n; i++) {
    // O(n).
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(2);
