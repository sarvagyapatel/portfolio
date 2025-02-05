import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";


function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: index + 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={450}
                height={450}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: index + 1 }}
              className="w-full ml-8 max-w-xl lg:w-3/4"
            >
              <div className="flex flex-row  gap-4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <a href={project.link}><FaLink className="text-xl"/></a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-900 text-purple-600 mr-2 p-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
