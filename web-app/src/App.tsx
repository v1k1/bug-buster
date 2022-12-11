import React from 'react';
import { Tree, TreeView } from './components/TreeView';

const tree: Tree = {
  root: {
    id: "a",
    children: ["b", "c"],
    attributes: {}
  },
  vertices: {
    "a": {
      id: "a",
      children: ["b", "c"],
      attributes: {}
    },
    "b": {
      id: "b",
      children: [],
      attributes: {}
    },
    "c": {
      id: "c",
      children: [],
      attributes: {}
    }
  }
}

function App() {
  return (
    <TreeView tree={tree} level={0} vertex={"a"}></TreeView>
  );
}

export default App;
