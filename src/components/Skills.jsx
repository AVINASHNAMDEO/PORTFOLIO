import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={45} className="text-gray-300" /> },
  { name: "MySQL", icon: <SiMysql size={45} className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={45} className="text-sky-400" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col items-center hover:border-cyan-400 transition"
            >
              {skill.icon}
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;