import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function useLocoscrollConfig() {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
  }, []);
}

export default useLocoscrollConfig;
