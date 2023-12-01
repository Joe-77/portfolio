import React from 'react'
import { IoMailOpen } from "react-icons/io5";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import Form from './Form';


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen bg-main flex justify-center items-center pl-4 sm:pl-0"
    >
      <div>
        <h1 className="flex items-center gap-3 text-white text-lg sm:text-2xl">
          <IoMailOpen />
          <span className="text-gray-500">Get in touch with me !</span>
        </h1>
        <div className="mt-10">
          <div className="text-base text-orange-600 flex items-center gap-3 mb-5">
            <FaPhoneAlt />
            <span className="text-white">+201023261487</span>
          </div>
          <div className="text-base text-orange-600 flex items-center gap-3 mb-5">
            <IoMailOpen />
            <span className="text-white">yousefabdallah55464@icloud.com</span>
          </div>
          <div className="text-base text-orange-600 flex items-center gap-3">
            <FaLocationArrow />
            <span className="text-white">Shubra, Cairo </span>
          </div>
        </div>
        <Form/>
      </div>
    </section>
  );
}

export default Contact