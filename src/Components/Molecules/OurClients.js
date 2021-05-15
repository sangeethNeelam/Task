// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import josephs from "@/Assets/st-josephs.png";
import verizon from "@/Assets/verizon.png";
import wellsfargofrom from "@/Assets/wells-fargo.png";
import atlanta from "@/Assets/atlanta.png";
import vodafone from "@/Assets/vodafone.png";
import bcd from "@/Assets/bcd.png";
import citizens from "@/Assets/citizens-bank.png";
import comsys from "@/Assets/comsys.png";
import connex from "@/Assets/connex.png";
import jvc from "@/Assets/jvc-2.png";
import bridgez from "@/Assets/bridgez.png";
import disney from "@/Assets/disney.png";
import engenius from "@/Assets/engenius.png";
import health from "@/Assets/health-point.png";
import home from "@/Assets/home-depot.png";
import ibm from "@/Assets/ibm.png";
import ihg from "@/Assets/ihg.png";
import marta from "@/Assets/marta-1.png";
import poly from "@/Assets/poly-vision.png";
import proven from "@/Assets/proven-method.png";
import satyam from "@/Assets/satyam.png";
import mobile from "@/Assets/t-mobile.png";
import resmed from "@/Assets/resmed-logo.png";
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

export const OurClients = (props: Props): Node => {
  const classes = useStyles();

  const { title } = props;

  return (
    <React.Fragment>
      <Box>
        <div
          style={{
            width: "98%",
            marginBottom: 12,
            marginTop: 30,
            borderTop: "4px solid #ccc",
            borderBottom: "4px solid #ccc",
          }}
        >
          <ul className={classes.list}>
            <marquee>
              <li>
                <img src={josephs} alt="josephs" />
                <img src={verizon} alt="verizon" />
                <img src={wellsfargofrom} alt="wellsfargofrom" />
                <img src={atlanta} alt="atlanta" />
                <img src={vodafone} alt="vodafone" />
                <img src={bcd} alt="bcd" />
                <img src={citizens} alt="citizens" />
                <img src={comsys} alt="comsys" />
                <img src={connex} alt="connex" />
                <img src={jvc} alt="jvc" />
                <img src={bridgez} alt="bridgez" />
                <img src={disney} alt="disney" />
                <img src={engenius} alt="engenius" />
                <img src={health} alt="health" />
                <img src={home} alt="home" />
                <img src={ibm} alt="ibm" />
                <img src={ihg} alt="ihg" />
                <img src={marta} alt="marta" />
                <img src={poly} alt="poly" />
                <img src={proven} alt="proven" />
                <img src={satyam} alt="satyam" />
                <img src={mobile} alt="mobile" />
                <img src={resmed} alt="resmed" />
              </li>
            </marquee>
          </ul>
        </div>
      </Box>
    </React.Fragment>
  );
};
