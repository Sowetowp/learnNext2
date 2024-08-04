"use client";
import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const slides = [
    '/hero-4.jpg',
    '/hero-5.jpeg',
    '/hero-6.jpg',
  ];

  // Extend slides array to enable infinite scrolling effect
  const extendedSlides = [...slides, ...slides, ...slides];

  const [currentIndex, setCurrentIndex] = useState(slides.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedSlides.length - slides.length : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedSlides.length - 1 ? slides.length : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex - slides.length) * (100 / slides.length)}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
