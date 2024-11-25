"use client";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import CustomButton from "@/components/Common/CustomButton";
import { Team } from "@/utils/LandingPageData";

const TeamSlider = () => {
  return (
    <section className="pt-[40px] md:pt-[80px] 3xl:pt-[140px] bg-center bg-[image:--bgImageTeamLandingPage] bg-no-repeat bg-cover">
      <div className="max-w-[1052px] mx-auto flex flex-col text-center text-white font-poppins items-center px-6">
        <h1 className="  font-bold text-3xl md:text-4xl 3xl:text-5xl mb-4 md:mb-6">
          Meet Our <span className="text-[#FB724C]">Expert</span> Team
        </h1>
        <p className="text-sm lg:text-base mb-10 md:mb-14">
          At Strugbits, our strength lies in our people. Our team of highly
          skilled professionals is dedicated to providing top-tier staff
          augmentation services that help your business thrive. We bring
          together a diverse group of experts with a wide range of skills and
          experiences to ensure we meet your unique needs.
        </p>
        <CustomButton
          btnLabel={"Discuss With Us"}
          link={"/contact-us"}
          linkBtn={true}
        />
      </div>
      <div className="relative top-20">
        <Splide
          aria-label="What We Offers"
          tag="div"
          className="w-full mx-auto mb-6"
          extensions={{ AutoScroll }}
          options={{
            // type: "loop",
            type: "loop",
            autoWidth: true,
            fixedHeight: 432,
            focus: "center",
            preloadPages: 1,
            gap: "16px",
            arrows: false,
            pagination: false,
            speed: 200,
            rewindSpeed: 200,
            autoScroll: {
              speed: 1,
              autoStart: true,
              pauseOnHover: true,
            },
            breakpoints: {
              1028: {
                fixedHeight: 332,
              },
              1300: {
                fixedHeight: 382,
              },
            },
          }}
        >
          {Team.map(({ id, image, name }) => {
            return (
              <SplideSlide key={id} className="max-w-[280px] lg:max-w-[340px]">
                <div className="team-card w-full h-full relative bg-transparent rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt="image "
                    width={290}
                    height={356}
                    className="w-full h-full object-cover relative z-0 rounded-xl"
                  />
                  <div className="bio w-full text-center text-white bottom-0 px-4 py-10 absolute z-10 font-poppins">
                    <h1 className="font-semibold text-base lg:text-xl">
                      {name}
                    </h1>
                    <p className="text-sm lg:text-base">
                      Wix Developer, Karachi, Pk
                    </p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default TeamSlider;
