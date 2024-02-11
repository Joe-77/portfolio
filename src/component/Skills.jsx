import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import bootStrap from "../assets/bs.png";
import tailwind from "../assets/ts.png";
import git from "../assets/git.png";
import vsCode from "../assets/vs.png";
import firebase from "../assets/firebase.png";
import typeScript from "../assets/typescript.png";
import next from "../assets/Next.js.png";
import npm from "../assets/npm.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full md:h-screen bg-main flex justify-center items-center py-16 sm:py-28 overflow-hidden"
    >
      <div>
        <div className="mb-28">
          <h1 className="text-center text-white opacity-25 uppercase tracking-[12px]">
            skills
          </h1>
          <p className="mt-3 text-[9px] uppercase text-white opacity-25 tracking-[1.5px] text-center">
            hover over a skill for current profiegiency
          </p>
        </div>

        <motion.div
          className="right mx-5 sm:mx-0"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="four grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8">
            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={firebase} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">75%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={html} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">95%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={git} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">70%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={react} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">80%</h1>
              </div>
            </div>
          </div>

          <div className="four mt-8 grid grid-cols-2 sm:grid-cols-4 justify-center gap-2 sm:gap-8">
            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={css} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">90%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={bootStrap} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">70%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={tailwind} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">85%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={js} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">85%</h1>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="left mx-5 sm:mx-0"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="four mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8">
            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={npm} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">80%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={vsCode} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">90%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-16 h-16" src={redux} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">80%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-12 h-12" src={typeScript} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">75%</h1>
              </div>
            </div>

            <div className="relative w-20 h-20 rounded-full border-2 border-[#333] flex items-center justify-center group">
              <img className="w-12 h-12" src={next} alt="" />
              <div className=" absolute w-full h-full rounded-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                <div className="overlay w-full h-full rounded-full bg-white opacity-50"></div>
                <h1 className=" absolute font-bold">80%</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
