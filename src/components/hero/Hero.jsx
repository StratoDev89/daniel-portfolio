import danielPng from "../../assets/images/daniel.png";
import SliderText from "../sliderText/SliderText";
import "./hero.css";

function Hero() {
  return (
    <section
      data-scroll-section
      id="hero"
      className="hero-section"
    >
      <div className="main-container">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="left-column"
        >
          <img
            className="img"
            src={danielPng}
            alt="Daniel IA face"
          />
        </div>
        <div className="right-column">
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="text-container"
          >
            <span>Fullstack Web Developer</span>
          </div>
        </div>
      </div>
      <SliderText />
    </section>  
  );
}

export default Hero;
