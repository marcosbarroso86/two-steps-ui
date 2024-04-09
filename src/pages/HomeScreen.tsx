import React, { useRef } from "react";
import "./style.css";

import Contacts from "../components/contacts/Contacts";
import Social from "../components/social/Social";
import ServicesOffered from "../components/servicesOffered/ServicesOffered";
import Trasnsports from "../components/transports/Trasnsports";
import Pricing from "../components/pricing/Pricing";
import Customers from "../components/customers/Customers";
import CallToAction from "../components/cta/CallToAction";
import About from "../components/about/About";
import Logo from "../components/logo/Logo";
import Header from "../components/header/Header";

const HomeScreen = () => {
  

  return (
    <div>
      <Header />

      <Logo />

      <About />

      <CallToAction />

      <Customers />

      <Pricing />

      <ServicesOffered />

      <Trasnsports />

      <Contacts />

      <Social />
    </div>
  );
};

export default HomeScreen;
