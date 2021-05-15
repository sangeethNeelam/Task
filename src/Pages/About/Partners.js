// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import { BannerImg, BasicPaper } from "@/Components";
import partnersBImg from "@/Assets/partners-banner.png";
import img from "@/Assets/RiviContent for the Website.png";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  img: {
    maxHeight: 500,
  },
}));

type Props = {};

const Partners = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={partnersBImg} />
        <br />
        <BasicPaper title="Partners" />
        <br />
        <Box textAlign="center">
          <img className={classes.img} src={img} alt="Fidzeal_Logo" />
        </Box>
        <br />
      </Box>
    </React.Fragment>
  );
};

export default Partners;
