import React from "react";
import "./ParaView.css";
import AvkalanLabs from "../assets/avkalanlabsjpg.jpg";

const ParaView = () => {
  return (
    <div className="para-view-container">
      <div className="page_container">
        <div className="page_title">
          <h1 className="heading">MED2XDMF</h1>
          <img src={AvkalanLabs} className="logo_avkalan" alt="Avkalan Labs" />
        </div>
        <p className="">You can open the converted files in ParaView</p>
        <div className="in_out_container">
          <div className="input_container">
            <label htmlFor="">Input file</label>
            <ul>
              <li className="input_list">beam.med</li>
            </ul>
          </div>
          <div className="out_container">
            <label htmlFor="">Output files</label>
            <ul>
              <li className="output_list">mesh.xdmf</li>
              <li className="output_list">points.xdmf</li>
              <li className="output_list">lines.xdmf</li>
              <li className="output_list">triangles.xdmf</li>
            </ul>
          </div>
        </div>
        <div className="para_button">
          <button type="button" className="bn4 cancel-btn">
            Cancel
          </button>
          <button type="button" className="bn4 para-btn">
            Open in ParaView
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParaView;
