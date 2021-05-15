// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import { BannerImg } from "@/Components";
import smcBImg from "@/Assets/servicesbanner.jpg";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const StrategyManagementConsulting = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg
          bannerImg={smcBImg}
          title="Strategy & Management Consulting"
        />
      </Box>
    </React.Fragment>
  );
};

export default StrategyManagementConsulting;
