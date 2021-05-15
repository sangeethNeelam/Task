// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const CurrentOpenings = (props: Props): Node => {
  const classes = useStyles();
  function createMarkup() {
    return {
      __html:
        '<script src="https://www.ziprecruiter.com/jobs-widget/v1/a6ee9d1d/all?show_posted_days=0%22%3E"></script>',
    };
  }

  let rawHTMLCode =
    '<div>This wil be rendered</div><script src="https://www.ziprecruiter.com/jobs-widget/v1/a6ee9d1d/all?show_posted_days=0%22%3E">  </script>';

  return (
    <React.Fragment>
      <Box p="20px">
        CurrentOpenings
        <div dangerouslySetInnerHTML={createMarkup()}></div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: rawHTMLCode }}
        ></div>
        {/* <script src="https://www.ziprecruiter.com/jobs-widget/v1/a6ee9d1d/all?show_posted_days=0%22%3E"></script> */}
      </Box>
    </React.Fragment>
  );
};

export default CurrentOpenings;
