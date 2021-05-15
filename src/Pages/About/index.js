import React from "react";
import { Router } from "@reach/router";

// local Imports
import Clients from "./Clients";
import Partners from "./Partners";
import Testimonials from "./Testimonials";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Clients path="clients" />
        <Partners path="partners" />
        <Testimonials path="testimonials" />
      </Router>
    </React.Fragment>
  );
};

export default AboutPage;
