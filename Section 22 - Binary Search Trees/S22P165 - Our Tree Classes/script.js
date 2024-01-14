class Node {
  // Each Node can have up to two child Nodes, one left Node and one right Node.
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // Initially, there's no root.
  constructor() {
    this.root = null;
  }
  // Create a new Node.
  // If root is null, means the BST is empty, set the root equals to the new Node.
  // Otherwise, traverse the tree from root until we find the right place to add the Node.
  // Search the left side if value is less than current's value.
  // Insert the Node as the left child Node of current if there's currently no left child Node.
  // If there's already a left Node, set current equals to that left Node.
  // Search the right side if the value is greater than current's value.
  // Insert the Node as the right child Node of current if there's currently no right child Node.
  // If there's already a right Node, set current equals to that right Node.
  // Return the entire BST, return undefined if the Node already exists in the BST.
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }
  // If there's no root, which means the BST is empty, return false.
  // Otherwise, traverse the tree from root until we find or not find the Node.
  // found is initially false, because the Node is not found yet.
  // While loop will stop iterating if current is undefined or found became true.
  // Move to the left Node if val is less than current, set the left Node of current to new current.
  // Move to the right Node if val is greater than current, set the left Node of current to new current.
  // If val equals to current, set found equals true.
  // Return true or false depend on what the found value is after the while loop iterations.
  find(val) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
    // Return the current Node, for exercise.
    // return current;
  }
  // Breadth first search:  iterate through every node from top to bottom, left to right.
  // If there's no root, return data (currently empty).
  // Set node equals root, then push the node (root) into the queue array.
  // While queue array is not empty, move the first element from queue array to data array until queue array is empty.
  // If there's a left node of the current node (node), add the left node of the current node at the end of the queue array.
  // If there's a right node of the current node (node), add the right node of the current node at the end of the queue array.
  // Return the data array, which should contain all Nodes.
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;
    if (!this.root) {
      return data;
    }
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  // Depth first search (PreOrder):  iterate through every node, from the root, traverse the left side first, then the right side.
  // If there's no root, return data (currently empty).
  // Otherwise, push the root into the data array by calling traverse() method.
  // Recursively call traverse to add nodes from the left side of the tree, then add the nodes from the right side of the tree.
  DFSPreOrder() {
    const data = [];
    if (!this.root) {
      return data;
    }
    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
  // Depth first search (PostOrder):  iterate through the left side and then the right side, add nodes from bottom to root.
  // If there's no root, return data (currently empty).
  // Otherwise, traverse from the root.  Invoke traverse(), add Nodes from bottom to top.
  DFSPostOrder() {
    const data = [];
    if (!this.root) {
      return data;
    }
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  // Depth first search (InOrder):  iterate through the left side and then the right side, add nodes from left.
  // If there's no root, return data (currently empty).
  // Otherwise, traverse from the root.  Invoke traverse(), add nodes from left, to its parent, then the parent's right node.
  // && is short circuit, if there's a left node, continue to traverse until I get the left-most node.
  DFSInOrder() {
    const data = [];
    if (!this.root) {
      return data;
    }
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // Sort the BST is order from smallest to largest.
  // If arr returned is null or less than 2 in size, return undefined as there's no second largest.
  // Otherwise, return the second to last index from the returned array.
  findSecondLargest() {
    let arr = this.DFSInOrder();
    if (arr === null || arr.length < 2) {
      return undefined;
    } else {
      return arr[arr.length - 2];
    }
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
      if (maxDepth - minDepth > 1) {
        return;
      }
    }
    helper(this.root);
    return maxDepth - minDepth <= 1;
  }
}

const tree = new BinarySearchTree();

// Insert 10 as root.
tree.insert(10);

// Insert 5 as the left Node of 10, because there is currently no left Node for 10.
tree.insert(5);

// Insert 13 as the right Node of 10, because there is currently no right Node for 10.
tree.insert(13);

// Search from the root, 11 > 10, go to the right Node of 10, which is 13.
// 11 < 13, there's no left Node for 13, set 11 as left Node of 13.
tree.insert(11);

// Search from the root, 2 < 10, go to the left Node of 10, which is 5.
// 2 < 5, there's no left Node for 5, set 2 as left Node of 5.
tree.insert(2);

// Search from the root, 16 > 10, go to the right Node of 10, which is 13.
// 16 > 13, there's no right Node for 13, set 16 as right Node of 13.
tree.insert(16);

// Search from the root, 7 < 10, go to the left Node of 10, which is 5.
// 7 > 5, there's no right Node for 5, set 7 as right Node of 5.
tree.insert(7);

console.log(tree);

// Search from the root, 11 > 10, go the right Node of 10, which is 13.
// 11 < 13, go to the left Node of 13, which is 11.
// 11 = 11, found is now true, exit the while loop.  Return true.
console.log(tree.find(11));

// Search from the root, 1 < 10, go the left Node of 10, which is 5.
// 1 < 5, go to the left Node of 5, which is 2.
// 1 < 2, go to the left Node of 2, which is null, exit out of while loop.  Return false.
console.log(tree.find(1));

// Breadth first search:  [10, 5, 13, 2, 7, 11, 16].
console.log(tree.BFS());

// Depth first search (PreOrder):  [10, 5, 2, 7, 13, 11, 16].
console.log(tree.DFSPreOrder());

// Depth first search (PostOrder):  [2, 7, 5, 11, 16, 13, 10].
console.log(tree.DFSPostOrder());

// Depth first search (InOrder):  [2, 5, 7, 10, 11, 13, 16].
// In a binary search tree, DFS (InOrder) sorts the tree in order from smallest to largest.
console.log(tree.DFSInOrder());

// Return 13, as 13 is the second to last element in the sorted array [2, 5, 7, 10, 11, 13, 16].
console.log(tree.findSecondLargest());

// Return true, both minDepth and maxDepth are 3.
console.log(tree.isBalanced());
