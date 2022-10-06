import React from "react";
import { Link } from "react-router-dom";

export default function EBusiness() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/solution/eBusiness.svg"
                className="img-fluid"
                alt="E-business solution"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">E-business</h1>
              <p className="lead text-secondary my-5">
                E-business derived from such terms as “e-mail” and
                “e-commerce,” is the conduct of business electronically,
                typically over the Internet, not only buying and selling, but
                also servicing customers and collaborating with business
                partners. AIS expects supports the implementation of e-business
                by accelerating business integration by simplifying it using
                cutting edge technology available in market.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
