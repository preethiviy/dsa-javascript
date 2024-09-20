class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            return `${vertex1} is not on the graph. Add it first`;
        }
        if(!this.adjacencyList[vertex2]){
            return `${vertex2} is not on the graph. Add it first`;
        }

        if(!this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push(vertex2);
        }

        if(!this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            return `${vertex1} is not on the graph. Add it first`;
        }
        if(!this.adjacencyList[vertex2]){
            return `${vertex2} is not on the graph. Add it first`;
        }

        if(this.adjacencyList[vertex1].includes(vertex2)){
            const index = this.adjacencyList[vertex1].indexOf(vertex2);
            this.adjacencyList[vertex1].splice(index,1);
        }

        if(this.adjacencyList[vertex2].includes(vertex1)){
            const index = this.adjacencyList[vertex2].indexOf(vertex1);
            this.adjacencyList[vertex2].splice(index,1);
        }
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.adjacencyList);

// g.removeEdge("Dallas", "Aspen");

console.log(g.adjacencyList);