import React, { useState } from "react";
import "./SidebarCSS/Tree.css";

// TreeNode Component
const TreeNode = ({ node }) => {
  const { name, icon, children } = node;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree-node">
      <div className="tree-node-head">
        <div onClick={handleToggle} className="tnh-sec">
          <img src={icon} alt={name} />
          <p>{name}</p>
        </div>
        <div className="tree-arrow" onClick={handleToggle}>
          {isExpanded ? (
            <img src="./sb-up-arrow.svg" alt="arrow" />
          ) : (
            <img src="./sb-down-arrow.svg" alt="arrow" />
          )}
        </div>
      </div>
      {isExpanded && children && (
        <div className="tree-node-children">
          {children.map((child, index) => (
            <div key={index}>
              <p>{child.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Tree Component
const Tree = ({ data }) => {
  return (
    <div className="tree">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default Tree;
