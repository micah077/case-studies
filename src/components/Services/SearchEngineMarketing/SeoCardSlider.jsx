'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import React, { useState, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';

const SeoCardSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second transition between slides
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000, // Move to the next slide every 3 seconds
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div>
        <ul style={{ marginBottom: '-120px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` ${
          currentSlide === i
            ? 'rounded-md bg-[#FB724C] h-3 w-6 transition-all duration-500'
            : 'rounded-full bg-[#2A3545] h-3 w-3 ml-2'
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <div className="slider-container mx-auto max-w-[1440px] relative text-white py-6">
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
};

export default SeoCardSlider;
