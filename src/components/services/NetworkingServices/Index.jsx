import React from "react";
import Banner from "./Banner";
import Body from "./Body";
import NetworkDesignServices from "./NetworkDesignServices";
import NetworkMaintenanceServices from "./NetworkMaintenanceServices";

export default function Index() {
  return (
    <div>
      <Banner />
      <div className="container">
      <Body />
      <NetworkDesignServices />
      <NetworkMaintenanceServices />
      </div>
    </div>
  );
}
