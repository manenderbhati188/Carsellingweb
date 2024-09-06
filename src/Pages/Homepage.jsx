import React from 'react'
import Banner from '../components/Banner'
import Choice from '../components/Choice'
import Featurecar from '../components/Featurecar'
import Popularcar from '../components/Popularcar'
import CarBrand from '../components/CarBrand'

const Homepage = () => {
  return (
    <div> 
        <Banner/>
        <Choice/>
        <Featurecar /> 
        <Popularcar/>
        <CarBrand/>
    </div>
  )
}

export default Homepage