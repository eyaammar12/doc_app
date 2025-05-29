import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 text-center rounded-lg shadow-lg">
        {/* Centered SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 mx-auto text-green-500 mb-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        {/* Content */}
        <h3 className="md:text-2xl text-lg text-gray-900 font-semibold">
          Payment Done!
        </h3>
        <p className="text-gray-600 my-2">
          Thank you for completing your secure online payment.
        </p>
        <p>Have a great day!</p>
        <div className="py-10">
          <Link
            to="/home"
            className="px-12 bg-[#0067FF] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
