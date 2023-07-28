import { useState, useEffect } from "react";
import './welcome.css'

function Welcome() {
 

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const welcomeSection = document.querySelector('#welcome');
    const welcomeList = [
        "",
        "добро пожаловать", // Ruso
        "歓迎", // Japonés
        "歡迎", // Chino tradicional
        "willkommen", // Alemán
        "benvenuto", // Italiano
        "bienvenue", // Francés
        "welcome", // Inglés
        "bienvenido", // Español
      ];
    const intervalId = setInterval(() => {
      if (index < welcomeList.length) {
        setWelcomeMessage(welcomeList[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsComplete(true);
        welcomeSection.classList.add('translate-up')
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [index, isComplete]);

  return (
    <section
      id="welcome"
      className="welcome-section"
    >
      <div className="message-container">
        <h1>
          {welcomeMessage}
        </h1>
      </div>
    </section>
  );
}

export default Welcome;
