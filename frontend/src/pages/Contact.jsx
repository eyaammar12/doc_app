/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#f9f9f9] py-12">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <h2 className="text-[36px] font-bold text-[#181A1E] mb-6">Get in Touch</h2>
        <p className="text-[#6b7280] mb-8">
          Have any questions or concerns? Feel free to contact us by filling out the form below 🥰.
        </p>
        <form className="bg-white shadow-lg rounded-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-[#181A1E] font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-[#181A1E] font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-[#181A1E] font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
