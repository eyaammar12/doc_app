/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor ,doctorId }) => {
    const {
        name,
        avgRating,
        totalRating,
        photo,
        specialization,
        totalPatient,
        hospital,
        experiences
    } = doctor;

    return (
        <div className="p-3 lg:p-5 border rounded-lg shadow-md bg-white">
            <div>
                <img src={photo} className="w-full rounded-t-lg" alt={`${name}`} />
            </div>
            <div className="p-3 text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-500">{specialization}</p>
                <p className="mt-2 text-sm text-gray-400">
                    Hospital: {experiences && experiences[0]?.hospital} 
                </p>
                <p className="mt-2 text-yellow-500">
                    ⭐ {avgRating} ({totalRating} reviews)
                </p>
                
            </div>
            <Link to={`/doctors/${doctor._id}`} className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-[#0067FF] hover:border-none">
                <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
             </Link>
            
        </div>
    );
};

export default DoctorCard;
