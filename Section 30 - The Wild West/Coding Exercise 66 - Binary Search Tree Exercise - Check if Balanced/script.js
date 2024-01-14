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
  isBalanced() {
    if (!this.root) {
      return true;
    }
    let maxDepth = -Infinity;
    let minDepth = Infinity;
    let depth = 0;
    let node = this.root;
    function helper(node) {
      if (!node) {
        minDepth = Math.min(depth, minDepth);
        maxDepth = Math.max(depth, maxDepth);
        return;
      }
      depth++;
      helper(node.left);
      helper(node.right);
      depth--;
      if (maxDepth - minDepth > 1) return;
    }
    helper(this.root);
    return maxDepth - minDepth <= 1;
  }
}
