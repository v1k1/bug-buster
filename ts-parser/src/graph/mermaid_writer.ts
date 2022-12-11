import { createWriteStream, WriteStream } from "fs";
import { Graph, Vertex } from "./graph";
import { GraphWriter } from "./graph_writer";

export class MermaidGraphWriter implements GraphWriter {
    readonly visited: Set<string>;
    constructor(readonly outputPath: string) {
        this.visited = new Set();
    }
    public write(graph: Graph): void {
        const stream = createWriteStream(this.outputPath);
        this.addHeader(stream);
        this.dfs(stream, graph);
        stream.close();
    }

    private dfs(stream: WriteStream, graph: Graph) {
        const root = graph.getRoot();
        
        if(root !== undefined) {
            const rootVertex = graph.getVertex(root);
            if(rootVertex === undefined) throw new Error(`Missing root vertex.`);
            graph.adjList.get(root)?.forEach(vertex => this.visit(stream, graph, vertex, rootVertex));
        }
        else console.log(`Missing root found.`);
    }

    private visit(stream: WriteStream, graph: Graph, current: Vertex, parent: Vertex) {

        stream.write(`  ${parent.id}[${parent.attributes.text}] --> ${current.id}[${current.attributes.text}]\n`);
        if(!this.visited.has(current.id)) {
            this.visited.add(current.id);
            graph.adjList.get(current.id)?.forEach(vertex => this.visit(stream, graph, vertex, current))
        }
    }

    private addHeader(stream: WriteStream) {
        stream.write("graph LR;\n");
    }
}