let queue = [];

// queue is now ["FIRST", "SECOND", "THIRD"].
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");

console.log(queue);

// Remove element that is added first, which is "FIRST".
// Re-index every time shift() is invoked, O(n) time.
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

// queue is now ["THIRD", "SECOND", "FIRST"].
// Re-index every time unshift() is invoked, O(n) time.
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

console.log(queue);

// Remove element that is added first, which is "FIRST".
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
