import { Card, List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; 

export default function BusinessIntelligence() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/solution/Business Intelligence.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Business Intelligence (BI)</h1>
              <p className="lead text-secondary my-5">
                A broad category of computer software solutions that enables a
                organization to gain data insight into its critical operations
                through reporting applications and analysis tools. BI
                applications may include a variety of components such as tabular
                reports, spreadsheets, charts, and dashboards. Well-designed BI
                applications can give the ability to make better decisions by
                quickly understanding the historical data.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get Solution
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <Card className="p-2">
              <List>
                <ListItem>
                  These data can include the data from customer databases,
                  supply chain information, personnel data, manufacturing,
                  product data, sales and marketing activity, as well as any
                  other source of information critical to your operation. A
                  robust BI application, which includes integration and data
                  cleansing functions, can allow integrating these disparate
                  data sources into a single coherent framework for real-time
                  reporting and detailed analysis by anyone in organization.
                </ListItem>
                <ListItem>
                  AIS provides the experts to its clients with solid,
                  sophisticated, customized technology and management solutions
                  knowledge to taking care of mission critical issues.
                </ListItem>
                <ListItem>
                  AIS focuses on supplying the experts to supporting public and
                  private sector clients requiring mission critical technology
                  and management support. Our experts focused on cloud business
                  intelligence, or cloud BI and providing a faster, more agile,
                  and more cost-effective way for organizations to take
                  advantage of advanced reporting and analysis solutions. Cloud
                  business intelligence offers many benefits. Because the
                  installation, testing, and ongoing maintenance of all related
                  infrastructure is outsourced to a third-party, cloud business
                  intelligence allows companies to avoid huge upfront costs,
                  ensure rapid implementation and rollout, reduce project risk,
                  minimize the time and effort required for administration.
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
