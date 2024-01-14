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
        }
      }
    }
  }
  remove(val) {
    let delNode;
    const del = (root, val) => {
      if (root === null) return root;
      else if (val > root.value) root.right = del(root.right, val);
      else if (val < root.value) root.left = del(root.left, val);
      else {
        if (delNode === undefined) delNode = root.value;
        if (root.left === null && root.right === null) {
          root = null;
        } else if (root.left === null) {
          root = root.right;
        } else if (root.right === null) {
          root = root.left;
        } else {
          let temp = findMin(root.right);
          root.value = temp.value;
          root.right = del(root.right, root.value);
        }
      }
      return root;
    };
    const findMin = (root) => {
      if (root === null) return root;
      if (root.left) return findMin(root.left);
      return root;
    };
    this.root = del(this.root, val);
    return delNode;
  }
}
