import React from 'react';

const Banners = () => {
  return (
    <div className="relative w-full h-full mt-20 mb-7 md:z-10 overflow-hidden">
      <div className="relative flex items-center w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://www.progressivetourtravels.com/images/car-banner.jpg"
          alt="Banner Image"
        />

        <div className="absolute text-sm md:text-6xl text-white">
        <h1>Drive Your Dream</h1>
        <h1>Find the Perfect Car Today</h1>   
        </div>
     
      </div>
    </div>
  );
};

export default Banners;
