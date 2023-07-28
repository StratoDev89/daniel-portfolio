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
        <div className="left-column">
          <img
            data-scroll
            data-scroll-speed="0.1"
            className="img"
            src={danielPng}
          />
        </div>
        <div className="right-column">
          <div
            data-scroll
            data-scroll-speed="0.2"
            // data-scroll-direction="vertical"
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
