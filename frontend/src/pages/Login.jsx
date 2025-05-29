/* eslint-disable no-unused-vars */
import { useState, useContext } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader"
import React from "react";
import { authContext } from "../context/authContext.jsx";








const Login = () => {  
  const [formData, setFormData] = useState({  
  email: '',  
  password: ''  
  })
  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)





  const handleInputChange = e => {  
  setFormData({ ...formData, [e.target.name]: e.target.value })  
  }  

  const submitHandler = async (event) => {
      event.preventDefault();
      console.log(formData);
      // Add form submission logic here
      setLoading(true)
      try {
        const res = await fetch(`${BASE_URL}/auth/login`,{
          method:'POST',
          headers:{
            'content-Type':'application/json'
          },
          
          body: JSON.stringify(formData)
        })
  
       // Handle response
      const result = await res.json();
      if (res.ok) {
        toast.success(result.message || "login successfully!");
        navigate('/home'); // Only navigate on success

        dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:result.data,
            token: result.token,
            role : result.role,
          }
        });

        console.log(result,"login data")



      } else {
        throw new Error(result.message || "Failed to login!");
      }
  
  
  
      } catch (err) {
        toast.error(err.message)
        setLoading(false)
      }
      
  
    };








  return (  
    <section className="px-5 lg:px-0">  
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">  
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">  
        Hello! <span className="text-primaryColor">Welcome</span> Back 🙌
        </h3>  
        <form className="py-4 md:py-0"  onSubmit={submitHandler}>  
          <div className="mb-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-[#424242] rounded-md cursor-pointer"
                required
              />
          </div>

          <div className="mb-5">
              <input
                type="password"
                placeholder="Enter Your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-[#424242] rounded-md cursor-pointer"
                required
              />
          </div>

          <div className="mt-7">
            <button className="w-full bg-[#0067FF] text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              
              {loading ? <HashLoader size={25} color="#fff"/> : "Login"}
              
            </button>
          </div>

          <p className="mt-5 text-[#424242] text-center">Dont have an account? <Link to="/register" className="text-[#0067FF] font-medium ml-1">Register</Link></p>



        </form>  
      </div>  
    </section>  
  );  
};  
export default Login;