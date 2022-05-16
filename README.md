# React useState, useReducer tutorial
## Installation

**Lets use Create React App to create our react project utilizing typescript and install react-colorful**

    npx create-react-app use-state-reducer-ts --template typescript
    
    cd use-state-reducer-ts
    
    npm i react-colorful

    
**Lets create the files we need**

    mkdir components
    
    touch ./components/UseStateComponent.tsx ./components/UseReducerComponent.tsx
    
    touch ./components/ColorBox.tsx ./components/ColorInterface.tsx


**Lets start our project**

    npm start

**Open UseStateComponent**

    import  React, { useState } from  "react";
    import { HexColorPicker } from  "react-colorful";

    function  UseStateComponent() {
    
	    return (
	    
	    );
    }
    export  default  UseStateComponent;

**Add colors states**

    const [color1, setColor1] =  useState<string>("#00000");
    const [color2, setColor2] =  useState<string>("#00000");
    const [color3, setColor3] =  useState<string>("#00000");
    const [color4, setColor4] =  useState<string>("#00000");

**Create array of colors**

    const  colors  = [
    { title: "Color 1", color: color1, setter: setColor1 },
    { title: "Color 2", color: color2, setter: setColor2 },
    { title: "Color 3", color: color3, setter: setColor3 },
    { title: "Color 4", color: color4, setter: setColor4 },
    ];

    return (
    <div className="flex">
	    {colors.map((color,index) => (
	    <div className="flex-color-box" key={index}>
			<ColorBox  color={color.color}  />
		    <HexColorPicker color={color.color} onChange={color.setter}  />
	    </div>
    ))}
    </div>
    );

**Create color box component**

    import  React  from  "react";
    function  ColorBox(props: { color:  string }) {
    
    return (
	    <div  className="color-box"  style={{ backgroundColor: props.color }}>
		    <span>{props.color}</span>
	    </div>
    );
    }

    export  default  ColorBox;



**Open UseReducerComponent**

    import  React, { useReducer } from  "react";
    import { HexColorPicker } from  "react-colorful";
    import  ColorBox  from  "./ColorBox";
    import { Colors, Action } from  "./ColorInterface";
    
    function  UseReducerComponent() {
  
	    return (
	    
	    )
    }
    
    export  default  UseReducerComponent;


**Lets set an initial state for the colors**

    const  initialState:  Colors  = {
	    color1: "#000",
	    color2: "#000",
	    color3: "#000",
	    color4: "#000",
    };

