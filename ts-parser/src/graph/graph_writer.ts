import { Graph } from "./graph";

export interface GraphWriter {
    write: (graph: Graph) => void;
}