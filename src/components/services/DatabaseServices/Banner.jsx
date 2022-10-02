import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <section className="hero-banner bg-light py-2">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="./services/AIS_Consulting_Services.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Database Services</h1>
              <p className="lead text-secondary my-5">
                Turn your organizational data into a strategic asset to making
                decision and grow your business with our database services At
                the core of almost every application in your company lies a
                database. Databases provide the underlying support to your
                customer service, production operations, internal operations,
                sales, and marketing.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
