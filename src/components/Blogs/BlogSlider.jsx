"use client";

import React from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { featuredBlogData } from "@/utils/BlogPageData";

function BlogSlider({ filterData, filter }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {featuredBlogData.length &&
          featuredBlogData.map((item, index) => {
            return (
              <div key={index} className="pb-4">
                <div
                  onClick={() => {
                    filterData(item);
                  }}
                  className={
                    item === filter
                      ? "text-[13px] mx-1 mt-4 border border-slate-600 font-Inter cursor-pointer bg-[#F6F7F8] rounded-lg p-2 text-center md:text-left " // Added mx-2 for horizontal margin
                      : "text-[13px] mx-1 mt-4 font-Inter cursor-pointer bg-[#F6F7F8] border border-slate-200 rounded-lg   p-2 text-center md:text-left " // Added mx-2 for horizontal margin
                  }
                >
                  {item}
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default BlogSlider;
