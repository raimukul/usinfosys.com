import React from 'react'
import Body from './About'
import Banner from './Banner'
import ConsultingServices from './ConsultingServices'

export default function Index() {
  return (
    <div>
        <Banner/>
        <div className="container">
        <Body/>
        <ConsultingServices/>
        </div>
    </div>
  )
}
