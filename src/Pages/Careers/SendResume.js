// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

//Local Imports
import { SendResumeForm } from "@/Components";
import { BannerImg } from "@/Components";
import bannerImg from "@/Assets/servicesbanner.jpg";
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  pagewrap: {
    color: " #000",
    float: "left",
    fontSize: 28,
    fontFamily: "Roboto,sans-serif",
    fontWeight: 500,
    margin: "30px 0",
    width: "100%",
    textAlign: "center",
  },
  pagewrap1: {
    color: " #000",
    textAlign: "center",
    float: "left",
    fontSize: 20,
    fontFamily: "Roboto,sans-serif",
    fontWeight: 500,
    margin: "30px 0",
    width: "100%",
  },
}));

type Props = {};

const SendResume = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={bannerImg} title="Send Your Resume" />
      </Box>
      <Box p="20px" textAlign="center">
        <Typography component="h2" className={classes.pagewrap}>
          <b>Work with RiVi Group</b>
        </Typography>
        <Typography component="h4" className={classes.pagewrap1}>
          Please fill the form below:
        </Typography>
        <SendResumeForm />
      </Box>
    </React.Fragment>
  );
};

export default SendResume;
