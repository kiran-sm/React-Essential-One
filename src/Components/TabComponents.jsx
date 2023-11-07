import React from "react";
import "./tab.css";

export default function TabComponents(props, onSelect) {
  return (
    <li>
      <button onClick={onSelect}>{props.children}</button>
    </li>
  );
}
