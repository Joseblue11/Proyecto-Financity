import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ps-4">
          <a className="navbar-brand"  href="#Inicio">
            <div className="Titulo-Nav">
              <h2 className="Titulo-Navbar">
                <span
                  class="letra"
                  style={{ color: "#0066CC", fontWeight: "bold" }}
                >
                  ¡S
                </span>
                <span
                  class="letra"
                  style={{ color: "#0099FF", fontWeight: "bold" }}
                >
                  o
                </span>
                <span
                  class="letra"
                  style={{ color: "#FFCC00", fontWeight: "bold" }}
                >
                  m
                </span>
                <span
                  class="letra"
                  style={{ color: "#FF9933", fontWeight: "bold" }}
                >
                  os
                </span>
                <span
                  class="letra"
                  style={{ color: "#0066CC", fontWeight: "bold" }}
                >
                  {" "}
                </span>{" "}
                <span
                  class="letra"
                  style={{ color: "#0066CC", fontWeight: "bold" }}
                >
                  Fi
                </span>
                <span
                  class="letra"
                  style={{ color: "#0099FF", fontWeight: "bold" }}
                >
                  n
                </span>
                <span
                  class="letra"
                  style={{ color: "#FFCC00", fontWeight: "bold" }}
                >
                  n
                </span>
                <span
                  class="letra"
                  style={{ color: "#FF9933", fontWeight: "bold" }}
                >
                  a
                </span>
                <span
                  class="letra"
                  style={{ color: "#0066CC", fontWeight: "bold" }}
                >
                  ncity!
                </span>
              </h2>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              {/* <li className="nav-item p-1">
                <a className="nav-link" aria-current="page" href="#Inicio">
                  ¡Somos Finnancity!
                </a>
              </li> */}
              <li className="nav-item p-1">
                <a className="nav-link" href="#Conocenos">
                  ¡Conoce la ciudad!
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#Programas">
                  Programas
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#Contactos">
                  Contacta a Don Cashlo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
