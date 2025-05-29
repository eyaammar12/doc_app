/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Tabs from './Tabs';
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from '../../config';
import Appointments from './Appointments';

import starIcon from "../../assets/images/star.png";
import Profile from './Profile';
import DoctorAbout from '../../pages/Docters/DoctorAbout';

const Dashboard = () => {
  const { data: doctorData, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  const [tab, setTab] = useState('overview');

  const handleProfileUpdate = (updatedData) => {
    console.log('Profile updated:', updatedData);
    // Handle state updates or refetch the doctorData after a successful profile update
  };

  

  return (
    <div className="max-w-[1170px] px-5 max-auto">
      <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
        <Tabs tab={tab} setTab={setTab} />

        <div className="lg:col-span-2">
          {doctorData?.isApproved === 'pending' && (
            <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
              <span className="sr-only">Info</span>
              <div className="ml-3 text-sm font-medium">
                To get approval, please complete your profile. We will review it manually and approve it within 3 days.
              </div>
            </div>
          )}

          <div className="mt-8">
            {tab === "overview" && doctorData && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <figure className="max-w-[200px] max-h-[200px]">
                    <img src={doctorData?.photo} alt="Doctor" className="w-full" />
                  </figure>

                  <div>
                    <span className="bg-[#CCF0F3] text-[#01B5C5] py-1 px-4 lg:py-2 lg:px-6 rounded-md text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                      {doctorData.specialization} Surgeon
                    </span>
                    <h3 className="text-[22px] leading-9 font-bold text-[#181A1E] mt-3">
                      {doctorData.name}
                    </h3>

                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-black text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        <img src={starIcon} alt="Rating" />
                        {doctorData.averageRating}
                      </span>

                      <span className="flex items-center gap-[6px] text-[#727272] text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        ({doctorData.totalRating})
                      </span>
                    </div>

                    <p className="font-[15px] lg:max-w-[390px] leading-6">
                      {doctorData.bio || "This is bio."}
                    </p>
                  </div>
                </div>
                <div>
                  <DoctorAbout name={doctorData.name} about={doctorData.about} qualifications={doctorData.qualifications} experiences={doctorData.experiences} />
                </div>
              </div>
            )}
            {tab === "appointments" && <Appointments appointments={doctorData.appointments} />}
            {tab === "settings" && (
              <Profile doctorData={doctorData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
