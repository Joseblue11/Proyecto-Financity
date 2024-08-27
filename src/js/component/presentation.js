import React from "react";
import "../../styles/presentation.css";

export const Presentation = () => {
  return (
    <div className="presentation container-fluid p-5 d-flex" id="Inicio">
      <div className="leftSide">
        <div className="Prestext text-center">
          {" "}
          <div className="Prestext-body">
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
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="Prestext-image">
          {" "}
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366513/portrait-cute-boy-showing-graph-his-office-desk_qg39ji.jpg"
            className="card-img-top img-fluid"
            style={{width:"300px"}}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
