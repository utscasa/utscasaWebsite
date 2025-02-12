import { useState, useEffect } from "react";

const Slideshow = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-2xl font-semibold rounded-xl">
              <h3>{slide.text}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
