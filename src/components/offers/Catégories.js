import TeamSection from 'components/landing/TeamSection'
import React from 'react'

import Carousel from 'react-material-ui-carousel'

export default function Catégories() {
 
  return (
    <>
         <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300} >
            <TeamSection/>
         </Carousel>
    </>
   
  )
}
