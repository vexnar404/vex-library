import React, { useState, useEffect } from 'react';
import heroPhoto1 from './../assets/hero-photo-1.jpg';
import heroPhoto2 from './../assets/hero-photo-2.jpg';
import heroPhoto3 from './../assets/hero-photo-3.jpg';

const slides = [heroPhoto1, heroPhoto2, heroPhoto3];
const slideInterval = 5000; // 5 seconds

function Hero () {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Function to transition to the next slide
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Start the slider interval
    const intervalId = setInterval(nextSlide, slideInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section id="home" className="relative h-[calc(100vh-112px)] mt-28 flex items-center justify-center text-center text-white overflow-hidden px-4 md:px-6">
      {/* Hero Slider with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-4xl px-4">
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Distractions Cost You Ranks. Find Your Uninterrupted Focus Zone.
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light mb-10 leading-relaxed">
          Karam's Library is a premium self-study space in Uttam Nagar, designed for serious aspirants who demand a peaceful and productive environment to achieve their goals.
        </p>
      </div>
    </section>
  );
};

export default Hero;