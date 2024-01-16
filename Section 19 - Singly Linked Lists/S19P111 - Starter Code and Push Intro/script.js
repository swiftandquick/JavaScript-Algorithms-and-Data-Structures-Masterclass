class Node {
  // val is the data that's being passed in.
  // next is the reference to the next node, it's initially null.
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // head & tail are initially null, length is initially 0.
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Create a newNode object using val.
  // Set head and tail to newNode if there's no head.
  // If there's a head, set current tail's next property to newNode, then set the new tail value to newNode.
  // Increment length by 1, return the whole list.
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // If there's no head, return undefined.
  // Keep iterating the while loop until I get to the last element of the linked list.
  // Set second to last Node to the new tail and set its next property to null, decrement length by 1.
  // If new length is 0, set head to null.
  // Return the popped Node.
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return current;
  }
  // If there's no head, return undefined.
  // Set the head to the second Node in the list.
  // If length is 0, set tail to null.
  // Return the shifted Node.
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Create a newNode object using val.
  // Set head and tail to newNode if there's no head.
  // Otherwise, set the next value of new Node to current head, then set the new head value to newNode.
  // Increment length by 1, return the whole list.
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // If index is less than 0 or greater than or equal to list's length, return null.
  // Iterate the while loop until I find the index, starting from the head.
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Invoke the get() method to find the Node on the given index.
  // If foundNode is not null, set val equals the val value in the parameter and return true, otherwise return false.
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  // If index is less than 0 or greater than list's length, return false.
  // If index equals to list's length, push the val.  If index equals to 0, unshift the val.
  // Otherwise, insert val as a Node at a specific index as newNode.
  // Set the previous Node's next value to newNode, and set newNode's previous Node's original next value (now as temp).
  // Increment length by 1 and return true.
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // If index is less than 0 or greater than or equal to list's length, return undefined.
  // If index is 0, invoke shift().  If index is list's length - 1, invoke pop().
  // Otherwise, set the previous Node's next value equals removed Node's next value.
  // Decrement the length by 1, return the removed Node.
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  // If length is less than 2, return the list because it cannot be reversed.
  // Swap head and tail.
  // prev is initially null because head is now tail, tail's next node is null.
  // Set the previous node as the next value for the next node, effectively reversing the link list.
  reverse() {
    if (this.length < 2) {
      return this;
    }
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
  // num is how much we rotate the linked list to a certain direction.
  // If num is positive, rotate to the left, if num is negative, rotate to the left.
  // If num is greater than the length of the linked list, num became the remainder of num / length.
  // For example, if length is 2 and num is 3, 3 % 2 = 1, num is 1, rotate the linked list to the right by 1.
  // Set oldHead equals current head.
  // If num < 0, set prev equals to the previous index of the num index.
  // Set the new head equals prev's next index (num index), set the prev's next node to null because prev became the tail.
  // Set the current tail's next node to the old head, then set the tail equal to prev.
  rotate(num) {
    num = num % this.length;
    if (num === 0) {
      return this;
    } else {
      let oldHead = this.head;
      let prev;
      if (num < 0) {
        prev = this.get(this.length + num - 1);
      } else if (num > 0) {
        prev = this.get(num - 1);
      }
      this.head = prev.next;
      prev.next = null;
      this.tail.next = oldHead;
      this.tail = prev;
    }
    return this;
  }
  // Print the linked list in array format.
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

// Insert "Hello" at the end of the linked list.  Set "Hello" to head and tail.
console.log(list.push("Hello"));

// Insert "Goodbye" at the end of the linked list.  Set "Goodbye" to what "Hello"'s next value is.  Set "Goodbye" to the new tail value.
console.log(list.push("Goodbye"));

// Insert "!" at the end of the linked list.  Set "!" to what "Goodbye"'s next value is.  Set "!" to the new tail value.
console.log(list.push("!"));

// Remove the last element, which is "!" from the linked list.  New tail is now "Goodbye", which points to null.
console.log(list.pop());

// Remove the first element, which is "Hello" from the linked list.  New head is now "Goodbye".
console.log(list.shift());

// Insert "Hello" in the beginning of the linked list.  Set "Hello" to new head and its next value to "Goodbye".
console.log(list.unshift("Hello"));

// Index 1 is second element, which is "Goodbye".
console.log(list.get(1));

// Not a valid index, return null.
console.log(list.get(-1));

// Change index 1 (second element) in the linked list from "Goodbye" to "World".
console.log(list.set(1, "World"));

// Insert "Little" at index 1, now the list goes "Hello" -> "Little" -> "World".
console.log(list.insert(1, "Little"));

// Remove "Little" at index 1, now the list goes "Hello" -> "World".
console.log(list.remove(1));

// Reverse the order of the linked list, now the list goes "World" -> "Hello".
console.log(list.reverse());

list.print();

// Remove everything from the linked list.
console.log(list.pop());
console.log(list.pop());

// List is now 1 -> 2 -> 3 -> 4 -> 5.
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
console.log(list.push(5));

// Rotate the Nodes to the right by 2, 1 -> 2 -> 3 -> 4 -> 5 became, 3 -> 4 -> 5 -> 1 - > 2.
// 1 -> 2 -> 3 -> 4 -> 5, length = 5, num = 2, oldHead = 1, prev = this.get(2 - 1), this.get(1), index 1 is 2, prev = 2.
// head = 2.next, head = 3.  2.next = null.  5.next = 1.  tail = 2.
console.log(list.rotate(2));

// Show all linked list items as an array.
list.print();
