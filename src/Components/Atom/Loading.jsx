// @flow
import React from "react";
import type { Node } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box, CircularProgress, Typography } from "@material-ui/core";

//Local Imports

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  // Add your styles here
}));

type Props = {
  state: boolean,
  message: string,
};

export const Loading = (props: Props): Node => {
  const classes = useStyles();
  const { state, message } = props;

  return (
    <React.Fragment>
      <Box>
        {state ? (
          <CircularProgress variant="determinate" value={100} />
        ) : (
          <CircularProgress />
        )}
      </Box>
      <Typography>{message}</Typography>
    </React.Fragment>
  );
};

type SkelLoaderProps = {
  bones: { width: number, height: number, variant: string, style: any }[],
};

export const SkelLoader = (props: SkelLoaderProps): Node => {
  const { bones, ...otherProps } = props;

  return (
    <React.Fragment>
      <Box otherProps>
        {bones.map((item) => (
          <Skeleton {...item} />
        ))}
      </Box>
    </React.Fragment>
  );
};
