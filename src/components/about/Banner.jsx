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
                src="../../assests/about/Artboard 1WhoWeAre.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Who are we?</h1>
              <p className="lead text-secondary my-5">
                We are a woman-owned business with commitment to provide the
                quality services to our clients. We are not in the business of
                simply selling services but are dedicated to forming
                business-to-business relationships that allow us to provide
                knowledge and skills to our clients with the goal of promoting a
                smoother and more efficient use of latest technology.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get more details.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
