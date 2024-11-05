import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
  <footer>
    <div className="footer">
      <div className="content-footer">
        <div className="Part-footer">
          <h2 className="tittle-footer">Finnancity</h2>
          <p className="txt-1 mb-2">
            <i className="fa fa-map-marker-alt me-3"></i>Caracas, Venezuela
          </p>
          <p className="txt-1 mb-2">
            <i className="fa fa-envelope me-3"></i>finnancity@gmail.com
          </p>
        </div>
        <div className="Part-footer">
          <div className="links-footer">
            <li className="link btn btn-link" href="">
              <a className="link" href="#Conocenos">
                ¡Conoce la ciudad!
              </a>
            </li>
            <li className="link btn btn-link">
              <a className="link" href="#Programas">
                Programas
              </a>
            </li>
            <li className="link btn btn-link">
              <a className="link" href="#Ciudadanos">
                Ciudadanos
              </a>
            </li>
            <li className="link btn btn-link">
              <a className="link" href="#Contactos">
                Contacta a Don Cashlo
              </a>
            </li>
          </div>
        </div>
        <div className="Part-footer">
          <h4 className="text-footer">¡Síguenos en nuestras redes sociales!</h4>
          <div className="Redes">
            <a
              className="btn"
              href="https://www.facebook.com/profile.php?id=61562882021706"
            >
              <img
                className="img-footer"
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366507/facebook_t7thht.png"
                alt="Instagram"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a className="btn" href="https://www.instagram.com/finnancity/">
              <img
                className="img-footer"
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366509/instagram_1_onjkwa.png"
                alt="Instagram"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <p className="txt-1">@finnancity</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Copy">
      <p>2024 © Finnancity - Todos los derechos reservados.</p>
    </div>
  </footer>
);
