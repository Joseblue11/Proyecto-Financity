import React from "react";
import "../../styles/programs.css";

export const Programs = () => {
  return (
    <div className="Programs" id="Programas">
      <h1>Programas</h1>
      <div className="Programs-Content">
        <div className="Programs-Part1">
          <h3 className="Members-title">Gabriel Heredia</h3>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366509/innovacion_gmppip.png"
            className="Members-image img-fluid pt-2"
            alt="..."
          />
          <p className="Members-text">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book.</p>
        </div>
        <div className="Programs-Part2">
        <h3 className="Members-title">Gabriel Heredia</h3>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366509/innovacion_gmppip.png"
            className="Members-image img-fluid pt-2"
            alt="..."
          />
          <p className="Members-text">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  );
};
