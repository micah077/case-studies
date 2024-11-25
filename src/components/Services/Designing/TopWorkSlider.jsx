import React from "react";

import TopWorkCard from "./TopWorkCard";

import { FaArrowRight } from "react-icons/fa6";
import { TopWordData } from "@/utils/ServicesPagesData/WebDesignPageData";
import CardSlider from "./CardSlider";

const TopWorkSlider = () => {
  return (
    <div className="customBg relative px-[40px]">
      <div className="w-full max-w-[1400px] z-50 relative text-white px-6 mx-auto py-6 md:py-[65px]">
        <div className="flex font-[600]  flex-col lg:flex-row mb-[50px] justify-between items-center gap-1">
          <h3 className="text-[22px] lg:text-[40px]  text-center font-poppins font-bold">
            Our <span className="text-[#FF6E4E]">Top Website</span> Development
            Work
          </h3>
          <div className="flex items-center gap-1">
            <h5 className="font-[400] flex items-center gap-1 cursor-pointer font-Roboto text-[18px] mt-4 lg:m-0">
              View All <FaArrowRight color="#110A32" size={11} />
            </h5>
          </div>
        </div>

        <CardSlider greenBtn>
          {TopWordData.map((e, i) => (
            <div key={i} className="px-3">
              <TopWorkCard imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
            </div>
          ))}
        </CardSlider>
      </div>
    </div>
  );
};

export default TopWorkSlider;
