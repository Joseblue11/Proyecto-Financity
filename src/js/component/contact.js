import React, { useState, useEffect } from "react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar recargar la página
    // Realizar el envío del formulario manualmente
    fetch("https://formsubmit.co/cecilia.perdomo@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    }).then(() => {
      setIsSubmitted(true); // Mostrar mensaje de éxito
    });
  };

  useEffect(() => {
    if (isSubmitted) {
      // Configurar un temporizador para ocultar el mensaje después de 30 segundos
      const timer = setTimeout(() => {
        setIsSubmitted(false); // Volver a mostrar el formulario
      }, 30000); // 30 segundos

      // Limpiar el temporizador cuando se desmonte el componente o se cambie el estado
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="pt-5" id="Contactos">
      <form onSubmit={handleSubmit} className="pt-4">
        <div className="d-flex justify-content-center">
          <div
            className="card1 mb-3 justify-content-center"
            style={{ width: "30rem", height: "30rem" }}
          >
            <div className="card-header mb-3">
              <h3>Contáctanos</h3>
            </div>
            <div className="card-body">
              {!isSubmitted ? (
                <>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name-lastname"
                      style={{ width: "25rem" }}
                    />
                    <label htmlFor="floatingInput" style={{ color: "gray" }}>
                      Nombre y Apellido
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="floatingInput"
                      placeholder="phone"
                      style={{ width: "25rem" }}
                    />
                    <label htmlFor="floatingInput" style={{ color: "gray" }}>
                      Teléfono
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="email"
                      style={{ width: "25rem" }}
                    />
                    <label htmlFor="floatingInput" style={{ color: "gray" }}>
                      Correo electrónico
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      id="floatingInput"
                      placeholder="message"
                      style={{ width: "25rem", height: "10rem" }}
                    />
                    <label htmlFor="floatingInput" style={{ color: "gray" }}>
                      Mensaje
                    </label>
                  </div>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Enviar"
                    id="submitButton"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://financity-vert.vercel.app/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                </>
              ) : (
                <div id="successMessage">
                  <p>
                    Agradecemos su interés en comunicarse con nosotros. Su
                    consulta será atendida a la brevedad, en un plazo máximo de
                    24 horas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
