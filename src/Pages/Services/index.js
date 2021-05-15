import React from "react";
import { Router } from "@reach/router";
// local Imports
import StrategyManagementConsulting from "./StrategyManagementConsulting";
import SystemIntegration from "./SystemIntegration";
import Program from "./Program";
import InfrastructureProgram from "./InfrastructureProgram";
import InfrastructureSecurity from "./InfrastructureSecurity";
import Dashboard from "./Dashboard";
import DisasterRecovery from "./DisasterRecovery";
import Oracle from "./Oracle";
import SAP from "./SAP";
import Intelligence from "./Intelligence";
import Geographical from "./Geographical";
import Embedded from "./Embedded";
import IOT from "./IOT";
import EnterpriseSecurity from "./EnterpriseSecurity";
import Machine from "./Machine";
import CloudImplementation from "./CloudImplementation";
import Investran from "./Investran";
import Staffing from "./Staffing";
import Testing from "./Testing";
import CyberSecurity from "./CyberSecurity";
import Web from "./Web";
import App from "./App";
import Digital from "./Digital";

const Services = () => {
  return (
    <React.Fragment>
      <Router>
        <StrategyManagementConsulting path="Strategy_Management_Consulting" />
        <SystemIntegration path="System_Integration_Applications_Development" />
        <Program path="Program_Management" />
        <InfrastructureProgram path="IT_Infrastructure_Program" />
        <InfrastructureSecurity path="Infrastructure_Security" />
        <Dashboard path="Executive_Dashboards" />
        <DisasterRecovery path="Disaster_Recovery" />
        <Oracle path="Oracle_PeopleSoft_Solutions" />
        <SAP path="SAP_Solutions" />
        <Intelligence path="Intelligence_Transportation_Systems" />
        <Geographical path="Geographical_Information_Systems" />
        <Embedded path="Embedded_Services" />
        <IOT path="IOT" />
        <EnterpriseSecurity path="Enterprise_Security" />
        <Machine path="Machine_to_Machine_Learning" />
        <CloudImplementation path="Cloud_Implementation" />
        <Investran path="Investran" />
        <Staffing path="Staffing" />
        <Testing path="Testing" />
        <CyberSecurity path="Cyber_Security" />
        <Web path="Web_Development" />
        <App path="App_Development" />
        <Digital path="Digital_Marketing" />
      </Router>
    </React.Fragment>
  );
};

export default Services;
