import { Card, List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function DataWarehouse() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../database/DataWarehoue.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Data Warehouse</h1>
              <p className="lead text-secondary my-5">
                Data warehousing allows a company or organization to create a
                consolidated view of its enterprise data, optimized for
                reporting and analysis. Basically, a data warehouse is an
                aggregated, sometimes summarized copy of transaction and
                non-transaction data specifically structured for dynamic queries
                and fast, efficient business analytics.
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
                  In data warehousing, data and information are extracted from
                  heterogeneous production data sources as they are generated,
                  or in periodic stages, making it simpler and more efficient to
                  run queries over data that originally came from different
                  sources. Data is turned into high-quality information to meet
                  all enterprise reporting requirements for all levels of users.
                  Interactive content can be delivered to anyone in the extended
                  enterprise – customers, partners, employees, managers, and
                  executives – anytime, anywhere.
                </ListItem>
                <ListItem>
                  AIS offers comprehensive solutions for developing, managing,
                  and optimizing a flexible data architecture that efficiently
                  supports key enterprise information initiatives. AIS experts
                  used the comprehensive set of fully automated tools designed
                  to dramatically simplify data integration, including the
                  creation, maintenance, and expansion of data warehouses, data
                  marts, and operational data stores. Using ETL software to
                  extract, transform, and load data directly into a data
                  warehouse or mart transparently drilling and joining data
                  warehouses to operational data.
                </ListItem>
                <ListItem>
                  Our mission is to act as a strategic business partner with our
                  clients, delivering innovative Data warehouse solutions
                  resulting in a more efficient and effective enterprise. By
                  remaining focused on Data warehouse and Business Intelligence
                  Management solutions, AIS has acquired solid expertise and a
                  track record of successful solutions for our customers.
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
