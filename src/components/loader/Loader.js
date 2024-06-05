import React, { useState, useEffect } from "react";
import "./Loader.css";

function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle"> {counter}% </div>
      </div>
    </div>
  );
}

export default Loader;
