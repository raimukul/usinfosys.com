import React from "react";
import Banner from "./Banner";
import About from "./About";
import ContractStaffing from "./ContractStaffing";
import PermanentStaffing from "./PermanentStaffing";

export default function Index() {
  return (
    <div>
      <Banner />
      <div className="container">
        <About />
        <ContractStaffing/>
        <PermanentStaffing/>
      </div>
    </div>
  );
}
