// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import expertiseBImg from "@/Assets/ExpertiseBanner-09.jpg";
import { BannerImg } from "@/Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const ExpertisePage = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={expertiseBImg} />
      </Box>
    </React.Fragment>
  );
};

export default ExpertisePage;
