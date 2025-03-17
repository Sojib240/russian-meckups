import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Sync ScrollTrigger with Lenis
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
};

export default LenisSmoothScroll;

