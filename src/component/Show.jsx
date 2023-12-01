import React from "react";
import myImg from "../assets/myImg.jpg";
import { motion } from "framer-motion";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Show = () => {
  const [text, cursor] = useTypewriter({
    words: ["The Name's Yousef Abdallah", "<LovesToCodeMore>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      className="w-full h-screen flex justify-center items-center bg-main"
      initial={{ opacity : 0.2 }}
      animate={{ opacity : 1 }}
      transition={{duration : 0.7}}
    >
      <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-2 border-[#333] border-opacity-20 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img className="w-20 h-20 rounded-full mb-5" src={myImg} alt="" />
          <p className=" text-[8px] uppercase tracking-[4px] text-white opacity-40">
            frontend developer
          </p>
          <p className="text-lg md:text-4xl text-gray-300 mt-4 pr-1 whitespace-nowrap font-bold">
            {text}
            <Cursor cursorColor="gray" />
          </p>

          <div className="flex gap-3 text-[7px] md:text-[9px] mt-5 text-[#ddd] opacity-20 uppercase tracking-[2px]">
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Show;
