/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
const Docters = () => {
  const [query,setQuery] =useState('')
  const handleSearch=()=>{
    setQuery(query.trim())
    console.log('handle search')
  }

  const [debounceQuery , setDebounceQuery]=useState("")
  
  const {data: doctors , loading , error} = useFetchData(`${BASE_URL}/doctors?query=${query}`)
  return (
    <>
      
      <section className="bg-[#fff9ea] flex items-center justify-center h-[400px] ">
        <div className="max-w-full w-[1440px] px-5 text-center">
          <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E]">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input 
            
            type="search" 
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" 
            placeholder="Search Doctor by name or specifications ..."
            value={query}
            onChange={e=> setQuery(e.target.value)}
            
            
            />
            <button className="bg-[#0067FF] py-[15px] px-[35px] rounded-r-md text-white font-[600]" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>



      <section>
       
          <div className="container mx-auto p-5">
            { !loading && !error &&
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px]">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>}
          </div>

        
      </section>


      <section>  
          <div className="container">  
            <div className="xl:w-[470px] mx-auto">  
              <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E] text-center">What Our Patients Say</h2>  
              <p className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px] text-center">  
                World-class care for everyone. Our health system offers unmatched, expert health care.  
              </p>  
            </div>
            <Testimonial/>  
          </div>  
        </section>  

    
    </>
  )
}

export default Docters