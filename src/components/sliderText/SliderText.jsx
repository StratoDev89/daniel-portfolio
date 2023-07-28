import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sliderText.css";
import { useEffect, useLayoutEffect } from "react";
import { useRef, useState } from "react";

function SliderText() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const sliderTrack = useRef(null);

  let Xpercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sliderTrack.current, {
      x: "-=300px",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction *= -1;
        },
      },
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (Xpercent <= -100) {
      Xpercent = 0;
    }
    if (Xpercent > 0) {
      Xpercent = -100;
    }
    gsap.set(text1.current, { xPercent: Xpercent });
    gsap.set(text2.current, { xPercent: Xpercent });
    Xpercent += 0.13 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="slider-text-container">
      <div
        ref={sliderTrack}
        className="slider-track"
      >
        <div className="text-wrap-1">
          <h1 ref={text1}>Daniel Pacheco -</h1>
          <h1 ref={text2}>Daniel Pacheco -</h1>
        </div>
      </div>
    </div>
  );
}

export default SliderText;
