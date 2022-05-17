# A introduction to refactoring useState to useReducer hook


Written by: Tony St. Pierre
[https://tonyux.com](https://tonyux.com)
[https://linkedin.com/li/tonyux](https://linkedin.com/in/tonyux)

When building React apps the useState hook is one of the most used hooks to manage states within a functional component.

However, sometimes we have a “complex” state within our component that makes the useState function a bit redundant and hard to use. We can reduce the complexity of the state by utilizing React’s useReducer hook.
  

What you’ll learn:

-   The difference between useState and useReducer
    
	1.  What's a state?
    
	2.  What's a reducer and how it relates to useReducer
    
-   When to use useState over useReducer
    
-   General rules of states
    
-   Create a React Project refactoring useState to useReducer

## What’s the difference between useState and useReducer?

Before starting off let's define a state and a reducer. A state in React is a JavaScript object that represents information about the component's current situation. In this example we will be using color1, color2, color3 and color4 as our states.

A reducer in JavaScript takes two arguments, a state and an action. The reducer returns a new version of state, or the original state.


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

    const [color1, setColor1] =  useState<string>("#000000");
    const [color2, setColor2] =  useState<string>("#000000");
    const [color3, setColor3] =  useState<string>("#000000");
    const [color4, setColor4] =  useState<string>("#000000");

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
	    color1: "#000000",
	    color2: "#000000",
	    color3: "#000000",
	    color4: "#000000",
    };


**Lets build the reducer**

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
