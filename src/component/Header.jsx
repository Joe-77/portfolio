import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaShareAlt,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import resume from "../resume/Resume-Yousef-Abdallah.pdf";
const Header = () => {
  return (
    <header className="fixed w-full top-7 text-white z-[9999]">
      <nav className="flex justify-between sm:justify-around items-center mx-3 md:mx-20">
        <motion.div
          className="social text-xl flex  gap-3"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="https://web.facebook.com/yousef.abdallah.40" target="_blank">
            <FaFacebookF />
          </a>
          <a href={resume} download={resume}>
            <FaShareAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-abdallah-760273242/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href={resume} download={resume}>
            <FaShareAlt />
          </a>
          <a href="https://github.com/Joe-77" target="_blank">
            <FaGithub />
          </a>
        </motion.div>
        <motion.a href="#" className="text-xl" initial={{x : 500}} animate={{x : 0}} transition={{duration : 1}}>
          <IoCodeSlash />
        </motion.a>
      </nav>
    </header>
  );
};

export default Header;
