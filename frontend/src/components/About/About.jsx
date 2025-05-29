/* eslint-disable no-unused-vars */
import React from 'react'
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import "../../index.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        {/*------ About Image Section ------*/}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="About Image" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="About Card" />
          </div>
        </div>
  
        {/*------ About Content Section ------*/}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="text-[44px] leading-[54px] font-[700] text-[#181A1E]">
            Proud to be one of the nations best
          </h2>
          <p className="text__para text-[18px] leading-[30px] font-[400] text-[#424242] mt-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil
            id maxime quam adipisci iure, dolore impedit voluptas, illum deserunt
            aliquam qui recusandae excepturi corporis! Natus blanditiis
            reiciendis accusantium suscipit.
          </p>
          <p className="text__para text-[18px] leading-[30px] font-[400] text-[#424242] mt-[30px]">
            Our best is something we strive for each day, caring for our patients
            not looking back at what we accomplished but towards what we can do
            tomorrow.
          </p>
          <Link to="/">
            <button className="bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default About