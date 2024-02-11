import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen bg-main flex justify-center py-16 sm:py-28"
    >
      <div className="mx-4">
        <h1 className="text-center text-white opacity-25 mb-10 sm:mb-28  uppercase tracking-[12px]">
          about
        </h1>
        <div className="w-full sm:w-3/4 lg:w-1/2 m-auto">
          <h2 className="text-lg text-white tracking-wider opacity-60">
            Here is a{" "}
            <span className="border-b-[1px] border-b-orange-500">little</span>{" "}
            background
          </h2>

          <motion.p
            className="text-white mt-4 text-sm leading-6 tracking-wide text-justify"
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I'm Yousef.<span className="text-orange-500 text-xl">☻</span> A
            highly motivated frontend developer with 1 years of experience in
            the field I am passionate about continuous learning and thrive in
            collaborative environments. Throughout my career, I have been
            dedicated to expanding my knowledge and skills in frontend
            development. I stay up-to-date with the latest technologies,
            frameworks, and best practices to bring fresh ideas and innovative
            solutions to my work. As a team player, I believe in the power of
            effective collaboration to high-quality results. I am open to
            feedback and enjoy working closely with cross-functional teams to
            achieve common goals. My genuine passion for frontend development
            drives me to create visually appealing and user-friendly interfaces
            that enhance the overall user experience. I understand the
            importance of a well-designed and intuitive interface in shaping a
            user's perception of a product or service. Let's connect and explore
            potential collaborations in the development.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
