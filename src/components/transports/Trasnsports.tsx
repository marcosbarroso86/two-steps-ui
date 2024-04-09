import React from "react";
import img_terrestre from "../../assets/img/Transporte+por+carretera-640w.jpg";
import img_aerea from "../../assets/img/aereo two steps.jpeg";
import img_maritimo from "../../assets/img/maritim two steps.jpg";
import img_logistica from "../../assets/img/logistica-profesionales.jpg";

const Trasnsports = () => {
  return (
    <div>
      <div className="row" style={{ padding: "0px !important" }}>
        <div data-aos="zoom-in" className="card mb-5 aos-init aos-animate">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column px-5">
                <h3 className="card-title fw-bold text-uppercase mb-2">
                  TRANSPORTE MARITIMO
                </h3>
                <p className="card-text fw-light mb-4">
                  Nuestras alianzas estratégicas con distintos armadores nos
                  permiten tener los precios más competitivos tanto en FCL como
                  en LCL. Conocer diferentes compañías marítimas nos permite
                  garantizar el mejor servicio de importación y exportación.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img_maritimo} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div data-aos="fade-up" className="card mb-5 aos-init aos-animate">
          <div className="row gx-0">
            <div className="col-md-6">
              <img
                width={"100%"}
                src={img_terrestre}
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column px-5">
                <h3 className="card-title fw-bold text-uppercase mb-2">
                  Transporte terrestre
                </h3>
                <p className="card-text fw-light mb-4">
                  Utilizado para el comercio con países limítrofes, nuestro
                  staff podrá trasladar su mercadería de manera profesional y
                  segura. Nuestro equipo profesional le ofrecerá una rápida
                  gestión en sus operaciones de transporte de mercancías ,
                  ofreciéndole en todo momento soluciones y alternativas tanto
                  de servicio como de precio que se ajusten a sus necesidades de
                  entrega. Estará informado en todo momento de la situación de
                  sus mercancías transportadas.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div data-aos="fade-up" className="card mb-5 aos-init aos-animate">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column px-5">
                <h3 className="card-title fw-bold text-uppercase mb-2">
                  TRANSPORTE AÉREO
                </h3>
                <p className="card-text fw-light mb-4">
                  Dada nuestra alta capacidad de respuesta y velocidad para
                  coordinar embarques, siéntanse con confianza para delegar en
                  nosotros la responsabilidad de trasladar su carga de manera
                  rápida y eficiente. Nuestro equipo de especialistas en
                  transporte aéreo le aconsejará, buscando soluciones técnicas y
                  operativas al precio más conveniente de acuerdo a sus
                  necesidades y solicitud de servicio, resolverá cualquier
                  incidencia durante el transporte para asegurarle que su envío
                  llegue a su cliente en las condiciones y el tiempo acordados.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img_aerea} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div data-aos="fade-up" className="card mb-5 aos-init aos-animate">
          <div className="row gx-0">
            <div className="col-md-6">
              <img src={img_logistica} alt="..." width={"100%"} />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column px-5">
                <h3 className="card-title fw-bold text-uppercase mb-2">
                  LOGISTICA INTERNACIONAL
                </h3>
                <p className="card-text fw-light mb-4">
                  Ofrecemos servicio de almacenaje, embalaje, re-embalaje,
                  etiquetado, consolidación, desconsolidación. Nuestro equipo
                  esta preparado para ayudarlos en cada una de sus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trasnsports;
