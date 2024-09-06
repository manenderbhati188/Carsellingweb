import React from 'react'
import Buycar from './Buycar'
import carsdata from '../Data/CarsData'
const Featurecar = () => {
  return (
    <div>
      <Buycar value={carsdata} title={"Feature Cars"}/>
    </div>
  )
}

export default Featurecar