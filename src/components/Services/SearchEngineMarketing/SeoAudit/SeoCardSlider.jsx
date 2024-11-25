"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Define custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    className="bg-[#5BAFA9] text-white p-2 rounded-[4px] w-[48px] h-[48px] flex justify-center items-center"
    onClick={onClick}
  >
    <IoIosArrowBack size={26} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="bg-[#5BAFA9] text-white p-2 rounded-[4px] w-[48px] h-[48px] flex justify-center items-center"
    onClick={onClick}
  >
    <IoIosArrowForward size={26} />
  </button>
);

const SeoAuditCardSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 1000, // 1 second transition between slides
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000, // Move to the next slide every 3 seconds
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="slider-container mx-auto max-w-[1440px] relative text-white py-6">
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>

      <div className="flex justify-center mt-12">
        <div className="flex space-x-4">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default SeoAuditCardSlider;
