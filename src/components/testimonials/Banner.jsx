import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="hero-banner bg-light">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../../assests/rating/rating.svg"
                className="img-fluid"
                alt="AIS Consulting Services"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-1">Leave feedback</h1>
              <p className="lead text-secondary my-5">
                We are committed to open and accessible service experiences in
                IT sector, and strive for continual improvement of our digital
                presence.
                <br />
                Let us know if you encounter issues with any part of our
                services. We welcome your suggestions for how to make AIS
                service experience even better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
