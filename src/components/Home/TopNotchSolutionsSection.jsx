"use client";
import Link from "next/link";
import React from "react";

import { NotchData } from "@/utils/HomePageData/NotchData";
import UnderLineText from "../Common/UnderLineText";

const TopNotchSolutionsSection = ({ setAboutModel }) => {
  const handleAboutModel = () => {
    setAboutModel(true);
  };
  return (
    <section
      style={{
        backgroundSize: `100% 100%`,
      }}
      className="max-w-[1600px] relative md:w-[90%] xl:w-[85%] md:pt-[80px] bg-center rounded-[75px] bg-[image:--bgImageSection4Home] px-6 pt-6 pb-[60px] mx-auto h-auto md:mt-[120px]"
    >
      <div className="w-[100%] max-w-[680px] m-auto text-white">
        <p className="text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] leading-[62px] font-DM  text-center font-[700]">
          Explore Our <i className="text-[#FF6E4E] font-[600]">Top-Notch</i>{" "}
          <UnderLineText>SOLUTIONS</UnderLineText>
        </p>
      </div>
      <div className="w-[100%] max-w-[773px] mt-5 font-[400] font-DM text-[14.95px] m-auto">
        <p className="text-center text-white">
          Take a look at all our quality solutions at Strugbits, and discover
          how we can transform your digital presence into a powerful, engaging,
          and memorable experience.
        </p>
      </div>
      {/* ABSOLUTE IMAGES */}
      <div className="hidden xl:block">
        <img
          src={"/assets/images/Home/NToch.png"}
          className=" absolute lg:200px xl:w-[300px] 2xl:600px top-[-50px] right-[-60px] "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/notchLeftM.png"}
          className="absolute  top-[-80px] "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/topsmall.png"}
          className="absolute bottom-[120px]  left-[-60px]"
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/bottomRightMid.png"}
          className="absolute  w-[140px]  xl:w-[170px] xl:block bottom-[-40px] xl:bottom-[-70px] right-[-60px]  "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/bottomMid.png"}
          width={"120px"}
          className="absolute top-[370px]    right-[-60px]"
          alt="Consultation Icon"
        />
      </div>
      {/* CARDs */}
      <div className="flex items-center w-[100%] m-auto justify-center mt-12 gap-8 flex-wrap">
        {NotchData.length &&
          NotchData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-fit bg-[#fff1] md:w-[300px] lg:w-[280px] 2xl:w-[429px] px-[13px] pt-4 pb-[20px] rounded-xl border-2 lg:border border-white h-auto 2xl:h-auto lg:h-[220px]"
              >
                <div className="flex-[0.2]">
                  <img
                    src={item.img}
                    className=" w-fit lg:w-[40px] m-auto md:m-0"
                    alt="Consultation Icon"
                  />
                </div>
                <h3 className="flex-[0.2] text-[13px] lg:text-[8px] md:text-[14px] xl:text-[12px] 2xl:text-[20px] text-center md:text-left font-poppins mt-1 font-[500] text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] lg:text-[8px] 2xl:text-[12px] flex-[1] text-center md:text-left font-poppins border-1 mb-4 border-slate-500 font-[300] my-2 text-white">
                  {item.desc}
                </p>
                <div className="flex flex-col flex-[0.2] gap-3 md:flex-row items-center justify-between">
                  <button
                    onClick={handleAboutModel}
                    className="text-white font-DM border-2 lg:border w-[90px] lg:w-[70px] 2xl:w-[100px] hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out border-white rounded-3xl text-sm p-2 text-[10px] 2xl:text-[12px] lg:text-[8px] lg:px-1 lg:py-0.5"
                  >
                    GET NOW
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <p className="text-[#D4D4D4] font-Open font-semibold text-[13px] md:text-[14px] xl:text-[10px] 2xl:text-[20px]">
                        PARTNERS
                      </p>
                      <span className="border-r-2 lg:border-r ml-1 lg:ml-2 border-white"></span>
                    </div>
                    {item.tech.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="w-[24px] lg:w-[12px] 2xl:w-[24px] h:[24px]"
                        >
                          <img
                            className="w-full"
                            src={data}
                            alt="Consultation Icon"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* BUTTON */}
      <div className="mt-10 text-center">
        <Link
          href="https://calendly.com/peter-1216/30min?back=1&month=2024-07"
          target="_blank"
        >
          <button className="text-white font-DM hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out border-2 w-[229px] font-[400] border-white rounded-3xl text-sm p-2 text=[10px]">
            Get Free Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopNotchSolutionsSection;
