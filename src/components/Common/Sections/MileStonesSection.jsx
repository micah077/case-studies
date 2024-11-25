"use client";
import React from "react";
import Container from "../Container/Container";
import MileStoneDataCard from "../MileStoneDataCard";
import Image from "next/image";

const MileStonesSection = ({ styles }) => {
  return (
    <section>
      <Container className={styles ? styles : `xl:-mt-24 lg:pt-0 `}>
        <div
          id="success-stories"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex items-center justify-center gap-3">
            <p className="font-poppins text-[18px] font-[500] capitalize">
              Trusted by clients globally
            </p>
            <Image
              width={80}
              height={80}
              quality={100}
              loading="lazy"
              src="/assets/images/Home/ValuableClient/stars.png"
              alt="Stars Image"
            />
          </div>
          <h1 className="text-[30px] max-w-[917px] sm:text-[34px] md:text-[38px lg:text-[46px] font-poppins font-[600] text-[#0A141F]">
            Let's Take a Tour of Our{" "}
            <span className="text-[#FF6E4E]">100+ Milestones</span>
          </h1>
          <div className="w-full max-w-[1052px] mt-4">
            <p className="text-[16px] text-[#292929] font-poppins leading-7">
              Feel free to take a stroll through our collection of 100+
              milestones, and see for yourself how we deliver only the highest
              quality of work. These milestones are like stepping stones in our
              journey, showcasing our dedication to delivering quality and
              innovation.
            </p>
          </div>
        </div>
      </Container>

      <Container className="flex-col lg:flex-col xl:flex-row xl:gap-0 xl:max-w-[1532px]">
        <div className="mb-[60px] xl:mb-0 w-full py-6 max-w-[330px] shadow-2xl ">
          <div className="w-full mt-4">
            <Image
              width={150}
              height={150}
              quality={95}
              loading="lazy"
              className="m-auto"
              src="/assets/images/Home/logoo.png"
              alt="Consultation Icon"
            />
          </div>
          <h2 className="text-center text-[18px] font-[500]">Excellent</h2>
          <div className=" w-[50%] lg:w-[60%] xl:w-[70%] 2xl:w-[80%] m-auto my-3">
            <img
              src={"assets/images/Home/stars.png"}
              className="m-auto"
              alt="Consultation Icon"
            />
          </div>
          <h3 className="text-center text-[14px] font-Roboto">
            Based on <span className="font-[600] underline">100 reviews</span>
          </h3>
          <div className="text-center mt-1">
            <img
              src={"assets/images/Home/frame.png"}
              className="m-auto"
              alt="Consultation Icon"
            />
          </div>
        </div>
        <MileStoneDataCard />
      </Container>
    </section>
  );
};

export default MileStonesSection;
