import React, { Children } from "react";
import "./Button.css";
export default function Button(onClick, Children) {
  return (
    <button className="save-button" onClick={onClick}>
      {Children}
    </button>
  );
}
