import React, { useReducer } from "react";
import { HexColorPicker } from "react-colorful";
import ColorBox from "./ColorBox";
import { Colors, Action } from "./ColorInterface";

function reducer(state: Colors, action: Action) {
  switch (action.type) {
    case "color1":
      return { ...state, color1: action.value };
    case "color2":
      return { ...state, color2: action.value };
    case "color3":
      return { ...state, color3: action.value };
    case "color4":
      return { ...state, color4: action.value };
    default:
      throw new Error();
  }
}

function UseReducerComponent() {
  const initialState: Colors = {
    color1: "#000",
    color2: "#000",
    color3: "#000",
    color4: "#000",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const colors = [
    { title: "Color 1", color: state.color1, setter: "color1" },
    { title: "Color 2", color: state.color2, setter: "color2" },
    { title: "Color 3", color: state.color3, setter: "color3" },
    { title: "Color 4", color: state.color4, setter: "color4" },
  ];

  return (
    <div className="flex">
      {colors.map((color) => (
        <div className="flex-color-box" key={color.setter}>
          <ColorBox color={color.color} />
          <HexColorPicker
            color={color.color}
            onChange={(e) => {
              dispatch({ type: color.setter, value: e });
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default UseReducerComponent;
