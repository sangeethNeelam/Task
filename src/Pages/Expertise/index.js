import React from "react";
import { Router } from "@reach/router";

// local Imports
import Telecommunications from "./Telecommunications";
import Financial from "./Financial";
import Insurance from "./Insurance";
import Manufacturing from "./Manufacturing";
import Government from "./Government";
import OffShore from "./OffShore";

const Expertise = () => {
  return (
    <React.Fragment>
      <Router>
        <Telecommunications path="Telecommunications" />
        <Financial path="Financial_Services" />
        <Insurance path="Insurance" />
        <Manufacturing path="Manufacturing_Retail" />
        <Government path="Government" />
        <OffShore path="OffShore" />
      </Router>
    </React.Fragment>
  );
};

export default Expertise;
