/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL,getToken } from "../../config";
import HashLoader from "react-spinners/HashLoader"

const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const [loading,setLoading]=useState(false)
  const {id} =useParams()



  const handleStarClick = (index) => {
    setRating(index + 1); // Ratings are 1-indexed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    const token = getToken();
  
    setLoading(true);
    try {
      if (!rating || !feedback) {
        setLoading(false);
        return toast.error("Fields are required");
      }
  
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText: feedback }), // Match backend expectations
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        throw new Error(result.message);
      }
      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[400px]">
        <h3 className="text-[20px] font-bold mb-4">Feedback Form</h3>

        <form action="/submit-feedback" method="POST" >
          {/* Rating Section */}
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleStarClick(index)}
                className="cursor-pointer"
              >
                {index < rating ? (
                  <AiFillStar color="#FFD700" size={24} /> // Yellow filled star
                ) : (
                  <AiOutlineStar color="#FFD700" size={24} /> // Yellow outlined star
                )}
              </span>
            ))}
          </div>

          {/* Feedback Textarea */}
          <textarea
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#0067FF]"
            rows="5"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            required
          ></textarea>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-300 py-2 px-4 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0067FF] text-white py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              { loading ? <HashLoader size={25} color="#fff" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
