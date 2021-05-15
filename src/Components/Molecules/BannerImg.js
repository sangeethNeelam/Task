// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

//Local Imports
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  bannerImg: {
    height: 350,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 158,
  },
}));

type Props = {};

export const BannerImg = (props: Props): Node => {
  const classes = useStyles();

  const { bannerImg, title } = props;

  return (
    <React.Fragment>
      <Box
        className={classes.bannerImg}
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <Typography component="h2" className={classes.title}>
          {title}
        </Typography>
      </Box>
    </React.Fragment>
  );
};
