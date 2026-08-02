import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import profile from "../assets/myimg.png";
import resume from "../assets/mycv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-cyan-400 text-xl mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Avinash
              </span>
              <br />
              Namdeo
            </motion.h1>

            <div className="mt-8 text-3xl font-semibold h-12">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                repeat={Infinity}
                speed={45}
              />
            </div>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
              Passionate Computer Science student focused on building scalable,
              responsive and user-friendly web applications using React,
              Node.js and modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold shadow-lg shadow-cyan-500/30">
                Hire Me
              </button>

              <a
                href={resume}
                download="Avinash_Namdeo_Resume.pdf"
                className="px-8 py-4 rounded-full border border-cyan-400 flex items-center gap-2 hover:bg-cyan-500/10 transition"
              >
                <HiDownload />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/AVINASHNAMDEO"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 duration-300 hover:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/in/avinash-namdeo-5a5957284/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 duration-300 hover:scale-110" />
              </a>

              <a href="mailto:kapilavinash338@gmail.com">
                <FaEnvelope className="hover:text-cyan-400 duration-300 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
  <div className="relative group">

    {/* Rotating Ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[3px] animate-spin-slow">

      <div className="w-full h-full rounded-full bg-slate-950"></div>

    </div>

    {/* Profile */}
    <img
      src={profile}
      alt="Avinash"
      className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]
      rounded-full object-cover border border-slate-700
      shadow-2xl transition duration-500
      group-hover:scale-105"
    />

  </div>
</motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-cyan-400"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;