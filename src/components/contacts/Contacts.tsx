import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./styles.css";
import { API_KEY, SERVICE_ID, TEMPLATE_ID } from "../constants/email";

const Contacts = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
      form.current.reset();
    }, 3000);
  }, [isSuccess]);

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
      form.current.reset();
    }, 3000);
  }, [isError]);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      if (form) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: API_KEY,
        });
        setIsSuccess(true);
      }
    } catch (error: any) {
      setIsError(true);
      console.log("FAILED...", error.text);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contacto</h2>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Ubicación:</h4>
                <p>Av. Roque Sáenz Peña 615 , OF 514 CP1035 CABA, ARGENTINA</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>operaciones@two-steps.com.ar</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Teléfono:</h4>
                <p>11-3688-5338</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.899047444769!2d-58.37549339999997!3d-34.60671419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad2696bb6c3%3A0xb35041d6da23f650!2sAv.%20Pres.%20Roque%20S%C3%A1enz%20Pe%C3%B1a%20615%20OF%20514%2C%20C1035%20CABA!5e0!3m2!1ses!2sar!4v1669931716121!5m2!1ses!2sar"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              ref={form}
              onSubmit={sendEmail}
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Tu Nombre</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Tu Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Mensaje</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button onClick={undefined} type="submit">
                  Enviar mensaje
                </button>
              </div>

              {isSuccess && (
                <div
                  style={{ position: "absolute", top: 10, right: 10 }}
                  data-aos="fade-left"
                  className="alert alert-success"
                  role="alert"
                >
                  Tu mensaje ha sido enviado. ¡Gracias!
                </div>
              )}
              {isError && (
                <div
                  style={{ position: "absolute", top: 10, right: 10 }}
                  data-aos="fade-left"
                  className="alert alert-danger"
                  role="alert"
                >
                  Se produjo un error al enviar el correo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
