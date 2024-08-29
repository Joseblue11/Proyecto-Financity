import React from "react";
import "../../styles/presentation.css";

export const Presentation = () => {
  return (
    <div className="presentation container-fluid p-5" id="Inicio">
      <div className="leftSide">
        <h2>Presentacion</h2>
        <h3 className="text-1">Desktop</h3>
        <h3 className="text-2">Laptop</h3>
        <h3 className="text-3">Tablet</h3>
        <h3 className="text-4">big Smartphone</h3>
        <h3 className="text-5">Smartphone</h3>
        <div className="Prestext text-center">
          {" "}
          {/* <div className="Prestext-body">
            <h3 className="Prestext-title">
              La primera ciudad financiera para niños, niñas y adolescentes
            </h3>
            <p className="Prestext-text">
              Impulsamos el desarrollo de habilidades para la vida en jóvenes
              ¡No es magia, es Finnancity!
            </p>
            <a href="#" className="btn btn-primary">
              Ver mas
            </a>
          </div> */}
        </div>
      </div>
      <div className="rightSide">
        {/* <div className="Prestext-image">
          {" "}
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366513/portrait-cute-boy-showing-graph-his-office-desk_qg39ji.jpg"
            className="card-img-top img-fluid"
            style={{width:"300px"}}
            alt="..."
          />
        </div> */}
      </div>
    </div>
  );
};
