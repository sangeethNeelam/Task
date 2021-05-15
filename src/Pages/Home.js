// @flow
import React from "react";
import type { Node } from "react";
import { Grid, Paper, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Local Imports
import { useAtom } from "@/Components/Atom";
import { OurClients } from "@/Components";
import SwipeableTextMobileStepper from "./Testimonials";
import bannerImg from "@/Assets/header.png";
import iotImg from "@/Assets/IOT.jpg";
import InvestranImg from "@/Assets/investran.jpg";
import EnterpriseImg from "@/Assets/Enterprise-security.jpg";
import MachineLImg from "@/Assets/Machine-to-machine-learning.jpg";
import Cloudcomputing from "@/Assets/Cloud-computing.jpg";
import Staffing from "@/Assets/Staffing.jpg";
import Testing from "@/Assets/Testing.jpg";
import CloudSecurity from "@/Assets/Cloud-Security.jpg";
import strategy from "@/Assets/strategy.png";
import system from "@/Assets/system.png";
import program from "@/Assets/program.png";
import infrastructure from "@/Assets/infrastructure.png";
import security from "@/Assets/security.png";
import dashboards from "@/Assets/dashboards.png";
import recovery from "@/Assets/recovery.png";
import oracle from "@/Assets/oracle.png";
import sapsolution from "@/Assets/sap-solution.png";
import intelligence from "@/Assets/intelligence.png";
import geographical from "@/Assets/geographical.png";
import embeddedS from "@/Assets/embedded-services-1.png";
import telecommunication from "@/Assets/telecommunication.png";
import financialServices from "@/Assets/financial-services.png";
import insurance from "@/Assets/insurance.png";
import manufaturing from "@/Assets/manufaturing-retail.png";
import government from "@/Assets/government.png";
import offshore from "@/Assets/offshore.png";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  // Add your styles here
  gridcontainer: {
    "&.MuiGrid-container": {
      overFlowX: "hidden",
    },
  },
  leftWrapper: {
    padding: spacing(12, 7.5),
    [breakpoints.down("sm")]: {
      padding: spacing(10, 2.5),
    },
  },
  bannerImg: {
    width: "100%",
  },
  button: {
    borderRadius: 20,
  },
  title: {
    color: "#1745a1",
    fontSize: 24,
    fontWeight: 600,
  },
  aboutwrapper: {
    backgroundColor: "#1745a1",
    color: "#fff",
    textAlign: "center",
  },
  Bottomline: {
    border: "3px solid #41d041",
    width: "40%",
    marginLeft: "30%",
    marginBottom: "-16px",
  },
  p1: {
    padding: 20,
    fontSize: 16,
    fontFamily: "-webkit-pictograph",
    letterSpacing: 1,
    lineHeight: "1.9",
  },
  p2: {
    fontSize: 16,
    fontFamily: "-webkit-pictograph",
    letterSpacing: 1,
    lineHeight: 1.9,
  },
  root: {
    flexGrow: 1,
    width: "96%",
    marginLeft: 26,
  },
  section2: {
    flexGrow: 1,
    width: "96%",
    marginLeft: 26,
    marginTop: "-3%",
  },
  spaper: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: 40,
    // border: "1px solid #ccc",
    // "&:hover": {
    //   backgroundColor: "transparent",
    // },
  },
  sImg: {
    maxWidth: "100%",
    borderRadius: 8,
  },
  imgWrapper: {
    backgroundColor: "green",
    width: 73,
    height: 73,
    textAlign: "center",
    padding: 10,
    borderRadius: 50,
    cursor: "pointer",
  },
  ExpimgWrapper: {
    // backgroundColor: "green",
    width: 73,
    height: 73,
    textAlign: "center",
    padding: 10,
    borderRadius: 50,
    cursor: "pointer",
  },
  osImg: {
    marginBottom: "-41px",
    maxWidth: "60%",
  },
  osMainWrapper: {
    backgroundColor: "#c2c2fff",
  },
  osSection1: {
    width: "98%",
    marginLeft: 60,
    marginTop: 30,
  },
  osSection2: {
    width: "98%",
    marginLeft: 60,
    marginTop: 30,
  },
  osp: {
    color: "green",
    fontSize: 14,
    fontFamily: "serif",
    textAlign: "-webkit-left",
  },
  list: {
    position: "relative",
    whiteSpace: "nowrap",
    fontSize: 0,
    "&>li": {
      display: " inline-block",
      display: "flex",
      whiteSpace: "normal",
      verticalAlign: "middle",
      padding: 10,
    },
  },
}));

const loginFormSkelton = [
  {
    variant: "rect",
    width: 300,
    height: 30,
    style: { marginBottom: 8 },
  },
  {
    variant: "rect",
    width: 300,
    height: 30,
    style: { marginBottom: 8 },
  },
  {
    variant: "rect",
    width: 80,
    height: 35,
    style: { margin: "20px auto 0" },
  },
];

type Props = {};

const Home = (props: Props): Node => {
  const classes = useStyles();
  const { Layout } = useAtom();
  // const [error, setError] = useState("");
  const { options } = props;

  return (
    <React.Fragment>
      <Grid container spacing={0} className={classes.gridcontainer}>
        <Grid item xs={12} md={12}>
          <Paper>
            <Box>
              {/* Banner Section  */}
              <Box>
                <img src={bannerImg} className={classes.bannerImg} />
                <Box textAlign="center" mt="-15px">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Read more
                  </Button>
                </Box>
                {/* About Section */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    About Us
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                <Box className={classes.aboutwrapper}>
                  <p className={classes.p1}>
                    RiVi Consulting Group L.L.C (RiVi) is a strategic technology
                    partner helping companies achieve operational excellence.
                    RiVi is a technology solutions provider for various industry
                    verticals. Founded in 2002 and located in Alpharetta,
                    Georgia.
                  </p>
                  <p className={classes.p2}>
                    RiVi’s dedication to quality has earned it a strong
                    reputation for excellence and customer satisfaction. RiVi
                    team offers seasoned professionals whose treasured qualities
                    are based on outstanding services, reliability, and honesty.
                    Our value-added business approach stresses long-term
                    customer relationships, a thorough understanding of our
                    customer’s missions, a quick response to rapidly shifting
                    business environments, and on-time/on-budget, delivery of
                    quality products and services. RiVi is on a path toward
                    success, it has shown a positive trend in both sales and
                    profits since the inception of the business.
                  </p>
                  <br />
                </Box>
                {/* services Section     */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    Services
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                {/* section 1 */}
                <Box className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={iotImg} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={InvestranImg} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={EnterpriseImg} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={MachineLImg} className={classes.sImg} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* section 2 */}
                <Box className={classes.section2}>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={Cloudcomputing} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={Staffing} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={Testing} className={classes.sImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box className={classes.spaper}>
                        <img src={CloudSecurity} className={classes.sImg} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* other services section  start */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    Other services
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                <br />
                <Box className={classes.osMainWrapper}>
                  {/* section 1 start */}
                  <Box className={classes.osSection1}>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={strategy} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            Strategy &amp; Management Consulting
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={system} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            System Integration/ Applications Development
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={program} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>Program Management</p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img
                              src={infrastructure}
                              className={classes.osImg}
                            />
                          </Box>
                          <p className={classes.osp}>
                            IT Infrastructure Program
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={security} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>Infrastructure Security</p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={dashboards} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            Executive Dashboards/ Data Warehouse
                          </p>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* section1 end */}
                  {/* section 2  start*/}
                  <Box className={classes.osSection2}>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={recovery} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>Disaster Recovery</p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={oracle} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            Oracle/PeopleSoft Solutions
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={sapsolution} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>SAP Solutions</p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={intelligence} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            Intelligence Transportation Systems
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={geographical} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>
                            Geographical Information Systems
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Box>
                          <Box className={classes.imgWrapper}>
                            <img src={embeddedS} className={classes.osImg} />
                          </Box>
                          <p className={classes.osp}>Embedded Service</p>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* section2 end */}
                </Box>
                {/* otherservices   end */}
                {/* Expertise section  start */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    Expertise
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                <br />
                <Box className={classes.osSection1}>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img
                            src={telecommunication}
                            className={classes.osImg}
                          />
                        </Box>
                        <p className={classes.osp}>Telecommunications</p>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img
                            src={financialServices}
                            className={classes.osImg}
                          />
                        </Box>
                        <p className={classes.osp}>Financial Services</p>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img src={insurance} className={classes.osImg} />
                        </Box>
                        <p className={classes.osp}>Insurance</p>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img src={manufaturing} className={classes.osImg} />
                        </Box>
                        <p className={classes.osp}>Manufacturing / Retail</p>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img src={government} className={classes.osImg} />
                        </Box>
                        <p className={classes.osp}>Government</p>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        <Box className={classes.ExpimgWrapper}>
                          <img src={offshore} className={classes.osImg} />
                        </Box>
                        <p className={classes.osp}>OffShore</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* expertise section end */}
                {/* Testimonials section  start */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    Testimonials
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                <br />
                <Box>
                  <SwipeableTextMobileStepper />
                </Box>
                {/* Testimonials section  end */}
                {/* Our Clients section  start */}
                <Box height="120px"></Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    component="subtitle"
                    className={classes.title}
                  >
                    Our Clients
                  </Typography>
                </Box>
                <br />
                <Box className={classes.Bottomline}></Box>
                <br />
                <OurClients />

                {/* Our Clients section  end */}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
