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
                src="../networking/Newtworking services.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Networking Services</h1>
              <p className="lead text-secondary my-5">
                In computer networking, a network service is an application
                running at the network application layer and above, that
                provides data storage, manipulation, presentation, communication
                or other capability which is often implemented using a
                client-server or peer-to-peer architecture based on application
                layer network protocols.
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
