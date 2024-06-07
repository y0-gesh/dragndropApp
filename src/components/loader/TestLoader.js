import React, { useRef, useState, useEffect } from "react";
// import "./Test.css";
import uploadImg from "../../assets/upload.svg";
import "./TestCircle.css";
import ParaView from "../ParaView";
import { useStateContext } from "../../context/ContextProvider";
import closeWindow from "../../assets/close_window.svg";
import Loader from "../loader/Loader";

const TestLoader = () => {
  const [loading, setLoading] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => {
  //       if (prevCounter === 100) {
  //         clearInterval(interval);
  //         return prevCounter;
  //       }
  //       return prevCounter + 1;
  //     });
  //   }, 30);
  //   return () => clearInterval(interval);
  // }, []);

  const { files, setFiles } = useStateContext();
  const inputRef = useRef(null);

  const handleDrapOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFiles(files);
    }, 3000);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFiles(files);
    }, 3000);
  };

  // const handleUpload = () => {};

  const handleClose = () => {
    window.api.send("closeApp");
  };

  return (
    <>
      {!files && (
        <div className="drop_area_container" onDragOver={handleDrapOver} onDrop={handleDrop}>
          <div className="navbar_window">
            <div className="navigation_btn1">
              <span className="close_icon" onClick={handleClose}>
                <img src={closeWindow} className="close_window" alt="close" />
              </span>
            </div>
            <div className="dragable_area"></div>
          </div>
          <div
            className={`c-p ${loading ? "animate_out" : ""}`}
            onClick={() => inputRef.current.click()}>
            <div className="cc"></div>
            <div className={`in_c ${loading ? "animate_in" : ""}`}>
              {loading ? (
                <Loader />
              ) : (
                <div className="drop_circle_inside">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    hidden
                    ref={inputRef}
                  />
                  <img src={uploadImg} className="upload_icon" alt="upload" />
                  <p className="drop_para">Drag and Drop your MES mesh here</p>
                </div>
              )}
            </div>
            <div className="cd"></div>
          </div>
        </div>
      )}
      {files && (
        <div className="para_view">
          <ParaView files={files} />
        </div>
      )}
    </>
  );
};

export default TestLoader;
