import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorBox from "./ColorBox";

function UseStateComponent() {

  console.log("Render UseStateCom")
  // rerenders on each change
  const [color1, setColor1] = useState<string>("#000000");
  const [color2, setColor2] = useState<string>("#000000");
  const [color3, setColor3] = useState<string>("#000000");
  const [color4, setColor4] = useState<string>("#000000");

  const colors = [
    { title: "Color 1", color: color1, setter: setColor1 },
    { title: "Color 2", color: color2, setter: setColor2 },
    { title: "Color 3", color: color3, setter: setColor3 },
    { title: "Color 4", color: color4, setter: setColor4 },
  ];
  
  
  return (
    <div className="flex">
      {colors.map((color,index) => (
        <div className="flex-color-box" key={index}>
          <ColorBox color={color.color} />
          <HexColorPicker color={color.color} onChange={color.setter} />
        </div>
      ))}
    </div>
  );
}

export default UseStateComponent;
