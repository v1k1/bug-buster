export class Graph {
    root?: string;
    adjList: Map<string, Vertex[]> = new Map();
    vertices: Map<string, Vertex> = new Map();
    addLink(parent: Vertex, child: Vertex): void {
        if(!this.adjList.has(parent.id)) this.adjList.set(parent.id, []);
        this.adjList.get(parent.id)?.push(child);
        this.vertices.set(parent.id, parent);
        this.vertices.set(child.id, child);
    }
    getRoot(): string | undefined {
        return this.root;
    }
    getVertex(id: string): Vertex | undefined {
        return this.vertices.get(id)
    }
    setRoot(r: string) {
        this.root = r;
        this.adjList.set(r, []);
    }
}

export type Vertex = {
    id: string,
    attributes: {
        [key: string]: any
    }
}

export function makeVertex(id: string, attributes: { [key: string]: any} = {}): Vertex {
    return {
        id,
        attributes
    }
}