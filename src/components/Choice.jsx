// Choice.jsx
import React from 'react';
import service from '../Data/carservice';

const Choice = () => {
  return (
    <div className='h-auto w-full flex flex-wrap gap-2 justify-evenly text-header p-4'>
      {service.map((item, id) => (
        <div key={id} className='border w-14 md:w-24 h-16 flex flex-col justify-center items-center gap-2 shadow:box cursor-pointer md:mb-5'>
          <img src={item.image}></img>  
          <h2 className='font-bold md:font-normal md:text-sm'>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Choice;
