import { motion } from "framer-motion";
import "./about.css";
import { text1, text2 } from "../../constants/aboutConstants";

function About() {
  return (
    <section
      data-scroll-section
      id="about"
      className="about-section"
    >
      <div className="about-main-container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="about-left-column"
        >
          <p>
            {text1.map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="about-right-column"
        >
          <h5>{text2}</h5>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
