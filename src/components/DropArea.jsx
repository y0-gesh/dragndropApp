import React, { useRef, useState } from "react";
import "./DropArea.css";
import Loader from "./loader/Loader.js";
import uploadImg from "../assets/upload.svg";
import ParaView from "./ParaView";
import { useStateContext } from "../context/ContextProvider";

import closeWindow from "../assets/close_window.svg";

const DropArea = () => {
  const { files, setFiles } = useStateContext();
  const inputRef = useRef(null);

  const [loading, setLoading] = useState(false);

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
        <div
          className="drop_area_container"
          onDragOver={handleDrapOver}
          onDrop={handleDrop}>
          <div className="navbar_window">
            <div className="navigation_btn1">
              <span className="close_icon" onClick={handleClose}>
                <img src={closeWindow} className="close_window" alt="close" />
              </span>
            </div>
            <div className="dragable_area"></div>
          </div>
          <div className="drop_circle" onClick={() => inputRef.current.click()}>
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

export default DropArea;
