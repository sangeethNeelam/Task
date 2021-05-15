import React from "react";
import { Router } from "@reach/router";

// localImports
import StrategyManagementConsulting from "./StrategyManagementConsulting";
import EnterpriseArchitecture from "./EnterpriseArchitecture";
import BusinessIntelligence from "./BusinessIntelligence";
import EnterprisePortalsSolutions from "./EnterprisePortalsSolutions";
import CustomerRelationship from "./CRM";
import EnterpriseResource from "./EnterpriseResource";

const Casestudies = () => {
  return (
    <React.Fragment>
      <Router>
        <StrategyManagementConsulting path="Strategy_Management_Consulting" />
        <EnterpriseArchitecture path="Enterprise_Architecture_SOA" />
        <BusinessIntelligence path="Business_Intelligence" />
        <EnterprisePortalsSolutions path="Enterprise_Portals_Solutions" />
        <CustomerRelationship path="Customer_Relationship_Management" />
        <EnterpriseResource path="Enterprise_Resource_Planning" />
      </Router>
    </React.Fragment>
  );
};

export default Casestudies;
