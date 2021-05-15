// @flow
import React from "react";
import type { Node } from "react";
import { Router } from "@reach/router";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

//Local Imports
import { useAtom } from "@/Components/Atom";
// import { Header } from "@/Components/Molecules";
import Home from "./Home";
import ContactPage from "@/Pages/Contact";
import AboutPage from "@/Pages/About";
import Careers from "@/Pages/Careers";
import Casestudies from "@/Pages/CaseStudies";
import Expertise from "@/Pages/Expertise";
import Services from "@/Pages/Services";
import AboutUs from "@/Pages/About/AboutUs";
import ServicesPage from "@/Pages/Services/Services";
import ExpertisePage from "@/Pages/Expertise/Expertise";
import CasestudiesPage from "@/Pages/CaseStudies/CasestudiesPage";
import CareersPage from "@/Pages/Careers/Careers";

import { Header } from "@/Components/Organisms/Header";
import { Footer } from "@/Components/Organisms/Footer";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  // Add your styles here
  leftWrapper: {
    padding: spacing(12, 7.5),
    [breakpoints.down("sm")]: {
      padding: spacing(10, 2.5),
    },
  },
}));

const options = [
  {
    key: "home",
    label: "Home",
    path: "/",
    exact: true,
  },
  {
    key: 0,
    label: "ABOUT US",
    ExpandLess: <ExpandLess />,
    ExpandMore: <ExpandMore />,
    path: "/about",
    exact: true,
    items: [
      {
        key: "CapabilityStatement",
        label: "Capability Statement",
      },
      {
        key: "Clients",
        label: "Clients",
        path: "/about/clients",
      },
      {
        key: "Partners",
        label: "Partners",
        path: "/about/partners",
      },
      {
        key: "Testimonials",
        label: "Testimonials",
        path: "/about/testimonials",
      },
    ],
  },

  {
    key: 1,
    label: "SERVICES",
    ExpandLess: <ExpandLess />,
    ExpandMore: <ExpandMore />,
    path: "/services",
    exact: true,
    items: [
      {
        key: "Strategy-management-consulting",
        label: "Strategy-management-consulting",
        path: "/services/Strategy_Management_Consulting",
      },
      {
        key: "System-Integration",
        label: "System Integration / Applications Development",
        path: "/services/System_Integration_Applications_Development",
      },
      {
        key: "ProgramManagement",
        label: "Program Management",
        path: "/services/Program_Management",
      },
      {
        key: "ITInfrastructure",
        label: "IT Infrastructure Program",
        path: "/services/IT_Infrastructure_Program",
      },
      {
        key: "InfrastructureSecurity",
        label: "Infrastructure Security",
        path: "/services/Infrastructure_Security",
      },
      {
        key: "ExecutiveDashboards",
        label: "Executive Dashboards / Data Warehouse",
        path: "/services/Executive_Dashboards",
      },
      {
        key: "DisasterRecovery",
        label: "Disaster Recovery",
        path: "/services/Disaster_Recovery",
      },
      {
        key: "OraclePeopleSoft",
        label: "Oracle/PeopleSoft Solutions",
        path: "/services/Oracle_PeopleSoft_Solutions",
      },
      {
        key: "SAPSolutions",
        label: "SAP Solutions",
        path: "/services/SAP_Solutions",
      },
      {
        key: "IntelligenceTransportation",
        label: "Intelligence Transportation Systems",
        path: "/services/Intelligence_Transportation_Systems",
      },
      {
        key: "GeographicalInformation",
        label: "Geographical Information Systems",
        path: "/services/Geographical_Information_Systems",
      },
      {
        key: "Embedded Services",
        label: "Embedded Services",
        path: "/services/Embedded_Services",
      },
      {
        key: "IOT",
        label: "IOT",
        path: "/services/IOT",
      },
      {
        key: "EnterpriseSecurity",
        label: "Enterprise Security",
        path: "/services/Enterprise_Security",
      },
      {
        key: "MachineMachine",
        label: "Machine to Machine Learning",
        path: "/services/Machine_to_Machine_Learning",
      },
      {
        key: "CloudImplementation",
        label: "Cloud Implementation",
        path: "/services/Cloud_Implementation",
      },
      {
        key: "Investran",
        label: "Investran",
        path: "/services/Investran",
      },
      {
        key: "Staffing",
        label: "Staffing",
        path: "/services/Staffing",
      },
      {
        key: "Testing",
        label: "Testing",
        path: "/services/Testing",
      },
      {
        key: "CyberSecurity",
        label: "Cyber Security",
        path: "/services/Cyber_Security",
      },
      {
        key: "WebDevelopment",
        label: "Web Development",
        path: "/services/Web_Development",
      },
      {
        key: "AppDevelopment",
        label: "App Development",
        path: "/services/App_Development",
      },
      {
        key: "DigitalMarketing",
        label: "Digital Marketing",
        path: "/services/Digital_Marketing",
      },
    ],
  },

  {
    key: 2,
    label: "EXPERTISE",
    ExpandLess: <ExpandLess />,
    ExpandMore: <ExpandMore />,
    path: "/expertise",
    exact: true,
    items: [
      {
        key: "Telecommunications",
        label: "Telecommunications",
        path: "/expertise/Telecommunications",
      },
      {
        key: "FinancialServices ",
        label: "Financial Services",
        path: "/expertise/Financial_Services",
      },
      {
        key: "Insurance",
        label: "Insurance",
        path: "/expertise/Insurance",
      },
      {
        key: "ManufacturingRetail",
        label: "Manufacturing / Retail",
        path: "/expertise/Manufacturing_Retail",
      },
      {
        key: "Government",
        label: "Government",
        path: "/expertise/Government",
      },
      {
        key: "OffShore",
        label: "OffShore",
        path: "/expertise/OffShore",
      },
    ],
  },
  {
    key: 3,
    label: "CASESTUDIES",
    ExpandLess: <ExpandLess />,
    ExpandMore: <ExpandMore />,
    path: "/casestudies",
    exact: true,
    items: [
      {
        key: "StrategyManagement",
        label: "Strategy & Management Consulting",
        path: "/casestudies/Strategy_Management_Consulting",
      },
      {
        key: "EnterpriseandSOA",
        label: "Enterprise Architecture and SOA",
        path: "/casestudies/Enterprise_Architecture_SOA",
      },
      {
        key: "BusinessIntelligence",
        label: "Business Intelligence",
        path: "/casestudies/Business_Intelligence",
      },
      {
        key: "EnterprisePortals",
        label: "Enterprise Portals Solutions",
        path: "/casestudies/Enterprise_Portals_Solutions",
      },
      {
        key: "CRM",
        label: "Customer Relationship Management (CRM)",
        path: "/casestudies/Customer_Relationship_Management",
      },
      {
        key: "ERP",
        label: "Enterprise Resource Planning",
        path: "/casestudies/Enterprise_Resource_Planning",
      },
    ],
  },
  {
    key: 4,
    label: "CAREERS",
    ExpandLess: <ExpandLess />,
    ExpandMore: <ExpandMore />,
    path: "/careers",
    exact: true,
    items: [
      {
        key: "CurrentOpenings",
        label: "Current Openings",
        path: "/careers/Current_Openings",
      },
      {
        key: "SendYourResume",
        label: "Send Your Resume",
        path: "/careers/Send_Your_Resume",
      },
    ],
  },
  {
    key: 5,
    label: "CONTACT US",
    path: "/contact",
    exact: true,
  },
];

type Props = {};

const Main = (props: Props): Node => {
  const classes = useStyles();
  const { Layout } = useAtom();

  return (
    <React.Fragment>
      <Grid container spacing={0} className={Layout.fullVHeight}>
        <Grid item xs={12} md={12}>
          <Paper className={Layout.fullHeight}>
            <Box>
              <Header options={options} />

              <Router>
                <Home options={options} path="/" />
                <AboutUs path="about" />
                <ServicesPage path="services" />
                <ExpertisePage path="expertise" />
                <CasestudiesPage path="casestudies" />
                <CareersPage path="/careers" />
                <AboutPage path="about/*" />
                <Careers path="careers/*" />
                <ContactPage path="contact/*" />
                <Casestudies path="casestudies/*" />
                <Expertise path="expertise/*" />
                <Services path="services/*" />
              </Router>
              <Footer />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
