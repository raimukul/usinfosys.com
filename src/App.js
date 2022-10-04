import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import "./App.css"
import Index from "./components/homePage/Index";
import ConsultingServices from "./components/services/ConsultingServices/Index";
import DatabaseServices from "./components/services/DatabaseServices/Index";
import NetworkingServices from "./components/services/NetworkingServices/Index";
import StaffingServices from "./components/services/StaffingServices/Index";
import TestingServices from "./components/services/TestingServices/Index";
import WhyJoinUS from "./components/services/WhyJoinUs";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import TestingandQualityControl from "./components/solutions/TestingandQualityControl";
import DataWarehouse from "./components/solutions/DataWarehouse";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<WhyJoinUS />} />
          <Route path="/services/consulting-services" element={<ConsultingServices />} />
          <Route path="/services/database-services" element={<DatabaseServices />} />
          <Route path="/services/networking-services" element={<NetworkingServices />} />
          <Route path="/services/staffing-services" element={<StaffingServices />} />
          <Route path="/services/testing-services" element={<TestingServices />} />
          <Route path="/solution/testing-quality" element={<TestingandQualityControl />} />
          <Route path="/solution/dataware-house" element={<DataWarehouse/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
