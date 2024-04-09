import React from "react";
import office from "../../assets/img/two-steps-office.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>¿Quiénes somos?</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <p>
              Somos agentes de cargas con más de 10 años de experiencia en la
              logística internacional, brindamos calidad, profesionalismo y
              eficiencia.
            </p>
            <p>
              Contamos con profesionales cualificados y ofrecemos a nuestros
              clientes seguridad y agilidad en las informaciones del status de
              carga. Nuestra meta es facilitar el día a día en su logística,
              logrando de esta manera optimizar costos y tiempos.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 d-flex justify-content-center align-items-center">
            <img
              style={{ width: "80%", height: "80%", borderRadius: "50%" }}
              src={office}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
