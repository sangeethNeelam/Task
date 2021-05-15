// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper } from "@material-ui/core";

//Local Imports
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  title: {
    textAlign: "center",
    color: "#404040",
    fontSize: 25,
    fontFamily: "Roboto,sans-serif",
    fontWeight: 600,
    padding: 10,
  },
}));

type Props = {};

export const BasicPaper = (props: Props): Node => {
  const classes = useStyles();

  const { title } = props;

  return (
    <React.Fragment>
      <Box>
        <Paper>
          <Typography component="h2" className={classes.title}>
            {title}
          </Typography>
        </Paper>
      </Box>
    </React.Fragment>
  );
};
