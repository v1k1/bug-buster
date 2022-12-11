
import { Graph } from "./graph/graph";
import { MermaidGraphWriter } from "./graph/mermaid_writer";
import { extractMochaTests } from "./mocha_test_extractor";
import { parseTSfile } from "./parser";

const fileName = process.argv[2]
console.log(`the file is ${fileName}`);

const parsedSource = parseTSfile(fileName);

const graph: Graph = new Graph();
extractMochaTests(parsedSource, graph);

const graphWriter = new MermaidGraphWriter("./mermaid.graph");
graphWriter.write(graph);