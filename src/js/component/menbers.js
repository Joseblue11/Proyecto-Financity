import React from "react";
import "../../styles/members.css";

export const Members = () => {
  return (
    <div className="Members" id="Ciudadanos">
      <h2 className="Tittle-Members">Ciudadanos</h2>
      <div className="Content">
        <div className="Members-part1">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/682/355/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
            className="members-image1 img-fluid pt-2"
            alt="..."
          />
          <div>
            <h3 className="Members-title1">Alcalde</h3>
            <p className="Members-text1">Don Cashlo</p>
          </div>
        </div>
        <div className="Members-part2">
          <div>
            <h3 className="Members-title1">Secretarios Distritales</h3>
          </div>
          <div className="Group-members">
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/315/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Jailene Tirado</h3>
                <p className="Members-text">Secretaria</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/318/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Jonayker De La Rosa</h3>
                <p className="Members-text">Secretario </p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/331/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Yuri Ramírez</h3>
                <p className="Members-text">Secretaria</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/398/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Valeria Palma</h3>
                <p className="Members-text">Secretaria</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/349/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Eifrancis Sanz</h3>
                <p className="Members-text">Diseñadora Grafica</p>
              </div>
            </div>
            <div className="members">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/682/326/non_2x/avatar-with-a-young-face-pictures-of-men-and-women-of-various-nationalities-vector.jpg"
                className="members-image img-fluid pt-2"
                alt="..."
              />
              <div className="card-menber">
                <h3 className="Members-title">Gabriel Heredia</h3>
                <p className="Members-text">Secretario de Ahorro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
