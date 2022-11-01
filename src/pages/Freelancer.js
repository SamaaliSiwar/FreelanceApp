import CarouselSlide from 'components/Carousel'
import DefaultFooter from 'components/DefaultFooter'
import OfferDetails from 'components/Freelancer/OfferDetails'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import React from 'react'

export default function Freelancer() {
  return (
    <>
     <Breadcrumb style={{marginTop:'6%'}}>
      <Breadcrumb.Item href="/">App Name</Breadcrumb.Item>
      <Breadcrumb.Item href="/posts">
        Posts
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Post Détails</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{display:'flex' ,flexDirection:'column' ,alignItems:'center'}}>
    <h2 class="text-2xl font-bold leading-7 text-yellow-700 sm:truncate sm:text-3xl sm:tracking-tight">Post Détail</h2>
    </div>

<OfferDetails />

<CarouselSlide/>
      <DefaultFooter/>


    </>
  )
}
