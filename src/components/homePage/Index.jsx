import React from 'react'
import Carousel from './Carousel'
import HowWeDeliver from './HowWeDeliver'
import WhatOurClientsSay from './WhatOurClientsSay'
// import Test from './Test'

export default function Index() {
  return (
    <div>
      <Carousel/>
      {/* <Test/> */}
      <HowWeDeliver/>
      <WhatOurClientsSay/>
    </div>
  )
}
