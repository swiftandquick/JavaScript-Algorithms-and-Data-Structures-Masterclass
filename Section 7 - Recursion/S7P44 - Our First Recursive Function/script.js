// Recursive version.
function countDown(num) {
  // Base case, use return to exit out the function if num is equal to 0.
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  // Different input, log current num in the console, decrease num by 1 each time countDown is invoked.
  // Invoke countDown with a different num argument until base case is reached.
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Iterative version.
function countDown2(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

countDown(4);
countDown2(4);
