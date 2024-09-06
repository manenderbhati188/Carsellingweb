import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cars from '../Data/Allcarsinone';
import review from '../Data/Review';
const CarDetail = (props) => {
  const { carname } = useParams(); 
  const car = cars.find((car) => car.name === carname); 

  return (
    <div className="container mx-auto p-6 mt-16">
      <div className="flex flex-col md:flex-row  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={car.image} 
            alt={car.name} 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{car.name}</h1>
          <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐ <span className="text-gray-600 text-sm">(1.3k Reviews)</span></p>
          <p className="text-gray-700 text-base mb-4">{car.about}</p>
          <h2 className="text-2xl font-semibold text-green-600">Price: {car.price}</h2>
          <Link to={"/Login"}>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Book a Test Drive
          </button>
          </Link>
          
        </div>
      </div>

      <div className="mt-10 flex flex-col">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
    {car.name} Specifications & Feature
  </h3>
  <ul className="list-none flex flex-row font-bold gap-8 p-4 flex-wrap">
    <li>Engine Capacity: {car.engineCapacityCC}cc</li>
    <li>Fuel Type: {car.fuelType}</li>
    <li>Top Speed: {car.topspeed} km/h</li>
    <li>Seating Capacity: {car.seatingcapacity} Person</li>
    <li>Doors: {car.door}</li>
    <li>Ground Clearance: {car.GroundClearance} <span>mm</span></li>
    <li>Power: {car.Power} BHP</li>
    <li>Torque: {car.Torque1} <span>NM</span> - {car.Torque2} <span>NM</span></li>
  </ul>
</div>


      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {review.map((i)=>{
            return(
              <div className="flex items-start">
              <div className="bg-gray-300 rounded-full h-12 w-12"></div>
              <div className="ml-4">
              <p className="text-lg font-semibold">{i.name}</p>
              <p className="text-gray-600">{i.review}</p>     
              </div>
            </div>
            )
          })}
        
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
