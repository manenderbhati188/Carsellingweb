import React, { useState } from "react";
import service from "../Data/carservice";
import logo from "../Data/images/cars logo.png"; // Ensure the image file is correctly named and path is correct.
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faLocationDot,
  faCircleChevronDown,
  faCircleXmark,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [opendash, setDash] = useState(true);

  const opendashboard = () => {
    setDash((prev) => !prev);
  };

  return (
    <div className="w-full z-50 bg-white p-7 fixed top-0 left-0 flex justify-between md:justify-evenly items-center md:p-3">
      <div className="z-50 text-gray-600 text-2xl md:hidden">
        <FontAwesomeIcon
          icon={opendash ? faBars : faCircleXmark}
          onClick={opendashboard}
          className="cursor-pointer"
        />
      </div>

      <div className=" absolute left-1/4 md:flex md:w-1/5 md:justify-center md:items-center md:left-2">
        <Link to="/">
          <img src={logo} className="h-7" alt="Logo" />
         </Link>
      </div>

      

      <div className="hidden md:block md:w-1/4">
        <Searchbar/>
      </div>

     
      <div
        className={`absolute top-0 left-0 w-full h-full bg-slate-200 p-5 gap-8 z-10 md:hidden transition-transform ${
          opendash ? "transform -translate-x-full" : "transform translate-x-0"
        }`}
        >
        {!opendash && (
          <>
            {service.map((item, id) => (
              <div
                key={id}
                className="font-dashboard font-bold flex gap-2 justify-between relative top-10"
              >
                <p>{item.name}</p>
                <FontAwesomeIcon icon={faCircleChevronDown} className="h-3" />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex justify-center items-center gap-8 text-2xl md:w-1/4">
        <div className="cursor-pointer hidden md:block">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="cursor-pointer hidden md:block">

          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className="cursor-pointer">
          <Link to={"/Login"}>
          <FontAwesomeIcon icon={faUser} />
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;