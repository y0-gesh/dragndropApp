import React, { useEffect, useRef } from "react";
import "./App.css";
import DropArea from "./components/DropArea";
import ParaView from "./components/ParaView";
import minimizeWin from "./assets/minimize_window.svg";
import maximizeWin from "./assets/maximize_window.svg";
import closeWin from "./assets/close.svg";

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
    <div className="app">
      {/* <nav className="navbar">
        <div className="drag-header"></div>
        <div className="funcBtn">
          <button id="minimizeBtn" className="bn3637 bn38" ref={minimizeBtnRef}>
            <img src={minimizeWin} className="minimize_win" alt="minimize" />
          </button>
          <button id="maximizeBtn" ref={maximizeBtnRef}>
            <img src={maximizeWin} className="maximize_win" alt="maximize" />
          </button>
          <button id="closeBtn" ref={closeBtnRef}>
            <img src={closeWin} className="close_win" alt="close" />
          </button>
        </div>
      </nav> */}
      {/* <div className="dragable_area"></div> */}
        <div className="drop_area">
          <DropArea />
        </div>
      {/* <div className="app_container">
      </div> */}
    </div>
  );
}

export default App;
