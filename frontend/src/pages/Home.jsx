/* eslint-disable no-unused-vars */
import React from 'react';
import heroImage from '../assets/images/hero-bg.png';
import heroImage01 from '../assets/images/hero-img01.png';
import heroImage02 from '../assets/images/hero-img02.png';
import heroImage03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About.jsx";
import ServiceList from '../components/Services/ServiceList.jsx';
import DoctorList from '../components/Doctors/DoctorList.jsx';
import FaqList from '../components/Faq/FaqList.jsx';
import Testimonial from '../components/Testimonial/Testimonial.jsx';


const Home = () => {
  return (
    <>
      {/*____hero section___*/}
      <section className="hero__section bg-cover bg-no-repeat pt-[60px] 2xl:h-[800px] " style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center">
            {/*_____hero content_______*/}
            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-[#181A1E] font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text-[18px] leading-[30px] font-[400] text-[#181A1E] mt-[18px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus consectetur iste ipsam, odio, distinctio nisi eligendi temporibus in, dolor assumenda suscipit repudiandae tempora atque sint delectus architecto hic nobis mollitia?</p>
                <button className='bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]'>Request an Appointement</button>
              </div>
              {/*____hero counter____*/}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:leading-[54px] font-[700]'>30+</h2>
                  <span className='w-[100px] h-2 bg-[#FEB60D] rounded-full block mt-[-14px]'></span>
                  <p>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:leading-[54px] font-[700]'>15+</h2>
                  <span className='w-[100px] h-2 bg-[#9771FF] rounded-full block mt-[-14px]'></span>
                  <p>Clinic location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:leading-[54px] font-[700]'>100%</h2>
                  <span className='w-[100px] h-2 bg-[#01B5C5] rounded-full block mt-[-14px]'></span>
                  <p>Patient Satisfaction</p>
                </div>

              </div>
            </div>
            {/*_____end hero content_______*/}

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImage01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImage02} alt="" className='w-full mb-[30px]' />
                <img src={heroImage03} alt="" className='w-full'/>
              </div>

            </div>



          </div>
        </div>
      </section>
      {/*____hero section end___*/}

      <section>
        <div className="container1 max-w-full w-[1440px] px-5 mx-auto">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-[44px] leading-[54px] font-[700] text-[#181A1E] text-center'>Providing the best medical services </h2>
            <p className='text__para text-center'>World-class care for every one.Our health system offers unmatched, expert health care</p>
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
            </div>


            <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 font-[700] text-center' >Find a Doctor</h2>
                <p className='text-[24px] leading-7 text-[#757575] font-[200] mt-4 text-center'>World-class care for every one.Our health system offers unmatched, expert health care from the lab to the clinic</p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
            </div>


          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
            </div>


            <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 font-[700] text-center' >Find a Location</h2>
                <p className='text-[24px] leading-7 text-[#757575] font-[200] mt-4 text-center'>World-class care for every one.Our health system offers unmatched, expert health care from the lab to the clinic</p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
            </div>


          </div>


          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
            </div>


            <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 font-[700] text-center' >Book Appointment</h2>
                <p className='text-[24px] leading-7 text-[#757575] font-[200] mt-4 text-center'>World-class care for every one.Our health system offers unmatched, expert health care from the lab to the clinic</p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
            </div>


          </div>

        </div>
      </section>

      {/*____About section___*/}
      <About/>
      {/*____About section end___*/}

      {/*____services section start___*/}
      <section>
        {/* Outer container to center the content and manage maximum width */}
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          {/* Inner container for the text content, centered horizontally */}
          <div className="xl:w-[470px] mx-auto">
            {/* Title with centered alignment */}
            <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E] text-center">
              Our Medical Services
            </h2>
            {/* Paragraph with centered alignment and top margin */}
            <p className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px] text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quidem
              aliquam doloremque eos, veritatis atque, provident fugit laborum
              impedit consequuntur nam, repellendus facilis.
            </p>
          </div>
        </div>
        <ServiceList/>

      </section>
      {/*____services section end___*/}


      {/*____feature section___*/}
      <section>
        {/* Container for section */}
        <div className="container mx-auto px-5">
          {/* Flex container for content and image */}
          <div className="flex items-center justify-between flex-col lg:flex-row">
            
            {/*____feature content___*/}
            <div className="xl:w-[670px] text-center lg:text-left">
              <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E]">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4 mt-[18px]">
                <li className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px]">
                  1. Schedule the appointment directly.
                </li>
                <li className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px]">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px]">
                  3. View our physicians who are accepting new patients. Use the online scheduling tool to select an appointment time.
                </li>
              </ul>

              <Link to="/">
                <button className="bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">
                  Learn More
                </button>
              </Link>
            </div>

            {/*____feature img___*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="Feature Image" />

            </div>
          </div>
        </div>
      </section>
      {/*____features section end___*/}


      {/*____great docters section___*/}
      <section>
        
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          {/* Inner container for the text content, centered horizontally */}
          <div className="xl:w-[470px] mx-auto">
            {/* Title with centered alignment */}
            <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E] text-center">
              Our Great Docters
            </h2>
            {/* Paragraph with centered alignment and top margin */}
            <p className="text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px] text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quidem
              aliquam doloremque eos, veritatis atque, provident fugit laborum.
            </p>
          </div>
          <DoctorList/>
        </div>  
       
      </section>
      {/*____great docter section end___*/}


      {/*____FAQ section ___*/}
        <section>
          <div className="container">
            <div className='flex justify-between gap-[100px] '>
              <div className='w-1/2 hidden md:block'>
                <img src={faqImg} alt="" />

              </div>

              <div className='w-full md:w-1/2'>
                <h2 className='text-[44px] leading-[54px] font-[700] text-[#181A1E]'>Most Asked questions by our beloved patients</h2>
                <FaqList/>

              </div>
              
            </div>
          </div>

        </section>
      {/*____FAQ section end___*/}

      {/* Testimonial Section */}  
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
      {/* Testimonial Section End */} 


      










    </>
  );
};

export default Home;
