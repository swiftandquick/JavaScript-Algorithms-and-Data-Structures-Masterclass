class Graph {
  // adjacencyList starts off as an empty object.
  constructor() {
    this.adjacencyList = {};
  }
  // If the vertex doesn't exist, create the vertex, the key is the vertex, the value is the empty array.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // Iterate the while loop while the vertex's value (array) is not empty.
  // Remove the last item from the vertex's array, and store it into a variable called adjacentVertex.
  // Invoke removeEdge() to remove the edge between vertex and adjacentVertex, so vertex no longer shows up in adjacentVertex's array.
  // Delete the vertex from the adjacencyList object.
  removeVertex(vertex) {
    if (vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  // If v1 and v2 exist in adjacencyList, push v2 in v1's array, push v1 in v2's array.
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  // Remove v2 from v1's array, remove v1 from v2's array.
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }
  // result stores the vertex in traversal order, it's initially an empty array.
  // visited is an object that contains the visited vertices.
  // Invoke helper function (DFS) with the starting vertex (start).
  // Return null if if the vertex is empty.
  // Otherwise, add the key-value into the visited object, key is the vertex, value is true.
  // Add the vertex at the end of the result array.
  // Check the neighbor nodes of the vertex, recursive invoke DFS for neighbor vertices that aren't visited.
  DFSRecursive(start) {
    if (this.adjacencyList[start]) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      (function DFS(vertex) {
        if (!vertex) {
          return null;
        }
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return DFS(neighbor);
          }
        });
      })(start);
      return result;
    } else {
      return undefined;
    }
  }
  // Set the stack initially equals the starting vertex.
  // result stores the vertex in traversal order, it's initially an empty array.
  // visited is an object that contains the visited vertices.
  // While there's something in our stack, iterate the while loop.
  // Remove the last index from the stack array, store it in the variable currentVertex.
  // Push the currentVertex into the result array, which is initially the starting vertex.
  // Use forEach to traverse each array value in the currentVertex array's value.
  // If the neighbor isn't in the visited vertex, add the key-value pair into the visited object, key is neighbor, value is true.
  // Push the neighbor into the end of the stack array, so in next while loop iteration, the neighbor became the currentVertex,
  // which will be removed from the stack array and added to the result array.
  DFSIterative(start) {
    if (this.adjacencyList[start]) {
      const stack = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
      return result;
    } else {
      return undefined;
    }
  }
  // Set the queue initially equals the starting vertex.
  // result stores the vertex in traversal order, it's initially an empty array.
  // visited is an object that contains the visited vertices.
  // Add the key-value pairs into visited object, start is key, true is value.
  // While there's something in our queue, iterate the while loop.
  // Remove the first element from the queue, then store it in currentVertex variable, then push that variable into result array.
  // Use forEach to traverse each array value in the currentVertex array's value.
  // If the neighbor isn't in the visited vertex, add the key-value pair into the visited object, key is neighbor, value is true.
  // Push the neighbor into the end of the queue array.
  BFS(start) {
    if (this.adjacencyList[start]) {
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    } else {
      return undefined;
    }
  }
}

// Create a new object from Graph class.
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// 'A':  ['B', 'C']
// 'B':  ['A', 'D']
// 'C':  ['A', 'E']
// 'D':  ['B', 'E', 'F']
// 'E':  ['C', 'D', 'F']
// 'F':  ['D', 'E']
console.log(graph.adjacencyList);

// result = ['A'], visited = { 'A': true }
// A's neighbors are 'B' and 'C', since 'B' is in index 0, DFS('B') is invoked.
// results = ['A', 'B'], visited = { 'A': true, 'B': true }
// B's neighbors are 'A' and 'D', since 'A' is visited, next index is 'D', invoke DFS('D').
// results = ['A', 'B', 'D'], visited = { 'A': true, 'B': true, 'D': true }
// D's neighbors are 'B', 'E', and 'F', 'B' is visited, next index is 'E', invoke DFS('E').
// results = ['A', 'B', 'D', 'E'], visited = { 'A': true, 'B': true, 'D': true, 'E': true }
// E's neighbors are 'C', 'D', and 'F', since 'C' is in index 0 and is not visited, invoke DFS('C').
// results = ['A', 'B', 'D', 'E', 'C'], visited = { 'A': true, 'B': true, 'D': true, 'E': true, 'C': true }
// C's neighbors are 'A' and 'E', both are already visited, go back to 'E'.
// E's neighbors are 'C', 'D', and 'F', 'C' and 'D' are visited, invoke DFS('F').
// results = ['A', 'B', 'D', 'E', 'C', 'F'], visited = { 'A': true, 'B': true, 'D': true, 'E': true, 'C': true, 'F': true }
// Return ['A', 'B', 'D', 'E', 'C', 'F'].
console.log(graph.DFSRecursive("A"));

// result = ['A'], visited = { 'A': true }, stack = [].
// A's neighbors are 'B' and 'C', neither are visited, both are added into the stack, stack = ['B', 'C'], set 'B' and 'C' to visited.
// Last element of the stack is popped, which is 'C', 'C' is then added to result.
// results = ['A', 'C'], visited = {'A': true, 'B': true, 'C': true}, stack = ['B'].
// C's neighbors are 'A' and 'E', 'A' is visited, add 'E' onto the stack, stack = ['B', 'E'], set 'E' visited.
// Last element of the stack is popped, which is 'E', 'E' is then added to result.
// results = ['A', 'C', 'E'], visited = {'A': true, 'B': true, 'C': true, 'E': true }, stack = ['B'].
// E's neighbors are 'C', 'D', and 'F', 'C' is visited, added 'D' and 'F' onto the stack, stack = ['B', 'D', 'F'], set 'D' and 'F' to visited.
// results = ['A', 'C', 'E'], visited = {'A': true, 'B': true, 'C': true, 'E': true, 'D': true, 'F': true }, stack = ['B', 'D', 'F'].
// Last element of the stack is popped, which is 'F', 'F' is then added to result.
// results = ['A', 'C', 'E', 'F'], visited = {'A': true, 'B': true, 'C': true, 'E': true }, stack = ['B', 'D'].
// There's no unvisited neighbor for F.
// Last element of the stack is popped, which is 'D', 'D' is then added to result.
// results = ['A', 'C', 'E', 'F', 'D'], visited = {'A': true, 'B': true, 'C': true, 'E': true }, stack = ['B'].
// There's no unvisited neighbor for D.
// Last element of the stack is popped, which is 'B', 'B' is then added to result.
// results = ['A', 'C', 'E', 'F', 'D', 'B'], visited = {'A': true, 'B': true, 'C': true, 'E': true }, stack = [].
// stack is now empty, exit out of the while loop.
// Return ['A', 'C', 'E', 'F', 'D', 'B'].
console.log(graph.DFSIterative("A"));

// result = ['A'], visited = { 'A': true }, queue = [].
// A's neighbors are 'B' and 'C', neither are visited, both are added into the queue, queue = ['B', 'C'], set 'B' and 'C' to visited.
// Remove the first element from queue, which is 'B', then add it to result array.
// result = ['A', 'B'], visited = { 'A': true, 'B': true, 'C': true }, queue = ['C'].
// B's neighbors are 'A' and 'D', 'A' is visited, add 'D' into the queue, queue = ['C', 'D'], set 'D' to visited.
// Remove the first element from queue, which is 'C', then add it to result array.
// result = ['A', 'B', 'C'], visited = { 'A': true, 'B': true, 'C': true, 'D': true }, queue = ['D'].
// C's neighbors are 'A' and 'E', 'A' is visited, add 'E' into the queue, queue = ['D', 'E'], set 'E' to visited.
// Remove the first element from queue, which is 'D', then add it to result array.
// result = ['A', 'B', 'C', 'D'], visited = { 'A': true, 'B': true, 'C': true, 'D': true, 'E': true }, queue = ['E'].
// D's neighbors are 'B', 'E', and 'F', 'B' and 'E' are visited, add 'F' into the queue, queue = ['E', 'F'], set 'F' to visited.
// Remove the first element from queue, which is 'E', then add it to result array.
// result = ['A', 'B', 'C', 'D', 'E'], visited = { 'A': true, 'B': true, 'C': true, 'D': true, 'E': true, 'F': true }, queue = ['F'].
// E's neighbors are all visited.
// Remove the first element from queue, which is 'F', then add it to result array.
// result = ['A', 'B', 'C', 'D', 'E', 'F'], visited = { 'A': true, 'B': true, 'C': true, 'D': true, 'E': true, 'F': true }, queue = [].
// queue is now empty, exit out of while loop.
// Return ['A', 'B', 'C', 'D', 'E', 'F'].
console.log(graph.BFS("A"));
