let stack = [];

// Add 3 items in order, google - instagram - youtube.  Last item added is "youtube".
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log(stack);

// Last item in goes out first, "youtube" is removed first.
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// Last item added is "cloned out wrinkle."
// Adding and removing from the beginning is not good, run time will be O(n).
stack.unshift("create new file");
stack.unshift("resize file");
stack.unshift("cloned out wrinkle");

console.log(stack);

// Remove the last item added using shift.
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());
