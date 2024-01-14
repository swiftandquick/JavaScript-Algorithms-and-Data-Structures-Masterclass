class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  // If the vertex doesn't exist, create the vertex, the key is the vertex, the value is the empty array.
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // If v1 and v2 exist in adjacencyList, push v2 in v1's array, push v1 in v2's array.
  // Weighted graph has a weight.
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }
  // The algorithm accepts two inputs, the starting vertex and the ending vertex.
  // path is an array variable to return at the end, it represents the shortest path from start to finish.
  // distances is the shortest distance from start to the destination node, initially, the start's value is 0, other nodes' values are infinity.
  // previous is an object containing all vertices, the value is the previous vertex in the shortest distance route, all vertices' values are initially null.
  // Add the starting vertex to priority queue, it has priority of 0.
  // In the previous object, set the value of each vertex (key) to null.
  // As long as the priority queue isn't empty, or there's something to visit.
  // Remove the highest prioritized element from the priority queue, or the first element from the nodes object, store it into the smallest variable.
  // If smallest is the ending vertex, we are done, build up path to return at the end.
  // If smallest exists or distance of smallest (key) is not inifinity:
  // Iterate through all neighbors of the smallest vertex, store each neighbor as nextNode.
  // Calculate new distances to neighboring nodes by adding the smallest vertex's value in distances object to nextNode's weight.
  // Update the smallest distance to nextNeighbor (neighbor's node value, which is the vertex).
  // Update previous vertex to the nextNeighbor, which is the smallest vertex.
  // Update the value of nextNeighbor to priority queue (nodes), val is nextNeighbor, priority is candidate (distance).
  Dijkstra(start, finish) {
    if (this.adjacencyList[start] && this.adjacencyList[finish]) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [];
      let smallest;
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
        }
        previous[vertex] = null;
      }
      while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
          path.push(smallest);
          while (previous[smallest]) {
            smallest = previous[smallest];
            path.unshift(smallest);
          }
          break;
        }
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in this.adjacencyList[smallest]) {
            let nextNode = this.adjacencyList[smallest][neighbor];
            let candidate = distances[smallest] + nextNode.weight;
            let nextNeighbor = nextNode.node;
            if (candidate < distances[nextNeighbor]) {
              distances[nextNeighbor] = candidate;
              previous[nextNeighbor] = smallest;
              nodes.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
      return path;
    } else {
      return undefined;
    }
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// "A":  [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }]
// "B":  [{ node: 'A', weight: 4 }, { node: 'E', weight: 3 }]
// "C":  [{ node: 'A', weight: 2 }, { node: 'D', weight: 2 }, { node: 'F', weight: 4 }]
// "D":  [{ node: 'C', weight: 2 }, { node: 'E', weight: 3 }, { node: 'F', weight: 1 }]
// "E":  [{ node: 'B', weight: 3 }, { node: 'D', weight: 3 }, { node: 'F', weight: 1 }]
// "F":  [{ node: 'C', weight: 4 }, { node: 'D', weight: 1 }, { node: 'E', weight: 1 }]
console.log(graph.adjacencyList);

// Find the shortest path from vertex "A" to vertex "E".
// nodes: { 'A': 0 }
// distances: { 'A': 0, 'B': Infinity, 'C': Infinity, 'D': Infinity, 'E': Infinity, 'F': Infinity }
// previous: { 'A': null, 'B': 'null', 'C': null, 'D': null, 'E': null, 'F': null }
// smallest = 'A':
// nextNode = { node: 'B' , weight: 4 }, candidate = 0 + 4 = 4, nextNeighbor = 'B'.  4 < Infinity, so do the following:
// Update distances key-value pair to { 'B': 4 }, update previous key-value pair to { 'B': 'A' }, push { 'B', 4 } into nodes.
// nextNode = { node: 'C' , weight: 2 }, candidate = 0 + 2 = 2, nextNeighbor = 'C'.  2 < Infinity, so do the following:
// Update distances key-value pair to { 'C': 2 }, update previous key-value pair to { 'C': 'A' }, push { 'C', 2 } into nodes.
// nodes: { 'C': 2, 'B': 4 }
// distances: { 'A': 0, 'B': 4, 'C': 2, 'D': Infinity, 'E': Infinity, 'F': Infinity }
// previous: { 'A': 0, 'B': 'A', 'C': 'A', 'D': null, 'E': null, 'F': null }
// smallest = 'C':
// nextNode = { node: 'D' , weight: 2 }, candidate = 2 + 2 = 4, nextNeighbor = 'D'.  4 < Infinity, so do the following:
// Update distances key-value pair to { 'D': 4 }, update previous key-value pair to { 'D': 'C' }, push { 'D', 4 } into nodes.
// nextNode = { node: 'F' , weight: 4 }, candidate = 4 + 2 = 6, nextNeighbor = 'F'.  6 < Infinity, so do the following:
// Update distances key-value pair to { 'F': 6 }, update previous key-value pair to { 'F': 'C' }, push { 'F', 6 } into nodes.
// nodes: { 'B': 4, 'D': 4, 'F': 6 }
// distances: { 'A': 0, 'B': 4, 'C': 2, 'D': 4, 'E': Infinity, 'F': 6 }
// previous: { 'A': 0, 'B': 'A', 'C': 'A', 'D': 'C', 'E': null, 'F': 'C' }
// smallest = 'B':
// nextNode = { node: 'E' , weight: 3 }, candidate = 4 + 3 = 7, nextNeighbor = 'E'.  7 < Infinity, so do the following:
// Update distances key-value pair to { 'E': 7 }, update previous key-value pair to { 'E': 'B' }, push { 'E', 7 } into nodes.
// nodes: { 'D': 4, 'F': 6, 'E': 7 }
// distances: { 'A': 0, 'B': 4, 'C': 2, 'D': 4, 'E': 7, 'F': 6 }
// previous: { 'A': 0, 'B': 'A', 'C': 'A', 'D': 'C', 'E': 'B', 'F': 'C' }
// smallest = 'D':
// nextNode = { node: 'E' , weight: 3 }, candidate = 4 + 3 = 7, nextNeighbor = 'E'.  7 < 7 is false.
// nextNode = { node: 'F' , weight: 1 }, candidate = 4 + 1 = 5, nextNeighbor = 'F'.  5 < 6 is true.
// Update distances key-value pair to { 'F': 5 }, update previous key-value pair to { 'F': 'D' }, push { 'F', 5 } into nodes.
// nodes: { 'F': 5, 'E': 7 }
// distances: { 'A': 0, 'B': 4, 'C': 2, 'D': 4, 'E': 7, 'F': 5 }
// previous: { 'A': 0, 'B': 'A', 'C': 'A', 'D': 'C', 'E': 'B', 'F': 'D' }
// smallest = 'F'
// nextNode = { 'node: 'E', weight = 1 }, candate = 5 + 1 = 6, nextNeighbor = 'E'.  6 < 7, so do the following:
// Update distances key-value pair to { 'E': 6 }, update previous key-value pair to { 'E': 'F' }, push { 'E', 6 } into nodes.
// nodes: { 'E': 6 }
// distances: { 'A': 0, 'B': 4, 'C': 2, 'D': 4, 'E': 6, 'F': 5 }
// previous: { 'A': 0, 'B': 'A', 'C': 'A', 'D': 'C', 'E': 'F', 'F': 'D' }
// smallest = 'E', smallest = finish:
// path = ['E'], previous['E'] = ['F'], smallest = 'F'.
// path = ['F', 'E'], previous['F'] = ['D'], smallest = 'D'.
// path = ['D', 'F', 'E'], previous['D'] = ['C'], smallest = 'C'.
// path = ['C', 'D', 'F', 'E'], previous['C'] = ['A'], smallest = 'A'.
// path = ['A', 'C', 'D', 'F', 'E'], break out of while loop.
// Return ['A', 'C', 'D', 'F', 'E'].
console.log(graph.Dijkstra("A", "E"));
