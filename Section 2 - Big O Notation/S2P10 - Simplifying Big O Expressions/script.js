// O(n) run time.
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(6);

// O(1) run time.
// For loop can run up to 5 times at most.
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(1);
