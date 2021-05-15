import React from "react";
import { Router } from "@reach/router";

import Contactus from "./Contactus";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Contactus path="/" />
      </Router>
    </React.Fragment>
  );
};

export default ContactPage;
