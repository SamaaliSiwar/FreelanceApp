import DefaultFooter from 'components/DefaultFooter'
import CardCategirie from 'components/offers/CardCategirie'
import AllPost from 'components/Posts/AllPost'
import FilterPostes from 'components/Posts/FilterPostes'
import Headingpost from 'components/Posts/Headingpost'
import React from 'react'

export default function Posts() {
  return (
    <>
        <Headingpost/>

        <CardCategirie/>

       <FilterPostes/>
       <AllPost/>
       <DefaultFooter/>

    </>
  )
}
