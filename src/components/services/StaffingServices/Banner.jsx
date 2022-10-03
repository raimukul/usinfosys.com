import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../networking/staffing services.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Staffing service</h1>
              <p className="lead text-secondary my-5">
                AIS is a solutions-based consulting firm that delivers real
                Business Solutions to help our customers achieve Real Business
                Success! AIS provides a range of solutions from individual
                resources for specific needs to managed project teams focused on
                business and/or technology transformation
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
