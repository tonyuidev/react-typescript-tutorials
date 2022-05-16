import React from "react";
import "./App.css";
import UseReducerComponent from "./components/UseReducerComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>useState</h1>
        <UseStateComponent />
      </div>
      <div className="container">
        <h1>useReducer</h1>
        <UseReducerComponent />
      </div>
    </div>
  );
}

export default App;
