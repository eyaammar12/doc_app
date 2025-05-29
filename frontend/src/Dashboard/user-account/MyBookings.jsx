/* eslint-disable no-unused-vars */
import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/Doctors/DoctorCard'

const MyBookings = () => {
    const { data: appointments } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  
    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.length > 0 ? (
            appointments.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))
          ) : (
            <h2 className="text-center mt-5 leading-7 text-[20px] font-semibold text-[#727272]">
              You did not book any doctor Yet!
            </h2>
          )}
        </div>
      </div>
    );
  };
  

export default MyBookings