import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="hero-banner bg-light py-1 h-50">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../../assests/training/Artboard 1AIS_TrainingClasss.svg"
                className="img-fluid"
                alt="AIS Consulting Services"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Training Enrollment Form</h1>
              <p className="lead text-secondary my-5">
              Thank you for your interest in American Info Systems Inc.
                Please look for the category that best fits your needs:
              </p>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
