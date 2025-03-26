import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import CtaSection from "../components/CtaSection";

const Contact = () => {
  return (
    <>
      <PageBanner title="CONTACT US" breadcrumb="Home / Contact Us" />
      <CtaSection />
      <ContactForm />
    </>
  );
};

export default Contact;
