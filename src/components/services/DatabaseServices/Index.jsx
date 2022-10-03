import React from "react";
import Banner from "./Banner";
import About from "./About";
import DataBaseManagement from "./DataBaseManagement";
import DatabaseLifeCycleSupport from "./DatabaseLifeCycleSupport";
import DatabaseArchitectureandDesign from "./DatabaseArchitectureandDesign";
import InstallationandUpgrade from "./InstallationandUpgrade";
import ApplicationIntegrationandMigration from "./ApplicationIntegrationandMigration";
import PerformanceMonitoringandTuning from "./PerformanceMonitoringandTuning";
import BackupandRecovery from "./BackupandRecovery";
import DatabaseSecurity from "./DatabaseSecurity";

export default function Index() {
  return (
    <div>
      <Banner />
      <About />
      <DataBaseManagement />
      <DatabaseLifeCycleSupport />
      <DatabaseArchitectureandDesign />
      <InstallationandUpgrade />
      <ApplicationIntegrationandMigration />
      <PerformanceMonitoringandTuning />
      <BackupandRecovery />
      <DatabaseSecurity />
    </div>
  );
}
