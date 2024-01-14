function WeightedGraph() {
  Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({ node: vertex2, weight });
  this.adjacencyList[vertex2].push({ node: vertex1, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, finish) {
  var previous = {};
  var distances = {};
  var path = [];
  var smallest;
  var nodes = new PriorityQueue();
  for (let vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }
  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    } else {
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
  return path.concat(smallest).reverse();
};

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;
  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
