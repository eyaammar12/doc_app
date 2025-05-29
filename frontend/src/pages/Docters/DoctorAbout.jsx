/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const DoctorAbout = ({name,about, qualifications, experiences}) => {
  return (
    <>
        <div >
            <h3 className="text-[24px] font-bold text-[#181A1E] mb-4">About <span className='text-[#0067FF]'>{name}</span> </h3>
            {/* Introduction */}
            <p className="text-[16px] text-[#424242] leading-7 mb-6">
               {about}
            </p>

            {/* Education Section */}
            <h4 className="text-[20px] font-semibold text-[#181A1E] mb-2">
                Education {/*-------qualification*/}
            </h4>
            <ul className="pt-4 md:p-5">  
                {qualifications?.map((item, index) => (  
                <li  
                    key={index}  
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">  
                    <div>  
                        <span className="text-[#01B5C5] text-[15px] leading-6 font-semibold">  
                        {item.startingDate} - {item.endingDate}  
                        </span>  
                        <p className="text-[16px] leading-6 font-medium text-[#4E545F]">  
                        {item.degree}  
                        </p>  
                    </div>  
                    <p className="text-[14px] leading-5 font-medium text-[#4E545F]">  
                    {item.university}  
                    </p>  
                </li>  
                ))}  
            </ul>

            {/* Experience Section */}
            <h3 className="text-[20px] leading-[30px] text-[#181A1E] font-semibold">  
            Experience  
            </h3>  
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">  
                {experiences?.map((item, index)=>(  
                <li key={index} className="p-4 rounded bg-[#fff9ea]">  
                    <span className="text-[#FEB60D] text-[15px] leading-6 font-semibold">  
                    {item.startingDate} -{" "}  
                    {item.endingDate}  
                    </span>  
                    <p className="text-[16px] leading-6 font-medium text-[#4E545F]">  
                    {item.position}  
                    </p>  
                    <p className="text-[14px] leading-5 font-medium text-[#4E545F]">  
                    {item.hospital}  
                    </p>  
                </li>  
                ))}  
            </ul>  


        
        </div>

    
    
    
    
    
    
    
    </>
  )
}

export default DoctorAbout