// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

//Local Imports
import { BannerImg, BasicPaper, SimpleCard } from "@/Components";
import clientBImg from "@/Assets/clients1.jpg";
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
const useStyles = makeStyles(({ spacing, palette }) => ({
  clientWrapper: {
    backgroundColor: "#fff",
    padding: 20,
    boxSizing: "border-box",
    textAlign: "center",
    margin: 10,
    width: 300,
  },
  img: {
    height: 140,
  },
  root: {
    backgroundColor: "#ebebeb",
  },
}));

type Props = {};

const Clients = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <BannerImg bannerImg={clientBImg} />
        <br />
        <BasicPaper title="We Have Some - Great Clients" />
        <br />
        <SimpleCard>
          <Box display="flex" className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={josephs} alt="josephs" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={verizon} alt="verizon" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img
                    src={wellsfargofrom}
                    alt="wellsfargofrom"
                    className={classes.img}
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={atlanta} alt="atlanta" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={vodafone} alt="vodafone" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={bcd} alt="bcd" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={citizens} alt="citizens" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={comsys} alt="comsys" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={connex} alt="connex" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={jvc} alt="jvc" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={bridgez} alt="bridgez" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={disney} alt="disney" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={engenius} alt="engenius" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={health} alt="health" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={home} alt="home" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={ibm} alt="ibm" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={ihg} alt="ihg" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={marta} alt="marta" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={poly} alt="poly" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={proven} alt="proven" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={satyam} alt="satyam" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={mobile} alt="mobile" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.clientWrapper}>
                  <img src={resmed} alt="resmed" className={classes.img} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SimpleCard>
      </Box>
    </React.Fragment>
  );
};

export default Clients;
