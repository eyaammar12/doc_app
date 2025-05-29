/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* Feedback.jsx */
import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./feedbackForm";

const Feedback = ({reviews,totalRating}) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>
        { reviews?.map((review,index)=>(
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={review?.user?.photo} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 ">{review?.user?.name}</h5>
              <p className="text-[14px] leading-6 text-[#424242]">
                {review?.creatAt}
              </p>
              <p className="mt-3 font-medium text-[15px]">
                {review.reviewText}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(review?.rating).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
            </div>
          </div>)

          )}
      </div>

      <div className="text-center">
        <button
          className="btn bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]"
          onClick={toggleFeedbackForm}
        >
          Give Feedback
        </button>
      </div>

      {/* Feedback Form Pop-up */}
      {showFeedbackForm && <FeedbackForm onClose={toggleFeedbackForm} />}
    </div>
  );
};

export default Feedback;
