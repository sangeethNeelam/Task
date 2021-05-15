// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";

//Local Imports
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

export const SimpleCard = (props: Props): Node => {
  const classes = useStyles();

  const { title } = props;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </React.Fragment>
  );
};
