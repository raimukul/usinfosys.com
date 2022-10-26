import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const testingTypes = [
  {
    id: 1,
    type: "Functional testing",
    details:
      "Functional testing is a business imperative for all projects – new, large and long-duration engagements. Companies need to enhance the effectiveness and efficiency of functional testing by focusing on accelerated and optimized testing. The AIS functional testing methodology is well structured and easily adaptable for any type of project. It introduces testing early in the software development life cycle (SDLC) to identify defects at the initial stage. We deploy the latest in testing techniques and tools to improve the quality from the beginning. AIS risk-driven functional testing methodology ensures optimal test coverage including negative and boundary conditions and discovers defects early in the test life cycle.",
  },
  {
    id: 2,
    type: "Security Testing",
    details:
      "AIS Security Testing and Validation Services adopt an end-to-end approach for vulnerabilities undermine the security of applications. Since a majority of these vulnerabilities are found in the application layer, application security testing is really needed to be tested. Security testing is now being rapidly integrated with mainstream quality assurance (QA) activities for any organization. AIS combine best practices such as white box, gray box, and black box testing. A comprehensive testing mechanism integrates with industry best practices such as the open Web application security project (OWASP), SANS and open-source security testing methodology manual (OSSTMM).",
  },
  {
    id: 3,
    type: "SOA and Middleware Testing",
    details:
      "Traditional test validation approaches and tools are often incapable of providing high test coverage, consistency, repeatability and time to market. AIS SOA and Middleware Testing and Validation Services help companies minimize risks, optimize costs, and increase agility of their SOA implementations. We combine an early life cycle approach to functional validation across multiple layers of the systems architecture with a comprehensive non-functional testing approach. Different tools along with established processes enable companies to successfully validate their SOA transformation programs, enterprise messaging middleware implementations, legacy modernization initiatives, and other technology and business initiatives. Significantly, our approach allows clients to achieve business agility and acquire the ability to deploy products rapidly. AIS helps in automating regression and performance testing of services and middleware components.",
  },
  {
    id: 4,
    type: "Usability and Accessibility Testing",
    details:
      "AIS Usability and Accessibility Testing and Validation Services enhance the usability and accessibility of content for websites, intranet or mobile applications. The validation and verification services ensure an enhanced customer experience, and compliance with regulations, industry standards, and guidelines.",
  },
  {
    id: 5,
    type: "Data Warehouse Testing",
    details:
      "Information stored in a data warehouse is critical to organizations for decision-making and predictive analysis. The huge volume of data into data warehouse makes exhaustive manual comparison of data impractical. The existing quality tools are either manual or have other limitations, and do not cover all aspects of data warehouse testing. AIS approach of data warehouse testing help clients to test the high-volume data and insure the quality of data into data warehouse (DW) or business intelligence (BI) architecture. AIS Data Warehouse Testing approach includes automation of data warehouse test processes, enables extensive reuse of test components, ensures early detection of data defects, and provides complete traceability. This solution follows a well-structured model to validate ETL transformation rules, data, enhance quality and accelerate the testing process.",
  },
  {
    id: 6,
    type: "Regression Testing",
    details:
      "Regression Testing Services at AIS are based on the principle of achieving more with less – providing maximum test coverage with minimum number of test cases leading to a minimal cost of appraisal and risk. AIS rich set of techniques and practices to reduce the manual and automated test cycle time. AIS regression testing solutions help client to determine and ensure optimal coverage at a minimal cost and identify when to stop testing, and help prioritize, optimize and sequence the regression test suite. AIS approach for regression testing helps QA teams strike a fine balance between test selection and fault detection. It prioritizes testing in a manner that minimizes the risk of defect leakage into production. It’s help clients to achieve risk-free regression testing at an optimal cost and provide precision in regression testing to facilitate maximum coverage through minimal number of test cases. Finally it’s helps to increase the productivity and efficiency of quality assurance applications",
  },
  {
    id: 7,
    type: "Performance Testing",
    details:
      "Performance testing is a critical part of application testing services since it affects business revenue, credibility of the organization, and customer satisfaction. Traditional performance testing approaches are reactive in nature – where applications are built first, and tested and tuned later. Such approaches increase testing costs and prolong the time to market. AIS Performance Testing and Validation services blend performance testing utilizing the best techniques and approaches early in to the project for new and existing applications. AIS Predictive Performance Model predicts application performance before deployment into production, and performs a ‘what-if’ analysis of potential hardware configuration",
  },
  {
    id: 8,
    type: "Test Data Management",
    details:
      "Quality data is a must and required for testing business functionality in the test environment. However, managing and using quality of data is often challenging due to complex relationships, limited infrastructure, sensitivity of data, and the lack of data conforming to business rules. AIS Test Data Management prides a comprehensive approach to ensure a high degree of test data coverage, by providing the right data, in the right quantity, and at the right time, in a non-production environment. AIS Rich experience from previous testing engagements involving test data management aspects involve end-to-end approach of data creation and data masking including test data generation.",
  },
];
export default function TestingTypes() {
  return (
    <div className="container">
      {testingTypes.map((testing) => {
        return (
          <Accordion id={testing.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-red"
            >
              <Typography sx={{ flexShrink: 0, fontWeight: 500 }}>
                {testing.type}
              </Typography>
            </AccordionSummary>
            <AccordionDetails id={testing.id}>
              <Typography>{testing.details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
