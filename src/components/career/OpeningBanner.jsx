
import React from "react";

export default function OpeningBanner() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/career/JobOpening.svg"
                className="img-fluid opening-banner"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Current Opening</h1>
              <p className="lead text-secondary my-5">
                We are happy to know about your keen interest to pursue a career
                opportunity with American Info Systems. Our current openings
                have been listed below. You can also share your resume via
                email. As we evaluate your profile, we shall get in touch with
                you. <br />
                Thank you once again and wish you all the best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
