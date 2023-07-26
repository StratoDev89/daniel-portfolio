import "./projects.css";
import { motion } from "framer-motion";
import projectsData from "../../constants/projectsData";

function Projects() {
  const data = projectsData;

  return (
    <section
      className="projects-section"
      data-scroll-section
    >
      <div className="projects-main-container">
        <div className="projects-container">
          {data.map((project, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, color: "rgb(153 157 158)" }}
              href={project.address}
              target="_blank"
            >
              <div>
                <h1>
                  {project.title}
                </h1>
                <aside>
                  <h2>{project.tech}</h2>
                </aside>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
