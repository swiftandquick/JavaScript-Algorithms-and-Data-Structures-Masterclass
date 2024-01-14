class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // Insert the element at the end of the values array.  Invoke bubbleUp().
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  // Get the last element of the values array.
  // Set element equals the last index element of the values array, variable element's value stays the same.
  // Compare element to its parent element, swap if the parent is greater.
  // Iterate the loop until element is less than the parent element or element became the root.
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // The max value is the first element on the values array.
  // Remove the last element from values array, and set first element equal to the removed value.
  // Invoke sinkDown().
  // Return the root.
  extractMax() {
    if (this.values.length <= 0) {
      return undefined;
    } else {
      const max = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
      this.sinkDown();
      return max;
    }
  }
  // Iterate the while loop, in every iteration, swap is set to null.
  // If the leftChildIndex is less than length, set leftChild equals the the value of that index.
  // If leftChild is greater than element, set swap equals leftChildIndex.
  // If the rightChildIndex is less than length, set rightChild equals the value of that index.
  // If the swap is null, in which case the leftChild isn't greater than element, and rightChild is greater than element, set swap equals rightChildIndex.
  // If the swap isn't null, in which case leftChild is greater than element, and rightChild is greater than the leftChild, set swap equals rightChildIndex.
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

// [41, 39, 33, 18, 27, 12] in order.
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(22);
heap.insert(12);

// [41, 39, 33, 18, 27, 12, 55], added 55 at the end.
// parentIndex = 2, 55 <= 33 is false, swap 55 and 33, [41, 39, 55, 18, 27, 12, 33]
// parentIndex = 0, 55 <= 41 is false, swap 55 and 41, [55, 39, 41, 18, 27, 12, 33]
heap.insert(55);

console.log(heap.values);

// Return 55, which is the root.
// Remove 55, 33 (last element) became the new root, [33, 39, 41, 18, 22, 12].
// index = 0, leftChildIndex = 1, rightChildIndex = 2, 33 < 39, 33 < 41, 39 < 41, swap 33 and 41, [41, 39, 33, 18, 22, 12].
// index = 2, leftChildIndex = 5, rightChildIndex = 6, 33 > 12, no swap, swap remains null, break out of while loop, [41, 39, 33, 18, 22, 12].
// leftChildIndex = 1, rightChildIndex = 2.
console.log(heap.extractMax());
console.log(heap.values);
