import React from 'react'
import img_avimport from "../../assets/img/clientes/avimport.png";
import img_nira from "../../assets/img/clientes/Nira.png";
import img_lumpack from "../../assets/img/clientes/lumpack.png";
import img_hps from "../../assets/img/clientes/hps.png";
import img_its from "../../assets/img/clientes/its.png";
import img_aduanero from "../../assets/img/clientes/estudio_aduanero.png";
import img_cronos from "../../assets/img/clientes/cronos.png";
import img_burdah from "../../assets/img/clientes/burdah.png";
import img_locex from "../../assets/img/clientes/locex.png";
import img_vazquez from "../../assets/img/clientes/estudio_vazques.png";

const Customers = () => {
  return (
    <section className="" style={{ background: "rgb(192 191 191 / 21%)" }}>
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Empresas que nos eligen</h2>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={img_aduanero} alt="" />
          </div>
          <div className="slide">
            <img src={img_burdah} />
          </div>
          <div className="slide">
            <img src={img_hps} />
          </div>
          <div className="slide">
            <img src={img_avimport} style={{ width: "250px" }} />
          </div>
          <div className="slide">
            <img src={img_its} style={{ width: "300px" }} />
          </div>
          <div className="slide">
            <img src={img_nira} alt="" style={{ width: "200px" }} />
          </div>
          <div className="slide">
            <img src={img_cronos} style={{ width: "350px" }} />
          </div>
          <div className="slide">
            <img src={img_lumpack} alt="" style={{ width: "350px" }} />
          </div>
          <div className="slide">
            <img src={img_locex} alt="" style={{ width: "350px" }} />
          </div>
          <div className="slide">
            <img src={img_vazquez} style={{ width: "350px" }} />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Customers
