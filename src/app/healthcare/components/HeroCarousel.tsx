'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/healthcare/images/hospital.png',
      title: 'Advanced Medical Care',
      subtitle: 'State-of-the-art facilities designed for your comfort and care',
      cta: 'Schedule Appointment'
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full">
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.7)'
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-6">
                <h1 
                  className="text-5xl md:text-6xl font-light mb-6 leading-tight"
                  style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-xl md:text-2xl mb-8 font-light leading-relaxed opacity-90"
                  style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
                >
                  {slide.subtitle}
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70">
        <div className="flex flex-col items-center">
          <span 
            className="text-sm mb-2 font-light"
            style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-white/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
