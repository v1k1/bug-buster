import * as ts from "typescript";
import { Graph, makeVertex, Vertex } from "./graph/graph";

export function extractMochaTests(sourceFile: ts.SourceFile, graph: Graph) {
    let id = 0;
    const getId = (): string => {
        return `v${id++}`;
    }
    const root: Vertex = makeVertex(getId());
    graph.setRoot(root.id);
    visitNode(sourceFile, root);

    function visitNode(node: ts.Node, parent: Vertex) {
        let currentVertex: Vertex;
        if(node.kind == ts.SyntaxKind.CallExpression) {
            let callExpression: ts.CallExpression = node as any;
            const expression: ts.Expression = callExpression.arguments[0];
            const firstToken = callExpression.getFirstToken()?.getText();
            if (firstToken === "describe"  || firstToken === "it") {
                currentVertex = makeVertex(getId(), {
                    text: expression.getText(),
                    token: firstToken
                });
                console.log(`adding link ${parent.id}, ${currentVertex.id}`);
                graph.addLink(parent, currentVertex);
            } else {
                currentVertex = parent;
            }
        } else {
            currentVertex = parent;
        }
        ts.forEachChild(node, (child: ts.Node) => {
            visitNode(child, currentVertex)}
        );
    }
}