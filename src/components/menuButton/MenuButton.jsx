import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./menuButoon.css";
import {
  bottomBar,
  topBar,
  variants,
  options,
} from "../../constants/menuButtonConstants";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menuOptions = document.querySelector(".menu-options");
    if (isMenuOpen) {
      menuOptions.classList.add("visible");
    } else {
      menuOptions.classList.remove("visible");
    }
  }, [isMenuOpen]);

 

  return (
    <div className="menu-button-main-container">
      <motion.div
        animate={isMenuOpen ? "openMenu" : "none"}
        variants={variants}
        className="menu-button-container"
      >
        <motion.div
          animate={isMenuOpen ? "moveIcon" : "none"}
          variants={variants}
          onClick={toggleMenu}
          className="menu-button-svg-container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="20"
            viewBox="0 0 40 20"
          >
            <motion.rect
              initial={{ y: 0 }}
              animate={
                isMenuOpen ? ["open", "openRotate"] : ["close", "closeRotate"]
              }
              variants={topBar}
              exit={{ y: 0 }}
              id="topBar"
              x="0"
              y="4"
              width="40"
              height="2"
              fill="white"
            />
            <motion.rect
              initial={{ y: 0 }}
              animate={
                isMenuOpen ? ["open", "openRotate"] : ["close", "closeRotate"]
              }
              variants={bottomBar}
              id="bottomBar"
              x="0"
              y="14"
              width="40"
              height="1"
              fill="white"
            />
          </svg>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMenuOpen ? "options" : "none"}
            variants={variants}
            className="menu-options"
          >
            <ul>
              {options.map((option, index) => (
                <a  key={index} >
                  <li id={option}>{option}</li>
                </a>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MenuButton;
