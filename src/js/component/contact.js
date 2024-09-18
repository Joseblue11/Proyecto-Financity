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
    <div className="contact pt-5" id="Contactos">
      <h2>Contactos</h2>
      {/* <form
        ref={form}
        // action="https://formsubmit.co/josea.tovarp.blue7@gmail.com"
        // method="POST"
        className="pt-4"
        onSubmit={(e) => sendEmail(e)}
      >
        <div className="d-flex justify-content-center">
          <div
            className="card1 mb-3 justify-content-center"
            style={{ width: "30rem", height: "30rem" }}
          >
            <div className="card-header mb-3">
              <h3> Contáctanos</h3>
              <p>{envio}</p>
            </div>
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  name="user_name"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name-lastname"
                  style={{ width: "25rem" }}
                  required
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Nombre y Apellido
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="phone"
                  name="user_phone"
                  className="form-control"
                  id="floatingInput"
                  placeholder="phone"
                  style={{ width: "25rem" }}
                  required
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Telefono
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  style={{ width: "25rem" }}
                  required
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Correo electronico
                </label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="message"
                  name="message"
                  className="form-control"
                  id="floatingInput"
                  placeholder="message"
                  style={{ width: "25rem", height: "10rem" }}
                  required
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Mensaje
                </label>
              </div>
              <button
                className="btn btn-primary"
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
      </form> */}
    </div>
  );
};
