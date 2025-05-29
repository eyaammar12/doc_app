/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import signupImg from "./../assets/images/register.avif";
import avatar from "./../assets/images/user.png";
import { Link,useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader"

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    // Add form submission logic here
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        
        body: JSON.stringify(formData)
      })

     // Handle response
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message || "Registered successfully!");
      navigate('/login'); // Only navigate on success
    } else {
      throw new Error(data.message || "Failed to register!");
    }



    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
    

  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* sign up form */}
          <div className="rounded-lg lg:pl-16 py-10">
            <h3 className="text-[#181A1E] text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-[#0067FF]">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Create a password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="☐text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="☐text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="☐text-headingColor font-bold text-[16px] leading-7">
                  Gender
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="☐text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-solid flex items-center justify-center">
                  <img
                    src={previewURL || avatar}
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

              <div className="mt-7">
                <button disabled={loading && true} className="w-full bg-[#0067FF] text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                  { loading ? <HashLoader size={35} color="#ffffff"/> : "Sign Up"}
                </button>
              </div>

              <p className="mt-5 text-[#424242] text-center">
                Already have an account?{" "}
                <Link to="/Login" className="text-[#0067FF] font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
