import "./footer.css";
import { aboutText } from "../../constants/footerConstants";

function Footer() {
  return (
    <section
      data-scroll-section
      id="footer"
      className="footer-section"
    >
      <div className="footer-top-container">
        <h3
          data-scroll
          data-scroll-speed="2"
        >
          {aboutText}
        </h3>
        <div className="svg-container">
          <svg
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>arrow-up-right</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-1019.000000, -279.000000)"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              >
                <g
                  id="arrow-up-right"
                  transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                >
                  <polyline
                    id="Path"
                    points="2.76923077 0 12 0 12 9.23076923"
                  ></polyline>
                  <line
                    x1="12"
                    y1="0"
                    x2="0"
                    y2="12"
                    id="Path"
                  ></line>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-contacts">
          <div className="footer-socials">Socials</div>
          <div className="footer-socials-links ">
            <a href="https://www.linkedin.com/in/daniel-pacheco-782241174/">
              <span className="text-white">LinkedIn</span>
            </a>
            <a
              href="https://github.com/StratoDev89"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="px-2 text-white"
                style={{ paddingLeft: 8 }}
              >
                Github
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
