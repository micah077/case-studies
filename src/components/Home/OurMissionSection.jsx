"use client";
import React, { useEffect, useState } from "react";

import { OurMissionData } from "@/utils/HomePageData/OurMissionData";

const aboutButtons = [
  {
    button: "Our Mission",
  },
  {
    button: "Our Vision",
  },
  {
    button: "Our Value",
  },
];
const OurMissionSection = () => {
  const [filterData, setFilterData] = useState([]);
  const [button, setButton] = useState("Our Mission");

  const filter = (category) => {
    const checkFilter = OurMissionData.filter((item) => {
      return item.category === category;
    });
    setFilterData(checkFilter[0]);
  };
  useEffect(() => {
    setFilterData(OurMissionData[0]);
  }, []);
  return (
    <section className="w-full flex max-w-[1440px] mx-auto py-10 2xl:px-0 px-[30px] sm:px-[50px] flex-col justify-center items-start md:gap-6 gap-10 lg:flex-row">
      <div className="flex-1">
        <div className="w-[100%] max-w-[586px]">
          <div className="w-[100%] xl:w-[90%] 2xl:w-[80%]">
            <div className="flex flex-row md:justify-center items-center lg:m-auto lg:py-1 xl:h-[70px]  lg:px-1 w-[100%] border-2 rounded-lg text-[16.41px]  border-[#292930]">
              {aboutButtons.length > 0 &&
                aboutButtons.map((value, index) => {
                  return (
                    <React.Fragment key={index}>
                      <span
                        onClick={() => {
                          setButton(value.button);
                          filter(value.button);
                        }}
                        className={
                          value.button === button
                            ? "rounded-lg py-5 sm:py-2 xl:py-4 text-[13px] lg:text-[16px] md:text-[15px]  w-full text-center bg-[#FF6E4E]   cursor-pointer text-[#292930] font-DM  font-[500]"
                            : "rounded-lg py-5 xl:py-4  sm:py-2 text-[13px] lg:text-[16px] md:text-[15px] w-full text-center  cursor-pointer text-[#292930] font-DM  font-[500]"
                        }
                      >
                        {value.button}
                      </span>
                      <span
                        className={`w-[0.91px] mx-1 h-[36.47px] bg-[#B5B5B5] ${
                          index === aboutButtons.length - 1 ? "hidden" : ""
                        }`}
                      ></span>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div className="mt-8 font-DM">
            <h1 className="text-center text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] font-[700] lg:text-left text-[#0A141F]">
              {filterData.title} <br className="" />{" "}
              <span className="relative  w-fit">
                <span className="relative w-full z-10">{filterData.text}</span>
                <span
                  className={`absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1 md:bottom-[8px] lg:bottom-[5px] xl:bottom-[5px] 2xl:bottom-[10px] right-0 }`}
                />
              </span>{" "}
              {filterData.text2}
            </h1>
            <div className="w-[100%] lg:w-[90%] xl:w-[100%] h-fit">
              <p className="mt-8 text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] font-normal">
                {filterData.desc}.<br /> <br></br> {filterData.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-[100%]">
          <img
            className="w-[100%]"
            src={"/assets/images/Home/onmissionbg.png"}
            alt="lap icon"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
