/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";   
import {BASE_URL,getToken} from "./../../config"
import {toast} from "react-toastify"
  
const SidePanel = ({doctorId , ticketPrice , timeSlots}) => { 
    const token =getToken()
    
    const bookingHandler = async() => {  
        try {  
        const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {  
        method: 'post',  
        headers: {  
        Authorization: `Bearer ${token}`  
        }  
        });  
        const data = await res.json()  
        if (!res.ok) {  
        throw new Error(data.message + 'Please try again')  
        }  
        if (data.session.url) {  
        window.location.href = data.session.url  
        }  
        } catch (err) {  
        toast.error(err.message)  
        }  
        }





return(  
    <div className="shadow-[0px_48px_100px_0px_rgba(17,12,46,0.15)] p-3 lg:p-5 rounded-md">  
        <div className="flex items-center justify-between">  
            <p className="text_para mt-0 font-semibold">Ticket Price</p>  
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">  
                {ticketPrice}$
            </span>  
        </div>  
        <div className="mt-[30px]">  
            <p className="text_para mt-0 font-semibold text-[#181A1E]">  
            Available Time Slots:  
            </p>  
            <ul className="mt-3">
                {timeSlots?.map((item,index)=>(
                    <li key={index} className="flex items-center justify-between mb-2">  
                    <p className="text-[15px] leading-6 text-textColor font-semibold">  
                          {item.day}
                    </p>  
                    <p className="text-[15px] leading-6 text-textColor font-semibold">  
                     {item.startingTime}-{item.endingTime} 
                    </p>  
                    </li> 


                ))}  
                  
 
            </ul>  
        </div>  
        <button onClick={bookingHandler} className="bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] px-2 w-full rounded-md">Book Appointment</button>
    </div>  
    );  
};  
  
export default SidePanel;