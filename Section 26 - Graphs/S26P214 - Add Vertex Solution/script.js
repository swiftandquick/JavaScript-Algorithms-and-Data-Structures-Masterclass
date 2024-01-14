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
}

// Create a new object from Graph class.
const graph = new Graph();

// Add a new vertices, "Dallas", "Tokyo", "Aspen", "Los Angeles", and "Hong Kong".
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");

// Add an edge between "Dallas" and "Tokyo", "Dallas" is in "Tokyo" array and vice versa.
graph.addEdge("Dallas", "Tokyo");

// Add an edge between "Dallas" and "Aspen", "Dallas" is in "Aspen" array and vice versa.
graph.addEdge("Dallas", "Aspen");

// Add an edge between "Los Angeles" and "Hong Kong", "Los Angeles" is in "Hong Kong" array and vice versa.
graph.addEdge("Los Angeles", "Hong Kong");

// Remove the edge between "Dallas" and "Aspen", "Dallas" is rem,oved from "Aspen" array and vice versa.
graph.removeEdge("Dallas", "Aspen");

// Remove "Hong Kong" from the adjacencyList object, remove the edge between "Hong Kong" and its adjacent vertices.
// "Los Angeles" has an edge connected to "Hong Kong", now the edge between them is removed, and "Hong Kong" is no longer in "Los Angeles" array.
graph.removeVertex("Hong Kong");

console.log(graph.adjacencyList);
