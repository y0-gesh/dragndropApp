import React, { useEffect, useRef } from "react";
import "./App.css";
import DropArea from "./components/DropArea";
import ParaView from "./components/ParaView";

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
    const maximizeApp = () => {
      window.api.send("toggleMaximizeApp");
    };

    if (maximizeBtn) {
      maximizeBtn.addEventListener("click", maximizeApp);
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
        maximizeBtn.removeEventListener("click", maximizeApp);
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
        <div className="drag-header"></div>
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
      <div className="app_container">
        <div className="drop_area">
          <DropArea />
        </div>
        <div className="para_view">
          <ParaView />
        </div>
      </div>
    </div>
  );
}

export default App;
