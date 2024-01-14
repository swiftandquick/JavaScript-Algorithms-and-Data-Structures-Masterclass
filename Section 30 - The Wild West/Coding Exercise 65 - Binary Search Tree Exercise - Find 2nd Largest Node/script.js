class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (typeof value === "number" && !isNaN(value)) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          } else {
            return "duplicate!";
          }
        }
      }
    } else return "Please insert a number";
  }
  DFSInOrder() {
    let data = [];
    function traversy(node) {
      if (node.left) traversy(node.left);
      data.push(node.value);
      if (node.right) traversy(node.right);
    }
    if (this.root === null) return null;
    traversy(this.root);
    return data;
  }
  findSecondLargest() {
    let arr = this.DFSInOrder();
    if (arr === null || arr.length < 2) {
      return undefined;
    } else {
      return arr[arr.length - 2];
    }
  }
}
