// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

//Local Imports
import { useAtom } from "@/Components/Atom";
import logo from "@/Assets/footer-logo.png";
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  // Add your styles here
  footer: {
    background: "#4c4c4c",
    float: "left",
    width: "100%",
    height: "300px",
  },
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  input: {
    "&>.MuiFormControl-root>.MuiOutlinedInput-root": {
      border: "1px solid #fff",
    },
    "&.MuiFormControl-root>.MuiInputLabel-root": {
      color: "#fff",
    },
  },
  paper: {
    padding: 16,
    textAlign: "center",
  },
  signup: {
    fontSize: 12,
    display: "inline-block",
    marginBottom: 5,
  },
  btn: {
    color: "#fff",
  },
  list: {
    color: "#fff",
    padding: 1,
    fontSize: 12,
  },
  title: {
    fontSize: 12,
    color: "#fff",
  },
  socialicons: {
    padding: 6,
    cursor: "pointer",
    color: "#fff",
    fontSize: "18",
  },
  address: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
  },
  addresstext: {
    fontSize: 10,
    padding: 6,
  },
  logo: {
    height: 36,
  },
  text: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
}));

type Props = {};

export const Footer = (props: Props): Node => {
  const classes = useStyles();
  const { Layout } = useAtom();

  const [select, setSelected] = useState(0);

  return (
    <React.Fragment>
      <Box className={classes.footer}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Box color="#fff" textAlign="center" className={classes.input}>
                <Typography variant="h6" className={classes.signup}>
                  SIGNUP FOR THE NEWSLETTER
                </Typography>
                <TextField
                  id="email"
                  label="Email address"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box textAlign="center" mt="10px">
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                >
                  SubScribe
                </Button>
              </Box>
              <Box textAlign="center" mt="20px">
                <img src={logo} className={classes.logo} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box color="#fff" textAlign="center">
                <Typography variant="h3" className={classes.title}>
                  USEFUL LINKS
                </Typography>
                <ul type="none" style={{ marginLeft: "-36px" }}>
                  <li className={classes.list}>Sitemap</li>
                  <li className={classes.list}>Feedback</li>
                  <li className={classes.list}>Partners</li>
                  <li className={classes.list}>Request for Services</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box color="#fff" textAlign="center">
                <Typography variant="h3" className={classes.title}>
                  FOLLOW US
                </Typography>
                <ul style={{ marginLeft: "-40px" }}>
                  <a href="https://www.facebook.com/RiviGroup">
                    <AiFillFacebook className={classes.socialicons} />
                  </a>
                  <AiFillLinkedin className={classes.socialicons} />
                  <AiFillTwitterSquare className={classes.socialicons} />
                </ul>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.address}>
                <lable>CORPORATE HEAD QUARTERS</lable>
                <br />
                <p className={classes.addresstext}>
                  RiVi Consulting Group L.L.C <br />
                  2475 Northwinds Pkwy, <br />
                  Suite 200, Alpharetta <br />
                  GA 30009
                  <br /> Phone: 1-866-921-7484,
                  <br />
                  1-678-909-0600
                  <br />
                  Fax: 1-866-921-7484
                  <br />
                  Email: info@rivigroup.com
                </p>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.address}>
                <lable>GLOBAL DEVELOPMENT CENTER INDIA</lable>
                <br />
                <p className={classes.addresstext}>
                  RiVi Consulting Group L.L.C <br />
                  Plot No. 550-B, 1st Floor, Anitha Square <br />
                  Road No. 92, Jubilee Hills,
                  <br />
                  Hyderabad, Telangana – 500033, India
                  <br /> Phone: +91 812 545 0007
                  <br />
                  Fax: 1-866-921-7484
                  <br />
                  Email: info@rivigroup.com
                </p>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.text}>
              A CMMI Level 3, ISO 9001:2008, ISO/IEC 27001:2013, SBA 8(a), MBE,
              WBENC,EDWOSB,NAICS, NMSDC, GSA IT Schedule 70 COMPANY
            </p>
          </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
};
