import React from "react";
import { project } from "../myProject/project";
import {motion} from 'framer-motion'
import { FaGithub, FaEye } from "react-icons/fa";


const Projects = () => {
  
  return (
    <section
      id="projects"
      className="w-full h-screen bg-main relative overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="pt-28">
        <h1 className="text-center text-white opacity-25 uppercase tracking-[12px]">
          projects
        </h1>
      </div>

      <div className=" absolute top-1/2 sm:left-[-80px] -skew-y-12 -translate-y-1/2 bg-[#f7ab0a]/10 w-[120%] h-60"></div>

      <div className="relative z-30 flex items-center  overflow-x-auto scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-gray-700 w-full m-auto pb-10 h-full">
        {project.map((e , id) => (
          <div key={id} className="w-full flex-shrink-0">
            <div className="flex flex-col gap-4 justify-center">
              <div className="img">
                <motion.img
                  initial={{ y: -50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className=" w-60 sm:w-96 m-auto"
                  src={e.projectImg}
                  alt=""
                />
                <p className="text-center mt-2 text-white font-bold text-sm  sm:text-lg capitalize whitespace-nowrap">
                  <span className="border-b-2 border-orange-600">
                    Case Study {e.projectNum} of {project.length}
                  </span>{" "}
                  : {e.projectName}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="flex gap-10 text-3xl mt-6 text-white">
                  <motion.a
                    initial={{ x: -70 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1 }}
                    href={e.gitHub}
                    target="_blank"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    initial={{ x: 70 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1 }}
                    href={e.live}
                    target="_blank"
                  >
                    <FaEye />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

/*

<div className="info w-80 m-auto">
              <motion.img
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                className=" w-60 sm:w-80"
                src={e.projectImg}
                alt=""
              />
              <p className="text-center mt-2 text-white font-bold text-lg capitalize whitespace-nowrap">
                <span className="border-b-2 border-orange-600">
                  Case Study {e.projectNum} of {project.length}
                </span>{" "}
                : {e.projectName}
              </p>
              <div className="flex justify-evenly mt-10 text-3xl text-white w-3/4 m-auto">
                <motion.a
                  initial={{ x: -70 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  href={e.gitHub}
                  target="_blank"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  initial={{ x: 70 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  href={e.live}
                  target="_blank"
                >
                  <FaEye />
                </motion.a>
              </div>
            </div>



*/