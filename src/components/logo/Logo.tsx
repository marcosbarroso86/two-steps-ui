import React from "react";
import logo_png from "../../assets/img/logo-twesteps.png";

const Logo = () => {
  return (
    <section className="row background_header" data-aos="zoom-in">
      <div className="d-flex justify-content-evenly align-items-center">
        <img
          data-aos="zoom-in"
          src={logo_png}
          style={{ position: "absolute", top: 150, left: 100 }}
        />
      </div>
    </section>
  );
};

export default Logo;
