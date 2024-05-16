import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
// import "./components/appFunctions";

function App() {
  const minimizeBtnRef = useRef(null);
  const maximizeBtnRef = useRef(null); // Reference for the maximize button
  const closeBtnRef = useRef(null); // Reference for the close button

  useEffect(() => {
    const minimizeBtn = minimizeBtnRef.current;
    const maximizeBtn = maximizeBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (minimizeBtn) {
      minimizeBtn.addEventListener("click", () => {
        window.api.send("minimizeApp");
      });
    }
   
    if (maximizeBtn) {
      maximizeBtn.addEventListener("click", () => {
        window.api.send("toggleMaximizeApp");
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        window.api.send("closeApp");
      });
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      if (minimizeBtn) {
        minimizeBtn.removeEventListener("click", () => {
          window.api.send("minimizeApp");
        });
      }


      if (maximizeBtn) {
        maximizeBtn.removeEventListener("click", () => {
          window.api.send("toggleMaximizeApp");
        });
      }

      if (closeBtn) {
        closeBtn.removeEventListener("click", () => {
          window.api.send("closeApp");
        });
      }
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              React Documentation
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              React Community
            </a>
          </li>
        </ul>
        <div className="funcBtn">
          <button id="minimizeBtn" ref={minimizeBtnRef}>
            -
          </button>
          <button id="maximizeBtn" ref={maximizeBtnRef}>
            =
          </button>
          <button id="closeBtn" ref={closeBtnRef}>
            x
          </button>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
