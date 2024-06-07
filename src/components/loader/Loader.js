import React, { useState, useEffect } from "react";
// import "./Loader.css";
import "./TestCircle.css";
import uploadImg from "../../assets/upload.svg";

function Loader() {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

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
    <div>
      <div> {counter}% </div>
    </div>
  );
}

export default Loader;
