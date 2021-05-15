// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";

//Local Imports
import { BannerImg, BasicPaper, SimpleCard } from "@/Components";
import TestimonialsBImg from "@/Assets/testimonial-banner.png";
import data from "@/Assets/Mockdata.json";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    boxShadow: "0 2px 3px rgb(0 0 0 / 15%)",
    backgroundColor: "#fff",
    float: "left",
    minHeight: 224,
    margin: 10,
    width: 555,
    padding: 15,
    textAlign: "left",
  },
  subtext: {
    color: "#7a888c",
    fontSize: 15,
    fontWeight: 500,
    marginTop: 5,
  },
  content: {
    padding: "-5px",
    letterSpacing: 1,
  },
  contentWrapper: {
    display: "inline",
    fontSize: 13,
    textAlign: "justify",
  },
  title: {
    fontWeight: 500,
  },
}));

type Props = {};

const Testimonials = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={TestimonialsBImg} />
        <br />
        <BasicPaper title="Testimonials" />
        <br />
        <SimpleCard>
          <Box display="flex">
            <Grid container spacing={3}>
              {_.map(data.Testimonials, (item, index) => (
                <Grid item xs={6}>
                  <Box className={classes.root}>
                    <Typography component="h2">{item.title}</Typography>
                    <Typography component="h3" className={classes.subtext}>
                      {item.subtext}
                    </Typography>
                    <Box className={classes.contentWrapper}>
                      <p className={classes.content}>{item.content}</p>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </SimpleCard>
      </Box>
    </React.Fragment>
  );
};

export default Testimonials;
