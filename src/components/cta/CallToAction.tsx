import React from 'react';
import img_puerto from "../../assets/img/puerto.jpeg";

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <h2 style={{ color: "#FFF" }}>¿Por qué elegirnos?</h2>

          <div className="row d-flex justify-content-evenly">
            <div className="col-lg-6 pt-4 pt-lg-0 d-flex justify-content-around align-items-center">
              <img className="img-fluid" src={img_puerto} alt="" />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h3>Respaldo</h3>
              <p>
                {" "}
                Two Steps Logistics forma parte activa de las redes de agentes
                más prestigiosas del mundo, garantizando de este modo, una
                efectiva, ágil y segura operación de todas sus gestiones
                internacionales.
              </p>
              <h3>Optimización</h3>
              <p>
                {" "}
                Ponemos a su disposición un servicio de alta capacidad de
                respuesta para optimizar costos, tiempos y procesos, a través de
                una relación constante, fluida y personalizada. Ofrecemos
                entrega de documentación para no tener que lidiar con turnos ni
                demoras en una recepción.
              </p>

              <h3>Experiencia</h3>
              <p>
                {" "}
                Contamos con mas de 10 años de experiencia en comercio exterior
                y respondemos con
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CallToAction
