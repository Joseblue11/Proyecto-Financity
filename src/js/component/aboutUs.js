import React from "react";
import "../../styles/aboutUs.css";

export const AboutUs = () => {
  return (
    <div className="AboutUs" id="Conocenos">
      <h2 className="title-About">¡Conoce la Ciudad!</h2>
      <div className="About-Content">
        <div className="text-about">
          <p className="text-about1">
            ¡Somos la primera ciudad financiera para niños, niñas y
            adolescentes!
          </p>
          <p className="text-about2">
            Finnancity es la primera ciudad financiera para niños, niñas y
            adolescentes venezolanos que promueve espacios de educación
            económica para jóvenes a través de estrategias lúdicas con enfoque
            pedagógico, fomentando la toma de decisiones responsables en las
            finanzas personales desde temprana edad y fortaleciendo competencias
            ejecutivas y socioemocionales para la vida de las personas que
            visitan nuestra ciudad.
          </p>
          <p className="text-about2">
            Nos caracterizamos por brindar un espacio para conectar, formar y
            democratizar los conocimientos financieros en la niñez y
            adolescencia, rompiendo con la creencia de que las finanzas
            personales son un tema que solo les concierne una vez que son
            adultos. De esta manera, apoyándonos en el trabajo comunitario, el
            voluntariado y la virtualidad, damos paso a la creación de la
            primera ciudad financiera para niños.
          </p>
          <p className="text-about2">
          ¡Si quieres divertirte y aprender sobre finanzas personales has llegado 
          al lugar correcto!
          </p>
        </div>
        <div className="Img-about">
          <img
            src="https://res.cloudinary.com/dmyppqapj/image/upload/v1724366513/portrait-cute-boy-showing-graph-his-office-desk_qg39ji.jpg"
            className="about-image img-fluid pt-2"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
