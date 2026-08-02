import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm currently looking for internships and exciting opportunities.
            If you have a project or just want to say hello, feel free to
            contact me.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* Left */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:kapilavinash338@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-2xl" />
                <span>kapilavinash338@gmail.com</span>
              </a>

              <a
                href="https://github.com/AVINASHNAMDEO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/avinash-namdeo-5a5957284/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-cyan-400" />
                <span>Jabalpur, Madhya Pradesh, India</span>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              Whether it's an internship, freelance project or collaboration,
              I'd love to hear from you.
            </p>

            <a
              href="mailto:kapilavinash338@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              Send Message
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;