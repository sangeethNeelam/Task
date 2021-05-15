// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import servicesBImg from "@/Assets/services.jpg";
import { BannerImg } from "@/Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const ServicesPage = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={servicesBImg} />
      </Box>
    </React.Fragment>
  );
};

export default ServicesPage;
