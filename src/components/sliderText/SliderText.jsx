import { motion } from "framer-motion";
import "./sliderText.css";

function SliderText() {
  return (
    <motion.div className="slider-text-container">
      <div
        
        className="slider-track"
      >
        <div
         
          className="text-wrap-1"
        >
          <h1>Daniel Pacheco</h1>
        </div>
        <div
        
          className="text-wrap-2"
        >
          <h1>Daniel Pacheco</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default SliderText;
