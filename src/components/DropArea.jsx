import React, { useRef, useState } from "react";
import "./DropArea.css";
import uploadImg from "../assets/upload.svg";
import ParaView from "./ParaView";
import { useStateContext } from "../context/ContextProvider";

const DropArea = () => {
  const {files, setFiles} = useStateContext();
  const inputRef = useRef(null);

  const handleDrapOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFiles(files);
  };

  // const handleUpload = () => {};

  if (files)
    return (
      // <div className="drop-area-container dropzone">
      //   <div className="upload">
      //     <ul>
      //       {Array.from(files).map((file, index) => (
      //         <li key={index}>{file.name}</li>
      //       ))}
      //     </ul>
      //     <div className="actions">
      //       <button className="bn3" onClick={handleUpload}>Upload</button>
      //       <button className="bn3" onClick={() => setFiles(null)}>Cancel</button>
      //     </div>
      //   </div>
      // </div>
      <div className="para_view">
        <ParaView files={files} />
      </div>
    );

  return (
    <>
      {!files && (
        <div
          className="drop-area-container "
          onDragOver={handleDrapOver}
          onDrop={handleDrop}>
          <div className="drop_circle" onClick={() => inputRef.current.click()}>
            <div className="drop_circle_inside">
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                ref={inputRef}
              />
              <img src={uploadImg} className="upload_icon" alt="upload" />
              <p className="drop_para">Drag and Drop your MES mesh here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropArea;
