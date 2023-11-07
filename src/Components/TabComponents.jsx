import React from "react";

export default function TabComponents(props) {
  return (
    <div>
      <li>
        <button>{props.children}</button>
      </li>
    </div>
  );
}
