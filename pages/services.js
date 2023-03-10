import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import CaseStudies from "../components/HomePages/StartupAgencyTwo/CaseStudies";

const Services = () => {
  return (
    <>
      <NavbarTwo />

      <CaseStudies />

      <ServicesStyleOne />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Services;
