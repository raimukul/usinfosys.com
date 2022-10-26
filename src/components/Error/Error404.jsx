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
                src="../../assests/error/Artboard 1Erorrsquare.svg"
                className="img-fluid"
                alt="AIS Consulting Services"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Lost Your Way?</h1>
              <p className="lead text-secondary my-5">
              Sorry, we can't find that page. You'll find lots to explore on the home page.
              </p>
              <Link
                to="/"
                className="btn btn-outline-secondary btn-lg border"
              >
                Return to Homepage.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
