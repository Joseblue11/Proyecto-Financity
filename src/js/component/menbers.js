import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHandshake,
  faScaleBalanced,
  faChartLine,
  faGraduationCap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faLightbulb } from "@fortawesome/free-regular-svg-icons";

export const Members = () => {
  return (
    <div className="Members">
      <h1>Ciudadanos</h1>
      <div className="d-flex">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366513/portrait-cute-boy-showing-graph-his-office-desk_qg39ji.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div>
          <div className="Valores pt-5">
            <h3 className="Titulo-Valores">
              <span style={{ color: "#0066CC" }}>Va</span>
              <span style={{ color: "#0099FF" }}>l</span>
              <span style={{ color: "#FFCC00" }}>o</span>
              <span style={{ color: "#FF9933" }}>re</span>
              <span style={{ color: "#0066CC" }}>s</span>
            </h3>
            <div className="Card">
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(130, 226, 255, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Educación:
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(243, 255, 130, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faRocket}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Empoderamiento
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: "  rgba(255, 201, 130, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faHandshake}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Solidaridad
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: "  rgba(243, 255, 130, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faScaleBalanced}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Responsabilidad
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(255, 201, 130, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faGem}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Honestidad
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(130, 226, 255, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Futuro
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(130, 226, 255, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Innovación:
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card text-center mb-3"
                style={{
                  width: "18rem",
                  background: " rgba(130, 226, 255, 0.582)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="card-body">
                  <div>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ width: "3.8rem", height: "3.8rem" }}
                    />
                  </div>
                  <div className="contenido">
                    <h5 className="card-title pt-2 d-flex justify-content-center">
                      Inclusión:
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
