import * as React from "react";
import { v4 } from 'uuid';
import "./tree.css";

export type Tree = {
    root: Vertex;
    vertices: {[key: string]: any}
}

export type Vertex = {
    id: string,
    children: string[],
    attributes: {[key: string]: any}
}

export const TreeView = (props: {tree: Tree, vertex: string, level: number}) => {
    console.log(`rendering vertex ${props.vertex}`);
    const [expanded, setExpanded] = React.useState(false);
    const currentPadding = `bug-row-padding-${props.level}`;
    const currentVertex: Vertex = props.tree.vertices[props.vertex];
    if(!currentVertex) return null;

    function getClassName() {
        return expanded ? "p-1 bi bi-chevron-down": "p-1 bi bi-chevron-right";
    }
    function toggelExpanded() {
        setExpanded(!expanded);
    }

    function addVertex() {
        const id = v4();
        currentVertex.children.push(id);
        props.tree.vertices[id] = {
            id: id,
            children: [],
            attributes: {}
        }
    }

    return(<>
        <div className={`${currentPadding} bug-row`}>
          <i onClick={toggelExpanded} className={getClassName()} />
          <div className="bug-content">{currentVertex.id}</div>
          <i onClick={addVertex} className="bug-row-menu bi bi-plus" />
        </div>
        {   
            expanded && currentVertex.children.map(child => 
                <TreeView key={child} vertex={child} tree={props.tree} level={props.level+1}/>
            ) 
        }
    </>)
}
