import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import "./App.css"
import Index from "./components/homePage/Index";
import ConsultingServices from "./components/services/ConsultingServices/Index";
import DatabaseServices from "./components/services/DatabaseServices/Index";
import NetworkingServices from "./components/services/NetworkingServices";
import StaffingServices from "./components/services/StaffingServices";
import TestingServices from "./components/services/TestingServices";
import WhyJoinUS from "./components/services/WhyJoinUs";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
