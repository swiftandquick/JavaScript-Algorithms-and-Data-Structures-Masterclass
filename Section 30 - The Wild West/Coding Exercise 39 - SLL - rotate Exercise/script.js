class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    this.length === 0 ? (this.head = node) : (this.tail.next = node);
    this.tail = node;
    this.length++;
    return this;
  }
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
}
