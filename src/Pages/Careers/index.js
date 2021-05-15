import React from "react";
import { Router } from "@reach/router";
import CurrentOpenings from "./CurrentOpenings";
import SendResume from "./SendResume";

const Careers = () => {
  return (
    <React.Fragment>
      <Router>
        <CurrentOpenings path="Current_Openings" />
        <SendResume path="Send_Your_Resume" />
      </Router>
    </React.Fragment>
  );
};

export default Careers;
