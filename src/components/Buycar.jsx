import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Buycar = (props) => {
  const scrollRef = useRef(null); 

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); 
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };


  const hideScrollbarStyle = {
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  return (
    <div className='flex flex-col items-center w-full border'>
      <div className='text-2xl font-medium m-1'>{props.title}</div>
      <div className='flex items-center w-full mt-8 mb-8'>
        <button 
          className='bg-slate-700 text-white p-2 mx-2 rounded-full w-12 h-12 flex items-center justify-center'
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          style={hideScrollbarStyle}
          className='flex w-full flex-grow'
        >
          <div className='flex gap-16 h-auto'>
            {props.value.map((car, index) => {
              return(
                <Link to={`/Cardetail/${car.name}`}>
                  <div key={index} className='min-w-44 text-left m-1 flex flex-col gap-3 cursor-pointer'>
                  <img src={car.image} alt={car.name} className='w-full h-auto object-cover' />
                  <h1 className='font-bold w-full h-6 overflow-hidden'>{car.name}</h1>
                  <p className='font-medium'>
                    <span className='font-medium'>Capacity</span> {car.engineCapacityCC}
                  </p>
                  <p className='font-bold text-lg'>Price {car.price}</p>
                  <button className='bg-slate-700 text-white p-1 w-full mb-2'>Check Offer</button>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
        <button 
          className='bg-slate-700 text-white p-2 mx-2 rounded-full w-12 h-12 flex items-center justify-center'
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Buycar;
