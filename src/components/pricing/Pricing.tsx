import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing bg_pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nuestro servicios</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="box featured">
              <ul>
                <li>
                  <i className="bi bi-check2"></i> Cotización inmediata.
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de coordinación de
                  cargas de importación y exportación
                </li>
                <li>
                  <i className="bi bi-check2"></i> Seguimiento de cargas en
                  tiempo real.
                </li>
                <li>
                  <i className="bi bi-check2"></i> Coordinación de cargas sin
                  demora en el intercambio de información.
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="box featured">
              <ul>
                <li>
                  <i className="bi bi-check2"></i> Servicio de coordinación de
                  cargas marítimas: LCL (carga suelta), FCL (contenedor
                  completo).{" "}
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de coordinación de
                  cargas aéreas: Consolidado y Back to Back.
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de coordinación de
                  cargas terrestres: LTL (carga suelta), FTL (camion completo).
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de coordinación de
                  carga GENERAL / IMO.{" "}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="box featured">
              <ul>
                <li>
                  <i className="bi bi-check2"></i> Servicio de almacenaje,
                  desconsolidación y traslado tanto en origen como destino
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de courier.
                </li>
                <li>
                  <i className="bi bi-check2"></i> Servicio de asesoramiento
                  logístico y aduanero.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
