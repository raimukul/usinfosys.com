import React from "react";
import Carousel from "./Carousel";
import HowWeDeliver from "./HowWeDeliver";
import WhatOurClientsSay from "./WhatOurClientsSay";
import ClientExperience from "./ClientExperience";
import CandidateExperience from "./CandidateExperience";


export default function Index() {
  return (
    <div>
      <Carousel />
      <HowWeDeliver />
      <ClientExperience />
      <CandidateExperience />
      <WhatOurClientsSay />
    </div>
  );
}
