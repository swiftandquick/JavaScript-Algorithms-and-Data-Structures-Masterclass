class Node {
  // val is the data that's being passed in.
  // next is the reference to the next node, it's initially null.
  // prev is the reference to the previous node, it's initially null.
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // head & tail are initially null, length is initially 0.
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Create a new Node.
  // If the list is empty, set the first Node to head and tail.
  // Otherwise, set the tail's next value equals to newNode and set the newly added Node's prev value to the current tail value.
  // Set the new tail value to newNode.
  // Increment the length by 1 and return the list.
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Return undefined if the list currently has no items.
  // Set poppedNode equals to the tail because we are removing the tail.
  // If there's only one Node in the list, that means when that Node is popped, the list will be empty, in that case, set head and tail to null.
  // Otherwise, set the tail to current tail's previous Node.  Severe the link between the current tail (second to last Node) and the poppedNode (last Node).
  // Decrement length by 1 and return the popped Node.
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  // Return undefined if the list currently has no items.
  // Set shiftedNode equals to the head because we are removing the head.
  // If there's only one Node in the list, that means when that Node is shifted, the list will be empty, in that case, set head and tail to null.
  // Otherwise, set the head to current head's next Node.  Severe the link between the current head (second Node) and the shiftedNode (first Node).
  // Decrement length by 1 and return the shifted Node.
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  // Create a new Node.
  // If the list is empty, set the first Node to head and tail.
  // Otherwise, set the head's prev value equals to newNode and set the newly added Node's next value to the current head value.
  // Set the new tail head to newNode.
  // Increment the length by 1 and return the list.
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // If index is not within range, return null.
  // If index is a small number and it's on the first half of the list, iterate from the head until the Node is found.
  // If index is a large number and it's on the second half of the list, iterate from the tail until the Node is found.
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        current--;
      }
    }
    return current;
  }
  // Invoke get() using index.
  // If foundNode exists, which means get returns a non-null value, return true and set the value of the Node to a new value.
  // If foundNode is null, return false.
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  // If index is out of range, return false.
  // If index equals 0, unshift the Node at the start of the list.  If index equals list's length, push the Node at the end of the list.
  // Otherwise, create a newNode object using the Node class.  Find the beforeNode (Node before newNode) and afterNode (Node after newNode) using get().
  // Connect beforeNode, afterNode and newNode together.
  // Increment length by 1, return true.
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  // If index is not found, return undefined.
  // If index is 0, shift.  If index is length - 1, pop.
  // Otherwise, invoke get() method to get the index, severe the link of the between removed and before / after, then connect prev and next.
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
    let removed = this.get(index);
    let before = removed.prev;
    let after = removed.next;
    before.next = after;
    after.prev = before;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
  // Switch the head and tail.
  // prev is initially null because head is now tail, tail's next node is null.
  // Use while loop to traverse and see if there is a current node, then reverse the doubly linked list.
  reverse() {
    if (this.length < 2) {
      return this;
    }
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let currentPrev = null;
    let currentNext = null;
    while (current) {
      currentPrev = current.prev;
      currentNext = current.next;
      current.prev = currentNext;
      current.next = currentPrev;
      current = currentNext;
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

// Create a list object out of the DoublyLinkedList class.
const list = new DoublyLinkedList();

// Insert 99 to the end of the list, since 99 is the only Node, it became both the head and tail, and both prev and next for 99 are currently null.
console.log(list.push(99));

// Insert 100 to the end of the list, 99 became prev for 100, 100 became next for 99, 99's prev is still null, 100's next is null.
console.log(list.push(100));

// Insert 101 to the end of the list, the list is now 99 - 100 - 101.
console.log(list.push(101));

// Remove 101 from the end of the list, the new tail is now 100.
console.log(list.pop());

// Remove 99 from the beginning of the list, now only the Node 100 is in the list.
console.log(list.shift());

// Insert 99 to the start of the list, 99 became prev for 100, 100 became next for 99, 99's prev is still null, 100's next is null.
console.log(list.unshift(99));

// Get the first Node from the list, which is in index 0, which has the value of 99.
console.log(list.get(0));

// Set the first Node (index 0) of the list from 99 to 88.
console.log(list.set(0, 88));

// Insert 95 at index 1 as the second element on the list, list is now 88 - 95 - 100.
console.log(list.insert(1, 95));

// Remove index 1, which is 95, the list is now 88 - 100.
console.log(list.remove(1));

// Reverse the linked list, now the link list is 100 - 88.
console.log(list.reverse());

// Print the linked list.
list.print();
