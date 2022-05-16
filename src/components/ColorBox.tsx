import React from "react";

function ColorBox(props: { color: string }) {
  return (
    <div className="color-box" style={{ backgroundColor: props.color }}>
      <span>{props.color}</span>
    </div>
  );
}

export default ColorBox;