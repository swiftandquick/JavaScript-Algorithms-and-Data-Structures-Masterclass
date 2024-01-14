class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  // Initially, the stack is empty.
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Create a new Node.
  // If the stack is currently empty, set the new Node to first and last.
  // Otherwise, add the new Node to the new first element of the stack.
  // Increment size by 1, return the size.
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // If the stack is empty. return null.
  // Otherwise, set temp equals first.  If first equals last, which means there's only one Node in the stack, set last to null.
  // Set the first Node to the next Node.
  // Return temp's (removed Ndoe) value.
  pop() {
    if (!this.first) {
      return null;
    } else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
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

// Create a Stack object.
const stack = new Stack();

// The stack now should be 2301 -> 230 -> 23.  2301 is last in, which should be first out.
stack.push(23);
stack.push(230);
stack.push(2301);

stack.print();

console.log(stack.pop()); // Removed 2301.
console.log(stack.pop()); // Removed 230.
console.log(stack.pop()); // Removed 23.
