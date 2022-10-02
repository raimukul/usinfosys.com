import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ConsultingServices.css";

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
              <h1 className="mt-3">Consulting Services</h1>
              <p className="lead text-secondary my-5">
                AIS Consulting Services help clients solve their Software
                Quality Assurance challenges and achieve the quality goal. Our
                Consulting offerings are based on years of progressive
                experience assisting customers to meet their quality needs.
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
