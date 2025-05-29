/* eslint-disable no-unused-vars */
import React from 'react';   
import { doctors } from './../../assets/data/doctors';  
import DoctorCard from './DoctorCard';  
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
  
const DoctorList = () => {  
  
  return (  <>
    <div className="container mx-auto p-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px]">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  </div>
   </>
  )  
}  
  
export default DoctorList