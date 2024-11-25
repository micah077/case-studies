"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  buttons: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable auto-play
  autoplaySpeed: 3000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function CardSlider({ data, children, greenBtn }) {
  const btnColor = greenBtn ? "bg-[#5BAFA9] " : "bg-[#fff]";
  const sliderRef = React.createRef(); // Create a ref to the Slider component

  const handleBackward = () => {
    // Handle left button click
    sliderRef.current && sliderRef.current.slickPrev();
  };

  const handleForward = () => {
    // Handle right button click
    sliderRef.current && sliderRef.current.slickNext();
  };
  return (
    <div className="slider-container mx-auto relative w-full xl:w-[90%]">
      <Slider {...settings} ref={sliderRef} className=" w-full">
        {data && !children
          ? data.map((item, index) => (
              <div key={index} className="px-3 lg:px-5 pb-5  h-max  ">
                <div className=" shadow-md bg-[#fff] rounded-2xl h-full">
                  <div className="h-auto w-[100%]">
                    <img
                      src={item.img}
                      width={"full"}
                      height={"auto"}
                      className="w-[100%]"
                      alt="images"
                    />
                  </div>
                  <div className="lg:2  p-3">
                    <p className="font-[400] font-Roboto   text-[12px] md:text-[13px]  xl:text-[14.5px] 2xl:text-[16px]">
                      {item.title}
                    </p>
                    <div className=" w-[100%]">
                      <h3 className=" text-[#0A141F] font-bold my-4 text-[12px] lg:text-[15px] md:text-[13px] xl:text-[16px] 2xl:text-[20px] font-poppins">
                        {item.desc}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : !data && children && children}
      </Slider>
      <div
        className={`hidden xl:block absolute top-[50%] translate-y-[-50%] left-[-5%] `}
        onClick={handleBackward}
      >
        {/* <img src={"/assets/images/Home/back.png"} alt="prev" /> */}
        <button
          onClick={handleBackward}
          className={`${btnColor} shadow-custom w-[40px] flex justify-center items-center   h-[50px] rounded-[14px]`}
        >
          {/* <PiCaretRightBold color="#122337" size={20} fontWeight={"900"} /> */}
          <img alt="NextBtn" src="/assets/icons/leftCaret.svg" />
        </button>
      </div>
      <div
        className={`hidden xl:block absolute top-[50%] translate-y-[-50%]  right-[-5%]  `}
        // onClick={handleForward}
      >
        <button
          onClick={handleForward}
          className={`${btnColor} shadow-custom w-[40px] flex justify-center items-center   h-[50px] rounded-[14px]`}
        >
          {/* <PiCaretRightBold color="#122337" size={20} fontWeight={"900"} /> */}
          <img alt="NextBtn" src="/assets/icons/rightCaret.svg" />
        </button>
        {/* <img src={"/assets/images/Home/forw.png"} alt="next" /> */}
      </div>
    </div>
  );
}

export default CardSlider;
