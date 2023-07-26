import "./App.css";
import useLocoscrollConfig from "./hooks/scrollConfig";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/menuButton/MenuButton";

function App() {
  useLocoscrollConfig();

  return (
    <div data-scroll-container>
      <Hero />
      <MenuButton />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
