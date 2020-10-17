import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./components/LikeButton";
import useMousePosition from "./hooks/useMousePosition";
// import MouseTracker from "./components/MouseTracker";

function App() {
  const positions = useMousePosition();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          X: {positions.x}, Y: {positions.y}
        </p>
        <LikeButton />
        {/* <MouseTracker /> */}
      </header>
    </div>
  );
}

export default App;
