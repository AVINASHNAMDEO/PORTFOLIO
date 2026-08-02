import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full -top-20 -left-20"></div>

        <div className="absolute w-96 h-96 bg-purple-500/10 blur-3xl rounded-full bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Passionate Computer Science Engineering student focused on
            building scalable web applications and solving real-world
            problems using modern technologies.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: .3 }}
            className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
          >

            <div className="flex items-center gap-4 mb-6">

              <FaLaptopCode className="text-4xl text-cyan-400" />

              <h3 className="text-3xl font-bold">
                Who I Am
              </h3>

            </div>

            <p className="text-gray-300 leading-8">

              I'm <span className="text-cyan-400 font-semibold">Avinash Namdeo</span>,
              a B.Tech Computer Science Engineering student passionate
              about Full Stack Development and Software Engineering.

              <br /><br />

              I enjoy building responsive web applications using
              React, JavaScript, Node.js, Express and MySQL.

              <br /><br />

              My goal is to become a Software Engineer and create
              impactful products that solve real-world problems.

            </p>

          </motion.div>

          {/* Right Cards */}

          <div className="grid gap-6">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 flex gap-5"
            >

              <FaGraduationCap className="text-4xl text-cyan-400" />

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Education
                </h3>

                <p className="text-gray-400">
                  B.Tech Computer Science Engineering
                  <br />
                  Shri Ram Institute of Technology, Jabalpur
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 flex gap-5"
            >

              <FaCode className="text-4xl text-cyan-400" />

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Tech Stack
                </h3>

                <p className="text-gray-400">
                  React • JavaScript • Node.js • Express • MySQL •
                  Tailwind CSS • Git • GitHub
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 flex gap-5"
            >

              <FaRocket className="text-4xl text-cyan-400" />

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Career Goal
                </h3>

                <p className="text-gray-400">
                  Seeking Software Engineering internships where I can
                  contribute, learn modern technologies, and build
                  scalable applications.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          {[
            ["5+", "Projects"],
            ["10+", "Technologies"],
            ["100+", "Hours of Coding"],
            ["∞", "Learning"],
          ].map(([number, title], index) => (

            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
            >

              <h3 className="text-4xl font-bold text-cyan-400">
                {number}
              </h3>

              <p className="text-gray-400 mt-2">
                {title}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default About;