import React from "react";
import "../../styles/programs.css";

export const Programs = () => {
  return (
    <div className="Programs" id="Programas">
      <h2 className="tittle-Programs">Programas</h2>
      <div className="Programs-Content">
        <div className="Programs-Part">
          <h3 className="Programs-title">Zoonomics:</h3>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366507/close-up-portrait-cheerful-cute-little-kid_sgt630.jpg"
            className="Programs-image img-fluid pt-2"
            alt="..."
          />
          <p className="Programs-text">
            Es un juego de diagnóstico comunitario que permite identificar el nivel de conocimientos 
            y competencias financieras. A través de la simulación de una aventura financiera en 
            el Safari, los participantes pueden gestionar recursos, hacer comprar y tomar decisiones 
            sobre el manejo de sus finanzas personales.
          </p>
        </div>
        <div className="Programs-Part">
        <h3 className="Programs-title">Programa formativo CIGA</h3>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1726748671/Rectangle_8_ytidmw.jpg"
            className="Programs-image img-fluid pt-2"
            alt="..."
          />
          <p className="Programs-text">
          “CIGA” es una experiencia formativa para niños, niñas y adolescentes que los embarcará 
          en viaje por los cuatro (4) Distritos de Finnancity, explorando los confines de la 
          ciudad con divertidos desafíos y juegos, mientras se atienden los conceptos 
          undamentales sobre finanzas personales.
          </p>
        </div>
        <div className="Programs-Part">
          <h3 className="Programs-title">Taller Ganar – Ganar:</h3>
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366513/portrait-cute-boy-showing-graph-his-office-desk_qg39ji.jpg"
            className="Programs-image img-fluid pt-2"
            alt="..."
          />
          <p className="Programs-text">
          El Taller Ganar – Ganar es una estrategia democratizadora y participativa que promueve 
          el involucramiento de nuevos actores, en el rol de facilitador, en la transferencia de
           información y conocimiento económico para niños, niñas y adolescentes a través de la 
           utilización de las tecnologías de información y comunicación.
          </p>
        </div>
      </div>
    </div>
  );
};
