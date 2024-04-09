import React from 'react';
import logo_png from "../../assets/img/logo-twesteps.png";

const Header = () => {
  return (
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
          <a href="index.html" className="logo me-auto"></a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#header">
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
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
  )
}

export default Header
