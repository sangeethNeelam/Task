// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

//Local Imports
import aboutBImg from "@/Assets/about-us-banner-2.jpg";
import { BannerImg, OurClients } from "@/Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  clients: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
}));

type Props = {};

const AboutUs = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={aboutBImg} />
        <br />
        <Box>
          <Typography className={classes.clients} component="h2">
            Our Clients
          </Typography>
          <OurClients />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
