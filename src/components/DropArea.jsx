import React, { useRef, useState } from "react";
import "./DropArea.css";
import uploadImg from "../assets/upload.svg";

const DropArea = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef(null);

  const handleDrapOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFiles(files);
  };

  const handleUpload = () => {};

  if (files)
    return (
      <div className="upload">
        <ul>
          {Array.from(files).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={handleUpload}>Upload</button>
          <button onClick={() => setFiles(null)}>Cancel</button>
        </div>
      </div>
    );

  return (
    <>
      {!files && (
        <div
          className="drop-area-container dropzone"
          onDragOver={handleDrapOver}
          onDrop={handleDrop}>
          <div className="drop_circle">
            <div
              className="drop_circle_inside"
              onClick={() => inputRef.current.click()}>
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                ref={inputRef}
              />
              <img src={uploadImg} alt="upload" />
              <p className="drop_para">Drag and Drop your MES mesh here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropArea;
