// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import caseBImg from "@/Assets/bannerCaseStudies.jpg";
import { BannerImg } from "@/Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const CasestudiesPage = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={caseBImg} />
      </Box>
    </React.Fragment>
  );
};

export default CasestudiesPage;
