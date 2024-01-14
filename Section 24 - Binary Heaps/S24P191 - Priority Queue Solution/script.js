class Node {
  // Each node has a val (value) and priority.
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // Create a new Node, push it into the end of values array, invoke bubbleUp().
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  // Set element to the last element of the heap.
  // Compare their priority, and bubble up.
  // Keep iterating the while loop until index is equal to 0.
  // If the element's priority is greater than or equal to the parent's priority, break the while loop.
  // If the element's priority is less than parent's priority, swap the element with the parent.
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // Set min equals 0.
  // Remove the root, which is min.
  // Put the last element of the values array as the new root.
  // Invoke sinkDown().
  // Return the root (min).
  dequeue() {
    if (this.values.length < 0) {
      return undefined;
    } else {
      const min = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
      this.sinkDown();
      return min;
    }
  }
  // Iterate the while loop, in every iteration, swap is set to null.
  // If the leftChildIndex is less than length, set leftChild equals the the value of that index.
  // If leftChild's priority is less than element's priority, set swap equals leftChildIndex.
  // If the rightChildIndex is less than length, set rightChild equals the value of that index.
  // If the swap is null, in which case the leftChild's priority isn't less than element's priority,
  // and rightChild's priority is less than element's priorty, set swap equals rightChildIndex.
  // If the swap isn't null, in which case leftChild is less than element's priority,
  // and rightChild's priority is greater than the leftChild's priority, set swap equals rightChildIndex.
  // If swap is null, break out of while loop, it means the leftChildIndex or rightChildIndex is greater than or equal to length.
  // swap is the index that the element will swap with its child element.  New index is the swap index.
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let priorityQueue = new PriorityQueue();

// [5].
priorityQueue.enqueue("common cold", 5);

// Add 1 to the end, [5, 1].
// index = 1, parentIndex = 0, 1 < 5, swap 1 and 5, [1, 5].
priorityQueue.enqueue("gunshot wound", 1);

// Add 4 to the end, [1, 5, 4].
// index = 2, parentIndex 0, 4 > 1, 4 stays as it is, [1, 5, 4].
priorityQueue.enqueue("high fever", 4);

// Add 2 to the end, [1, 5, 4, 2].
// index = 3, parentIndex = 1, 2 < 5, swap 2 and 5, [1, 2, 4, 5].
// index = 1, parentIndex = 0, 1 > 2, stays as it is, [1, 2, 4, 5].
priorityQueue.enqueue("broken arm", 2);

// Add 3 to the end, [1, 2, 4, 5, 3].
// index = 4, parentIndex = 1, 3 > 2, stays as it is, [1, 2, 4, 5, 3].
priorityQueue.enqueue("glass in foot", 3);

// [3, 2, 4, 5], remove 1 at the root, the last node (3) became the new root.
// index = 0, leftChildIndex = 1, rightChildIndex = 2, 2 < 3, but 4 > 3, swap 2 and 3, [2, 3, 4, 5].
// index = 1, leftChildIndex = 3, rightChildIndex = 4, 3 < 5, index 4 doesn't exist, stays as it is, break out of while loop, [2, 3, 4, 5].
// Return 1.
console.log(priorityQueue.dequeue());

// [5, 3, 4], remove 2 at the root, the last node (5) became the new root.
// index = 0, leftChildIndex = 1, rightChildIndex = 2, 3 < 5, 4 < 5, 3 < 4, swap 5 and 3, [3, 5, 4].
// index = 1, leftChildIndex = 3, rightChildIndex = 4, 3 and 4 >= length (3), exit out of while loop [3, 5, 4].
console.log(priorityQueue.dequeue());

// [4, 5], remove 3 at the root, the last tnode (4) became the new root.
// index = 0, leftChildIndex = 1, rightChildIndex = 2, 4 < 5, index 2 doesn't exist, stays as it is, [4, 5].
console.log(priorityQueue.dequeue());

// [5], remove 4 at the root.
console.log(priorityQueue.dequeue());

// [], remove the last element, which is 5.
console.log(priorityQueue.dequeue());
