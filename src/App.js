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
import About from "./components/about/Index";
import Contact from "./components/contact/Contact";
import TestingandQualityControl from "./components/solutions/TestingandQualityControl";
import DataWarehouse from "./components/solutions/DataWarehouse";
import BusinessIntelligence from "./components/solutions/BusinessIntelligence";
import EBusiness from "./components/solutions/EBusiness";
import QaTraining from "./components/training/QaTraining";
import DbaTraining from "./components/training/DbaTraining";
import EnrollmentForm from "./components/enrollmentForm/Index";
import WhyJoinUs from './components/career/WhyJoinUs'
import ReferralProgram from "./components/career/ReferralProgram";
import CurrentOpening from "./components/career/CurrentOpening";
import Testimonial from './components/testimonials/Index'
import Error404 from "./components/Error/Error404";
import SubmitResume from './components/submitResume/Index'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/consulting-services" element={<ConsultingServices />} />
          <Route path="/services/database-services" element={<DatabaseServices />} />
          <Route path="/services/networking-services" element={<NetworkingServices />} />
          <Route path="/services/staffing-services" element={<StaffingServices />} />
          <Route path="/services/testing-services" element={<TestingServices />} />
          <Route path="/solution/testing-quality" element={<TestingandQualityControl />} />
          <Route path="/solution/dataware-house" element={<DataWarehouse/>} />
          <Route path="/solution/business-intelligence" element={<BusinessIntelligence/>} />
          <Route path="/solution/e-business" element={<EBusiness/>} />
          <Route path="/training/qa-training" element={<QaTraining/>} />
          <Route path="/training/enroll" element={<EnrollmentForm/>} />
          <Route path="/training/dba-training" element={<DbaTraining/>} />
          <Route path="/career/why-join-us" element={<WhyJoinUs/>} />
          <Route path="/career/current-opening" element={<CurrentOpening/>} />
          <Route path="/career/referral" element={<ReferralProgram/>} />
          <Route path="/submit_resume" element={<SubmitResume/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Testimonial />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
