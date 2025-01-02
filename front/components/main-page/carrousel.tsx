"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    '/images/images-carousel/1.png',
    '/images/images-carousel/2.png',
    '/images/images-carousel/3.png',
    '/images/images-carousel/4.png',
    '/images/images-carousel/5.png',
    '/images/images-carousel/6.png',
    '/images/images-carousel/7.png',
    '/images/images-carousel/8.png',
    '/images/images-carousel/9.png',
    '/images/images-carousel/10.png',
    '/images/images-carousel/11.png'
  ];

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-96 mx-auto">
      <div className="relative aspect-square rounded-3xl bg-gray-100 shadow-xl overflow-hidden">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
        
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 w-full text-center text-gray-800 font-medium">
          {currentSlide + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;