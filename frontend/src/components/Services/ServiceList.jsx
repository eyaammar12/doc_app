/* eslint-disable no-unused-vars */
import React from 'react'
import { services } from "./../../assets/data/services";
import ServiceCard from "./ServiceCard";
const ServiceList = () => {
  return (
     // Wrapper container to center the grid
    <div className="max-w-[1440px] mx-auto px-5">
     {/* Grid container for the cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
       {services.map((item, index) => (
         <ServiceCard item={item} index={index} key={index} />
       ))}
     </div>
   </div>
 );
  
}

export default ServiceList