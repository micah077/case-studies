import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Slider = ({ slides }) => {
  const splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 2.5,
    arrows: false,
    pagination: false,
    autoStart: true,
    gap: "1rem",
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-[600px] overflow-hidden my-6">
      <Splide
        options={splideOptions}
        extensions={{ AutoScroll }}
        aria-label="Continuous Content Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="border-custom-gray text-white font-bold  border rounded-[28.03px] justify-center text-center bg-[#6A6A8E] bg-opacity-[10%] border-[#6a6a8e] bg-[rgba(255, 255, 255, 0.1)] text-white font-bold h-[250px] w-full m-auto text-left">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-48 mx-auto p-2"
              />
              <p className="text-[1rem] pb-0 xl:text-[16px] mt-3 2xl:text-[16px] px-2 lg:text-left bottom-0 ">
                {slide.heading}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
