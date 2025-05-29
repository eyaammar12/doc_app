/* eslint-disable no-unused-vars */
import {useContext,useState} from 'react'
import { authContext } from '../../context/authContext';
import userImg from "../../assets/images/doctor-img01.png"; 
import { useNavigate } from 'react-router-dom'; 
import MyBookings from './MyBookings';
import { BASE_URL } from '../../config';
import useGetProfile from '../../hooks/useFetchData';


const MyAccount = () => {  
    const {dispatch} = useContext(authContext)
    const navigate = useNavigate(); // Initialize the navigate function
    const [tab,setTab] = useState('bookings')
    const {
        data : userData,
        loading,
        error
    }= useGetProfile(`${BASE_URL}/users/profile/me`)

    console.log(userData,'userData')


    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"})
        navigate('/login'); // Redirect to the login page after logout
    }
return (  
<div className="max-w-[1170px] px-5 mx-auto">  
    <div className="grid md:grid-cols-3 gap-10">  
        <div className="pb-[50px] px-[30px] rounded-md">  
            <div className="flex items-center justify-center">  
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">  
                    <img  
                        src={userData.photo}  
                        alt=""  
                        className="w-full h-full rounded-full"  
                    />  
                </figure>  
            </div>  
            <div className="text-center mt-4">  
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">  
                    {userData.name}  
                </h3>  
                <p className="text-[#424242] text-[15px] leading-6 font-medium">  
                    {userData.email} 
                </p>  
            </div>  

            <div className='mt-[50px] md:mt-[100px]'>
                <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white '>Delete Account</button>

            </div>
        </div>  

        <div className='md:col-span-2 md:px-[30px]'>
            <div>
                <button onClick={()=>setTab('bookings')} className={`${tab=='bookings' && 'bg-[#0067FF] text-white font-normal'} p-2 mr-5 px-5 rounded-md text-[#181A1E] font-semibold text-[16px] leading-7 border border-solid border-[#0067FF] `}>My Booking </button>
            </div>

            {
            tab==='bookings' && <MyBookings/>
            }

        </div>

        
    </div>  
</div>  
);  
};

export default MyAccount