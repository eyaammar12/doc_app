/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BiMenu } from "react-icons/bi";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const Tabs = ({ tab, setTab }) => {

    const {dispatch} = useContext(authContext)
    const navigate = useNavigate(); // Initialize the navigate function



    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"})
        navigate('/login'); // Redirect to the login page after logout
    }





    



  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Menu icon for small screens */}
      <span className="lg:hidden absolute top-4 left-4">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      {/* Centered buttons with spacing */}
      <div className="flex flex-col items-center space-y-4"> {/* Add spacing here */}
        <button onClick={()=>setTab('overview')}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-blue"
              : "bg-white text-gray-800"
          } px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300`}
        >
          Overview
        </button>

        <button onClick={()=>setTab('appointments')}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-blue"
              : "bg-white text-gray-800"
          } px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300`}
        >
          Appointments
        </button>

        <button onClick={()=>setTab('settings')}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-blue"
              : "bg-white text-gray-800"
          } px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300`}
        >
          Settings
        </button>


        <div className='mt-[100px] w-full'>
                <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white '>Delete Account</button>

        </div>
      </div>
    </div>
  );
};

export default Tabs;
