// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import careersBImg from "@/Assets/career.jpg";
import { BannerImg } from "@/Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const CareersPage = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={careersBImg} />
      </Box>
    </React.Fragment>
  );
};

export default CareersPage;
