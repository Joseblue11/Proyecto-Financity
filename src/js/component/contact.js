import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../../styles/contact.css";

export const Contact = () => {
  const form = useRef();
  const [envio, setEnvio] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ag5qlef", "template_wxqo6zw", form.current, {
        publicKey: "EUztcpqsmP18PxTmq",
      })
      .then(
        () => {
          Swal.fire({
            title: "Formulario Enviado!",
            text: "Gracias por contactarnos!",
            icon: "success",
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            title: "Error al enviar el formulario!",
            text: "Intentelo mas tarde!",
            icon: "error",
            showConfirmButton: true,
          });
        }
      );
  };

  return (
    <div className="contact" id="Contactos">
      <form
        ref={form}
        // action="https://formsubmit.co/josea.tovarp.blue7@gmail.com"
        // method="POST"
        className="forms pt-4"
        onSubmit={(e) => sendEmail(e)}
      >
        <div className="d-flex justify-content-center">
          <div
            className="card-contact mb-3 justify-content-center"
            // style={{ width: "30vw", height: "35vw" }}
          >
            <div className="card-header mb-3">
              <h3 className="tittle-contact"> ¿Quieres conversar con el Alcalde? </h3>
              <p className="text-contact"> ¡Déjale tu mensaje aquí y se lo enviaremos con mucho gusto! </p>
              <p>{envio}</p>
            </div>
            <div className="card-contact">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  name="user_name"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name-lastname"
            
                  required
                />
                <label htmlFor="floatingInput" style={{ color: " #0066CC"}}>
                  Nombre y apellido
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="phone"
                  name="user_phone"
                  className="form-control"
                  id="floatingInput"
                  placeholder="phone"
                  required
                />
                <label htmlFor="floatingInput" style={{ color: " #0066CC" }}>
                  Teléfono
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  required
                />
                <label htmlFor="floatingInput" style={{ color: " #0066CC" }}>
                  Correo electrónico
                </label>
              </div>
              <div className="form-floating mb-3 input-contact">
                <textarea
                  type="message"
                  name="message"
                  className="form-control" 
                  id="floatingInput"
                  placeholder="message"
                  style={{height:"40vw"}}
                  required
                />
                <label htmlFor="floatingInput" style={{ color: " #0066CC" }}>
                  Mensaje
                </label>
              </div>
              <button
                className="button-contact btn "
                type="submit"
                id="submitButton"
              >
                Enviar a Don Cahslo
              </button>
              <input
                type="hidden"
                name="_next"
                value="https://financity-vert.vercel.app/"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
