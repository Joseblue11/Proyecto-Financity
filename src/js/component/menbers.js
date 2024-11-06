import React from "react";
import "../../styles/members.css";

export const Members = () => {
  return (
    <div className="Members" id="Ciudadanos">
      <h2 className="Tittle-Members">Secretarios Distritales</h2>
      <div className="Content">
        <div className="Members-part2">
          <div className="Group-members">
            <div className="members">
              <img
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0076_nsz1iv.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Jesús González</h3>
                <p className="Members-text">Secretario Distrital<br />Capital</p>
              </div>
            </div>
            <div className="members">
              <img
                   src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0074_cn8d2r.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Jailene Tirado</h3>
                <p className="Members-text">Secretaria Distrital<br />Gastos</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0073_x7gjbh.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Gabriel Heredia</h3>
                <p className="Members-text">Secretario Distrital<br />Ahorro</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0078_fzb3mk.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Yuri Ramírez</h3>
                <p className="Members-text">Secretaria Distrital<br />Inversión</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0075_mp1gll.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Valeria Palma</h3>
                <p className="Members-text">Secretaria Distrital<br />Plan de Ahorro</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://res.cloudinary.com/dmyppqapj/image/upload/v1730931562/IMG-20241106-WA0077_eqlvjt.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Jonayker de la Rosa</h3>
                <p className="Members-text">Secretario Distrital<br />Presupuesto</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
};
