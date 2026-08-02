import { motion } from "framer-motion";
import {
  FaHotel,
  FaAndroid,
  FaLaptopCode,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Hotel Seven",
    subtitle: "Hotel Booking Website",
    icon: <FaHotel className="text-7xl text-amber-400" />,
    tech: "PHP • MySQL • HTML • CSS • JavaScript",
    desc: "A responsive hotel booking website featuring room reservation, availability management, user authentication, and an elegant user interface.",
    github: "https://github.com/AVINASHNAMDEO/Hotel-Seven",
    demo: "https://hotel-seven-blond.vercel.app/",
  },
  {
    title: "Strimixis",
    subtitle: "Multimedia Streaming App",
    icon: <FaAndroid className="text-7xl text-green-400" />,
    tech: "Java • Android Studio • Firebase • TMDB API • Spotify API • Retrofit • ExoPlayer",
    desc: "An Android multimedia streaming application supporting movies, music, podcasts, authentication, API integration, and a modern streaming experience.",
    github: "https://github.com/AVINASHNAMDEO/STRIMIXIS_MULTIMEDIA-APP",
    demo: "#",
  },
  {
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio Website",
    icon: <FaLaptopCode className="text-7xl text-cyan-400" />,
    tech: "React • Tailwind CSS • Framer Motion",
    desc: "A modern and responsive portfolio website showcasing projects, technical skills, education, and contact information with smooth animations.",
    github: "https://github.com/AVINASHNAMDEO",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden border border-slate-700 bg-gradient-to-b from-slate-900 to-[#111827] shadow-xl hover:border-cyan-400"
            >

              {/* Top Section */}

              <div className="h-56 flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 via-slate-900 to-black">

                {project.icon}

                <h3 className="text-3xl font-bold mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {project.subtitle}
                </p>

              </div>

              {/* Bottom */}

              <div className="p-7">

                <p className="text-cyan-400 text-sm leading-6">
                  {project.tech}
                </p>

                <p className="text-gray-300 mt-5 leading-7">
                  {project.desc}
                </p>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-5 py-3 rounded-xl font-medium"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;