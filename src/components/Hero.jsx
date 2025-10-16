import React, { useRef, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import img from '../assets/herp1.jpg';
import img2 from '../assets/herp2.jpg';
import img3 from '../assets/herp3.jpg';

export default function Hero() {
  const slideRef = useRef(null);
  const slideIndex = useRef(0);
  const direction = useRef(true);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex.current >= totalSlides - 1) {
        direction.current = false;
      } else if (slideIndex.current <= 0) {
        direction.current = true;
      }

      slideIndex.current = direction.current
        ? slideIndex.current + 1
        : slideIndex.current - 1;

      slideRef.current.goTo(slideIndex.current);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slideStyle = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };


  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen">
      <Slide indicators={true} ref={slideRef}>
        <div style={{ ...slideStyle, backgroundImage: `url(${img})` }}>
          </div>
        <div style={{ ...slideStyle, backgroundImage: `url(${img2})` }}>
          </div>
        <div style={{ ...slideStyle, backgroundImage: `url(${img3})` }}>
          </div>
      </Slide>

      {/* View More Arrow */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDownIcon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}
