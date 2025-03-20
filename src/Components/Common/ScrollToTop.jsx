import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Get current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page on route change
  }, [location]);

  return null; // No UI elements to render
};

export default ScrollToTop;
