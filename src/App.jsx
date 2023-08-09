import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/menuButton/MenuButton";
import Welcome from "./components/welcome/Welcome";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: { smoothTouch: true },
    });
  }, []);
  return (
    <div>
      <Welcome />
      <Hero />
      <MenuButton />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
