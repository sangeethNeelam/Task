// @flow
import React from "react";
import type { Node } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Box } from "@material-ui/core";

//Local Imports
import { ContactForm } from "../../Components";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  // Add your styles here
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 16,
    textAlign: "center",
  },
  title: {
    color: "#6cbfdb",
  },
  Subtexth1: {
    fontSize: 18,
    fontFamily: "Segoe UI,Arial,sans-serif",
    fontWeight: 610,
    marginTop: 12,
  },
  Subtextp: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

type Props = {};

const Contactus = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* google map start */}
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.418891480962!2d-84.28811538490878!3d34.05877462483347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57573e2efa9e1%3A0x8ca6644996df3e59!2sRiVi+Consulting+Group!5e0!3m2!1sen!2sin!4v1496812658198"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </p>
      <br />
      {/* google map end */}
      {/* contact form start */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <h2>Reach Us</h2>
              <br />
              <Typography component="h2" className={classes.title}>
                <b> RIVI CONSULTING GROUP L.L.C</b>
              </Typography>
              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Address:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>
                    2475 Northwinds Pkwy, Suite 200, Alpharetta GA 30009
                  </p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Phone:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>
                    +1-866-921-7484, +1-678-909-0600
                  </p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Fax:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>1-866-921-7484</p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Email:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>info@rivigroup.com</p>
                </Grid>
              </Box>
              {/* global address */}
              <br />
              <Typography component="h2" className={classes.title}>
                <b>Global Development Center, INDIA</b>
              </Typography>
              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Address:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>
                    Plot No. 550-B, 1st Floor, Anitha Square, Road No. 92,
                    Jubilee Hills, Hyderabad, Telangana – 500033, India
                  </p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Phone:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>+91 812 545 0007</p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Fax:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>1-866-921-7484</p>
                </Grid>
              </Box>

              <Box display="flex">
                <Grid item xs={3}>
                  <h4 className={classes.Subtexth1}>Email:</h4>
                </Grid>
                <Grid item xs={9}>
                  <p className={classes.Subtextp}>info@rivigroup.com</p>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          {/* contact Form start */}
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <Typography component="h2" className={classes.title}>
                <b> Get in Touch</b>
              </Typography>

              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Contactus;
