import React, { useState } from 'react'
import carBrands from '../Data/Carbrand';
const CarBrand = () => {
   const [showall,setShowall]=useState(false);
   const showcars=()=>{
        setShowall(!showall);
   }
  return (
    <div className='w-full flex flex-col justify-center items-center mt-5'>
        <div className={`border w-4/5 flex flex-wrap   gap-2 md:gap-3 justify-between items-center overflow-hidden ${showall ? 'h-auto':'h-56'}`}>
            {carBrands.map((item,index)=>(
                <div key={index} className='flex flex-col justify-center items-center border w-24 p-6 h-22 md:w-44 md:p-4 cursor-pointer gap-2'>
                <img src={item.image} className='w-12'></img>    
                <p className='text-xs w-20 text-center md:text-lg md:w-full'>{item.name}</p>
                </div>
            ))}
        </div>
        <div className='border border-black w-4/5 mb-4 text-center p-3 cursor-pointer' onClick={showcars}>
            {showall?'View Less' : 'View More'}
        </div>
    </div>
  )
}

export default CarBrand

