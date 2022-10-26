import React from "react";
import Banner from "./Banner";
import About from "./About";
import ContractStaffing from "./ContractStaffing";
import PermanentStaffing from "./PermanentStaffing";
import Methodologies from "./Methodologies";

export default function Index() {
  return (
    <div>
      <Banner />
      <div className="container">
        <About />
        <ContractStaffing/>
        <PermanentStaffing/>
        <Methodologies/>
      </div>
    </div>
  );
}
