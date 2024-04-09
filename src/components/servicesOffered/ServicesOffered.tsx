import React from "react";
import "./styles.css";

const ServicesOffered = () => {
  return (
    <section
      id="services"
      className="services section-bg cta "
      style={{ padding: "60px 0" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ color: "white" }}>Servicios</h2>
        </div>

        <div className="row d-flex">
          <div
            className="col-12 col-lg-6 col-xl-3 mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
          <div className="icon-box" style={{ height: "305px" }}>
              <div className="box featured">
                <h4>
                  <strong>MARITIMO</strong>
                </h4>
                <ul>
                  <li> FCL/FCL </li>
                  <li>LCL/LCL </li>
                  <li>Consolidación</li>
                  <li>Desconsolidación</li>
                  <li>Seguro nacional e internacional</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 col-xl-3 mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box" style={{ height: "305px" }}>
              <div className="box featured">
                <h4>
                  <strong>AÉREO</strong>
                </h4>
                <ul>
                  <li> Consolidado </li>
                  <li> Back to Back </li>
                  <li>Seguro nacional e internacional</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 col-xl-3 mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
         <div className="icon-box" style={{ height: "305px" }}>
              <div className="box featured">
                <h4>
                  <strong>TERRESTRE</strong>
                </h4>
                <ul>
                  <li> FTL </li>
                  <li> LTL </li>
                  <li>Logística Nacional</li>
                  <li>Seguro nacional e internacional</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 col-xl-3 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
          <div className="icon-box" style={{ height: "305px" }}>
              <div className="box featured">
                <h4>
                  <strong>LOGISTICA INTERNACIONAL</strong>
                </h4>
                <ul>
                  <li>Almacenaje</li>
                  <li>Embalaje </li>
                  <li>Etiquetado</li>
                  <li>Consolidación</li>
                  <li>Desconsolidación</li>
                  <li>Mudanzas internacionales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
