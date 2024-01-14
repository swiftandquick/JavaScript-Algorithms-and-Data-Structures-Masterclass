class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  remove(index) {
    // General summary:
    // Return the removed node.
    // Re-establish connections before and after removedNode.
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
      var tobeRemovedNode = current;
    } else {
      var count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      }
      var tobeRemovedNode = current;
    }
    tobeRemovedNode.prev.next = tobeRemovedNode.next;
    tobeRemovedNode.next.prev = tobeRemovedNode.prev;
    this.length--;
    return tobeRemovedNode;
  }
}
