import React from "react";
import "./style.css";
import logo_png from "../../assets/img/logo-twesteps.png";
import img_forward from "../../assets/img/two-steps-forward.png";
import logo_jpg from "../../assets/img/logo-twesteps.jpg";
import office from "../../assets/img/two-steps-office.png";
import img_container from "../../assets/img/two-steps-container.png";
import img_businnesman from "../../assets/img/businessman-holding-world-connection-sketch.jpeg";
import img_terrestre from "../../assets/img/Transporte+por+carretera-640w.jpg";
import img_puerto from "../../assets/img/puerto.jpeg";
import img_aerea from "../../assets/img/aereo two steps.jpeg";
import img_maritimo from "../../assets/img/maritim two steps.jpg";
import img_logistica from "../../assets/img/logistica-profesionales.jpg";

const HomeScreen = () => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top "
        style={{ background: "rgba(247, 247, 247, 0.9)" }}
      >
        <div className="container d-flex align-items-center">
          <img
            className="logo me-auto"
            src={logo_png}
            style={{ maxHeight: "80px" }}
          />
          {/* <h1 className="logo me-auto">
            <a href="index.html">Arsha</a>
          </h1> */}

          <a href="index.html" className="logo me-auto"></a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Quienes somos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="nav-link   scrollto" href="#portfolio">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section
        className="row background_header"
        // style={{
        //   height: "100vh",
        //   backgroundSize: "cover cover",
        //   backgroundRepeat: "no-repeat",
        //   background:
        //     "url(https://www.aamsimx.com/wp-content/uploads/2023/09/El-comercio-internacional-en-Mexico-2023.jpg)",
        // }}
      >
        <div className="container d-flex justify-content-evenly align-items-center">
          <div>
            <img src={logo_png} />
          </div>
          <div>Dos pasos adelante en tus soluciones logisticas</div>
        </div>
      </section>

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
                style={{ width: "600px", height: "600px", borderRadius: "50%" }}
                src={office}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
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
      <section id="pricing" className="pricing">
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
                    cargas terrestres: LTL (carga suelta), FTL (camion
                    completo).
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
      <section
        id="services"
        className="services section-bg cta "
        style={{ padding: "60px 0" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ color: "white" }}>Servicios</h2>
          </div>

          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="box featured">
                  <h4>MARITIMO</h4>
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
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="box featured">
                  <h4>AÉREO</h4>
                  <ul>
                    <li> Consolidado </li>
                    <li> Back to Back </li>
                    <li>Seguro nacional e internacional</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="box featured">
                  <h4>TERRESTRE</h4>
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
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="box featured">
                  <h4>LOGISTICA INTERNACIONAL</h4>
                  <ul>
                    <li>Almacenaje </li>
                    <li>Embalaje </li>
                    <li>Etiquetado</li>
                    <li>Consolidación</li>
                    <li>Desconsolidación</li>
                    <li>Mudanzas</li>
                    <li>internacionales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row" style={{ padding: "0px !important" }}>
        <div data-aos="zoom-in" className="card mb-5 aos-init aos-animate">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column p-2">
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
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column">
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
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column">
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
              <div className="card-body d-flex align-items-start justify-content-center h-100 flex-column">
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
                  <p>
                    Av. Roque Sáenz Peña 615 , OF 514 CP1035 CABA, ARGENTINA
                  </p>
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
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
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
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Enviar mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.linkedin.com/in/two-steps-logistics-238571254/"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="https://www.instagram.com/twostepslog/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">Copyright © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
