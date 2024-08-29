import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHandshake,
  faScaleBalanced,
  faChartLine,
  faGraduationCap,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faLightbulb} from "@fortawesome/free-regular-svg-icons";
import "../../styles/identity.css"

export const Identity = () => {
  return (
    <div className="identity">
      <h1> Identidad: Mision,Vision y Valores</h1>
      {/* <div className="MV d-flex container-fluid pt-5">
        <div className="card-mv1 mb-3 p-2" style={{ maxWidth: 1000 }}>
          <div className="row g-0">
            <div className="container-fluid">
              <div>
                <h2 className="titulo-mv">
                  <span style={{ color: "#0066CC" }}>Mi</span>
                  <span style={{ color: "#0099FF" }}>s</span>
                  <span style={{ color: "#FFCC00" }}>i</span>
                  <span style={{ color: "#FF9933" }}>o</span>
                  <span style={{ color: "#0066CC" }}>n</span>
                </h2>
                <p className="p-mv">
                  "Financity tiene como misión promover la educación financiera
                  en niños y adolescentes, brindándoles las herramientas y
                  conocimientos necesarios para tomar decisiones económicas
                  informadas y responsables a lo largo de su vida. Buscamos
                  fomentar una cultura financiera sólida en la sociedad y
                  contribuir al bienestar económico de las futuras
                  generaciones."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-mv2 mb-3 p-2" style={{ maxWidth: 1000 }}>
          <div className="row g-0">
            <div className="container-fluid">
              <div>
                <h2 className="titulo-mv">
                  <span style={{ color: "#0066CC" }}>Vi</span>
                  <span style={{ color: "#0099FF" }}>s</span>
                  <span style={{ color: "#FFCC00" }}>i</span>
                  <span style={{ color: "#FF9933" }}>o</span>
                  <span style={{ color: "#0066CC" }}>n</span>
                </h2>
                <p className="p-mv">
                  "Nuestra visión es convertirnos en la principal referencia en
                  educación financiera para niños y adolescentes en el Pais.
                  Queremos que todos los jóvenes tengan acceso a herramientas y
                  recursos que les permitan alcanzar sus metas financieras y
                  construir un futuro próspero."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Valores pt-5">
        <h3 className="Titulo-Valores">
          <span style={{ color: "#0066CC" }}>Va</span>
          <span style={{ color: "#0099FF" }}>l</span>
          <span style={{ color: "#FFCC00" }}>o</span>
          <span style={{ color: "#FF9933" }}>re</span>
          <span style={{ color: "#0066CC" }}>s</span>
        </h3>
        <div className="Card d-flex">
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
      </div> */}
    </div>
  );
};
