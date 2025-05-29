/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import  { useState } from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import avatar from "../../assets/images/user.png";
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL,getToken } from '../../config';
import {toast} from "react-toastify"




const Profile = ({doctorData}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [formData,setFormData]=useState({
        name :"",
        
        phone:"", 
        bio:"",
        gender:"",
        specialization:"",
        ticketPrice:0,
        qualifications:[],
        experiences:[],
        timeSlots:[],
        about:'',
        photo:null,

    })


    useEffect(()=>{
        setFormData({
            name:doctorData?.name,
            email:doctorData?.email,
            phone:doctorData?.phone, 
            bio:doctorData?.bio,
            gender:doctorData?.gender,
            specialization:doctorData?.specialization,
            ticketPrice:doctorData?.ticketPrice,
            qualifications:doctorData?.qualifications,
            experiences:doctorData?.experiences,
            timeSlots:doctorData?.timeSlots,
            about:doctorData?.about,
            photo:doctorData?.photo,

        })
    },[doctorData])





    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure the name and value from the event
        setFormData({
          ...formData, // Spread the existing state
          [name]: value, // Update only the field that changed
        });
      };

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
    
        // Handle file upload to Cloudinary
        const data = await uploadImageToCloudinary(file);
        console.log(data);
    
        // Update the state with the uploaded file URL
        setSelectedFile(data.secure_url);
        setFormData({ ...formData, photo: data.secure_url });
    
        // Optionally, you can preview the image
        setPreviewURL(URL.createObjectURL(file));
      };

      const updateProfileHandler = async (e) => {
        e.preventDefault();
        try {
          const token = getToken(); // Get the token dynamically when needed
      
          if (!token) {
            throw new Error("Token is missing. Please log in again.");
          }
      
          const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // Fix the typo here
            },
            body: JSON.stringify(formData),
          });
      
          const result = await res.json();
      
          if (!res.ok) {
            throw new Error(result.message || "Failed to update profile");
          }
      
          toast.success(result.message);
        } catch (err) {
          toast.error(err.message);
        }
      };
      

    // reusible fuction for adding items
    const addItem = (key,item)=>{
        setFormData(prevFormData =>({...prevFormData, [key]:[...prevFormData[key],item]}))
    }

    // reusable input change function

    const handleReusableInputChangeFunc = (key, index, event) => {  
        const {name, value} = event.target  
        setFormData(prevFormData => {  
          const updateItems = [...prevFormData[key]]  
          updateItems[index][name] = value  

          return {
            ...prevFormData,
            [key]: updateItems,
          }
        })  
      }
    
      // reusible delete items function
       const deleteItem=(key,index)=>{
        setFormData(prevFormData =>({
            ...prevFormData, 
            [key]:prevFormData[key].filter((_,i)=>i != index),
        }))

       }

    //qualification
    const addQualification = e=>{
        e.preventDefault();
        addItem("qualifications",{startingDate:'',endingDate: '',degree:"" , university:""})
    }

    const deleteQualification = (e,index)=>{
        e.preventDefault();
        deleteItem('qualifications',index)
    }

    const handleQualificationChange =(event,index)=>{
        handleReusableInputChangeFunc('qualifications',index,event)
    }


    //experiences

    const addExperience = e=>{
        e.preventDefault();
        addItem("experiences",{startingDate:'',endingDate: '',position:"" , hospital:""})
    }

    const deleteExperience = (e,index)=>{
        e.preventDefault();
        deleteItem('experiences',index)
    }

    const handleExperienceChange =(event,index)=>{
        handleReusableInputChangeFunc('experiences',index,event)
    }

    //timeSlots 

    const addTimeSlot = e=>{
        e.preventDefault();
        addItem("timeSlots",{ day:"", startingTime:'',endingTime: '' })
    }

    const deleteTimeSlot = (e,index)=>{
        e.preventDefault();
        deleteItem('timeSlots',index)
    }

    const handleTimeSlotChange =(event,index)=>{
        handleReusableInputChangeFunc('timeSlots',index,event)
    }







    return (
        <div>
            <h2 className="text-[#181A1E] font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>
            <form>
                <div  className="mb-5">
                    <p  className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Name *</p>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-[#4E545F] cursor-pointer"/>
                </div>

                <div  className="mb-5">
                    <p  className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Email*</p>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    readOnly
                    aria-readonly
                    disabled={true}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/>
                </div>


                <div  className="mb-5">
                    <p  className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Phone *</p>
                    <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/>
                </div>

                <div  className="mb-5">
                    <p  className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Bio *</p>
                    <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Write a bio"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/>
                </div>


                <div className="mb-5">  
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">  
                        <div>  
                            <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Gender*</p>  
                            <select name="gender" value={formData.gender} onChange={handleInputChange}  
                                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer py-3.5">  
                                <option value="">Select</option>  
                                <option value="male">Male</option>  
                                <option value="female">Female</option>  
                            
                            </select>  
                        </div> 


                        <div>  
                            <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Specialization*</p>  
                            <select name="specialization" value={formData.specialization} onChange={handleInputChange}  
                                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer py-3.5">  
                                <option value="">Select</option>  
                                <option value="surgeon">Surgeon</option>  
                                <option value="neurologist">neurotologist</option>
                                <option value="dermatologist">dermatologist</option>  
                            
                            </select>  
                        </div> 


                        <div>
                            <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Ticket Price</p>
                            <input
                                type="number"
                                name="ticketPrice"
                                value={formData.ticketPrice}
                                onChange={handleInputChange}
                                placeholder="0"
                                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/>

                        </div>




                    </div>  
                </div>  


                <div className="mb-5">  
                    <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Qualifications*</p>  
                    {formData.qualifications?.map((item, index) => (  
                        <div key={index}>  
                            <div>  
                                <div className="grid grid-cols-2 gap-5">  
                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Starting Date*</p>  
                                        <input  
                                            type="date"  
                                            name="startingDate"  
                                            value={item.startingDate} 
                                            onChange={e=>handleQualificationChange(e,index)} 
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div>  


                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Ending Date*</p>  
                                        <input  
                                            type="date"  
                                            name="endingDate"  
                                            value={item.endingDate}
                                            onChange={e=>handleQualificationChange(e,index)}
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div> 

                                </div>  

                                <div className="grid grid-cols-2 gap-5 mt-5">  
                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Degree*</p>  
                                        <input  
                                            type="text"  
                                            name="degree"  
                                            value={item.degree}  
                                            onChange={e=>handleQualificationChange(e,index)}
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div>  


                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">University*</p>  
                                        <input  
                                            type="text"  
                                            name="university"  
                                            value={item.university}  
                                            onChange={e=>handleQualificationChange(e,index)}
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div> 

                                </div>  

                                <button onClick={e=>deleteQualification(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>

                                
                            </div>  
                        </div>  
                ))}  
                <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add Qualifications</button>
                </div>

                <div className="mb-5">  
                    <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Experiences*</p>  
                    {formData.experiences?.map((item, index) => (  
                        <div key={index}>  
                            <div>  
                                <div className="grid grid-cols-2 gap-5">  
                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Starting Date*</p>  
                                        <input  
                                            type="date"  
                                            name="startingDate"  
                                            value={item.startingDate} 
                                            onChange={e=>handleExperienceChange(e,index)}  
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div>  


                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Ending Date*</p>  
                                        <input  
                                            type="date"  
                                            name="endingDate"  
                                            value={item.endingDate}
                                            onChange={e=>handleExperienceChange(e,index)}  
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/> 
                                    </div> 

                                </div>  

                                <div className="grid grid-cols-2 gap-5 mt-5">  
                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Position*</p>  
                                        <input  
                                            type="text"  
                                            name="position"  
                                            value={item.position}  
                                            onChange={e=>handleExperienceChange(e,index)}
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"/> 
                                    </div>  


                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Hospital*</p>  
                                        <input  
                                            type="text"  
                                            name="hospital"  
                                            value={item.hospital} 
                                            onChange={e=>handleExperienceChange(e,index)} 
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div> 

                                </div>  

                                <button onClick={e=>deleteExperience(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>

                                
                            </div>  
                        </div>  
                ))}  
                <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add Experiences</button>
                </div>

                <div className="mb-5">  
                    <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Time Slots*</p>  
                    {formData.timeSlots?.map((item, index) => (  
                        <div key={index}>  
                            <div>  
                                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">  
                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Day*</p>  
                                        <select name="day" value={item.day} className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer py-3.5" onChange={e=>handleTimeSlotChange(e,index)}  >
                                            <option value=""></option>
                                            <option value="saturday">saturday</option>
                                            <option value="sunday">sunday</option>
                                            <option value="monday">monday</option>
                                            <option value="tuesday">tuesday</option>
                                            <option value="wednesday">wednesday</option>
                                            <option value="thursday">thursday</option>
                                            <option value="friday">friday</option>
                                        </select> 
                                    </div>  


                                    <div>  
                                        <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">Starting Time*</p>  
                                        <input  
                                            type="time"  
                                            name="startingTime"  
                                            value={item.startingTime}
                                            onChange={e=>handleTimeSlotChange(e,index)}   
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div> 
                                    <div>  
                                        <p className="form_label">Ending Time*</p>  
                                        <input  
                                            type="time"  
                                            name="endingTime"  
                                            value={item.endingTime} 
                                            onChange={e=>handleTimeSlotChange(e,index)}   
                                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" /> 
                                    </div>
                                    <div className='flex items-center'>
                                        <button onClick={e=>deleteTimeSlot(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer'><AiOutlineDelete/></button>


                                    </div>

                                </div>  

                                
                            </div>  
                        </div>  
                ))}  
                <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add TimeSlots</button>
                </div>

                <div className='mb-5'>
                    <p className="form_label text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">About*</p>
                    <textarea name="about" rows={5} value={formData.about} placeholder='Write About You' onChange={handleInputChange} className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"></textarea>

                </div>

                <div className='mb-5 flex items-center gap-3'>
                    {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-solid flex items-center justify-center">
                  <img
                    src={formData.photo || avatar}
                    alt=""
                    className="w-full rounded-full"
                  />
                </figure>}
                <div>
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    onChange={handleFileInputChange}
                  />
                </div>

                </div>

                <div className='mt-7'>
                    <button type='submit' onClick={updateProfileHandler} className='bg-[#0067FF] text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>

                </div>




                





                



            </form>
        </div>
        );
}

export default Profile