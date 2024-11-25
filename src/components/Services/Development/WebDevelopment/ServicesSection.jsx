"use client";

import Link from "next/link";

import { webDevelopmentData } from "@/utils/ServicesPagesData/WebDevPageData";

import TechnologiesCard from "@/components/Common/TechnologiesCard";
import UnderLineText from "@/components/Common/UnderLineText";

const ServicesSection = ({ handleAboutModel }) => {
  return (
    <section
      style={{
        backgroundSize: `100% 100%`,
        backgroundRepeat: "no-repeat",
      }}
      className=" relative w-full  bg-[image:--webDesignSectionsBgImage]  "
    >
      <div className="w-full bg-[#0b1724] bg-opacity-[0.99] pb-16 md:pb-0">
        <div className="max-w-[1440px] mx-auto md:py-[120px] px-5 md:px-0 py-6 ">
          <div>
            <div className="w-full lg:w-[45%] m-auto text-white">
              <h6 className="text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] font-DM text-center font-[700] uppercase">
                Our Web
                <i className="text-[#FF6E4E] font-[600]"> development</i>
                <br />
                <UnderLineText>services</UnderLineText>
              </h6>
            </div>
            <div className=" w-[100%] lg:w-[40%] xl:w-[50%] 2xl:w-[40%]  mt-5 font-[400] font-DM m-auto">
              <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] text-white">
                Supercharge your online presence with our expert web development
                services. We turn ideas into dynamic websites that captivate and
                convert. Are you ready to make your mark in the digital world
                with our web development services?
              </p>
            </div>

            <div className="flex items-center w-full m-auto justify-center mt-12 gap-[21px] lg:gap-[36px] flex-wrap">
              {webDevelopmentData.length &&
                webDevelopmentData.map((item, index) => (
                  <TechnologiesCard
                    renderBtn
                    title={item.title}
                    key={index}
                    desc={item.desc}
                    imgSrc={item.img}
                    handleAboutModel={handleAboutModel}
                  />
                ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="https://calendly.com/peter-1216/30min?back=1&month=2024-07"
                target="_blank"
                className="text-white max-w-[230px] font-DM hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out  border-2 w-[229px] font-[400] border-white rounded-3xl text-sm p-2 text=[10px]"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
