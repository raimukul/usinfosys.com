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
                src="../networking/Testing Services.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Testing Services</h1>
              <p className="lead text-secondary my-5">
                To ensure reliability, availability and stability of
                applications, enterprises must focus on quality assurance. To
                achieve this, they need to build dedicated quality teams. AIS
                Testing Center of Excellence solution is a robust framework that
                enables enterprises to establish strong quality processes.
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
