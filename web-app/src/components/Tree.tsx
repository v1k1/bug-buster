import * as React from "react";
import "./tree.css";
// or
export const Tree = () => {
  function getClassName(open: boolean) {
    return open ? "p-1 bi bi-chevron-right" : "p-1 bi bi-chevron-down";
  }

  function getIndentation(level: number) {
    return `bug-row-margin-${level}`
  }

  return (
    <div>
      <div className="col-4">
        <div className="bug-row">
          <i className={getClassName(true)} />
          <div className="bug-content">private</div>
          <i className="bug-row-menu bi bi-plus" />
        </div>
        <div className={`bug-row`} style={{paddingLeft: '1em'}}>
          <i className={`${getClassName(true)}`} />
          <div className="bug-content">private</div>
          <i className="bug-row-menu bi bi-plus" />
        </div>
        <div className="bug-row" style={{paddingLeft: '2em'}}>
          <i className={getClassName(false)} />
          <div className="bug-content">private</div>
          <i className="bug-row-menu bi bi-plus" />
        </div>
        <div className="bug-row" style={{paddingLeft: '3em'}}>
          <i className={getClassName(true)} />
          <div className="bug-content">private</div>
          <i className="bug-row-menu bi bi-plus" />
        </div>
        <div className="bug-row">
          <i className={getClassName(true)} />
          <div className="bug-content">private</div>
          <i className="bug-row-menu bi bi-plus" />
        </div>
      </div>
    </div>
  );
};
