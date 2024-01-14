class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  // Initially, the stack is empty.
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Create a new Node.
  // If the queue is empty, set first and last equals newNode.
  // Otherwise, set the newNode to the new last.
  // Increment the size by 1 and return it.
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // If the queue is empty, return null.
  // Otherwise, set temp to first.  If first and last are equal, set last to null, that means there's only 1 element in the queue.
  // Update the new first item to the current first item's next item.
  // Decrement size by 1 and return the temp's (removed Node) value.
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
  // Print out the stack.
  print() {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// Create a new Queue object.
const queue = new Queue();

// The queue now should be "FIRST" -> "SECOND" -> "THIRD".  "FIRST" is first in, which should be first out.
queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");

queue.print();

console.log(queue.dequeue()); // Removed "FIRST".
console.log(queue.dequeue()); // Removed "SECOND".
console.log(queue.dequeue()); // Removed "THIRD".
