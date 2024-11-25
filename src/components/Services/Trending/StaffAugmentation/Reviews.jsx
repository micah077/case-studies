"use client";

import Image from "next/image";

import { Rating } from "@mui/material";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import { ClientReviews } from "@/utils/LandingPageData";

const Reviews = () => {
  return (
    <div className="font-poppins">
      <div className="mb-16 max-w-[1024px] mx-auto px-6 text-center">
        <div className="flex gap-3 mb-2 justify-center items-center">
          <p className="text-white text-lg">Trusted by 1,000+ clients</p>
          <Rating value={5} size="small" style={{ color: "#5BAFA9" }} />
        </div>
        <h6 className="font-poppins space-x-2 text-white text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center font-bold">
          Success <span className="text-[#FB724C]">Stories</span> From Our
          Clients
        </h6>
        <p className="text-base text-white">
          Feel free to take a stroll through success stories from our clients,
          and see for yourself how we deliver only the highest quality of work.
          These milestones are like stepping stones in our journey, showcasing
          our dedication to delivering quality and innovation.
        </p>
      </div>
      <Splide
        aria-label="What We Offers"
        tag="div"
        className="w-full mx-auto "
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          autoWidth: true,
          focus: "center",
          preloadPages: 1,
          gap: 24,
          arrows: false,
          pagination: false,
          fixedHeight: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
      >
        {ClientReviews.length &&
          ClientReviews.map((item) => {
            return (
              <SplideSlide
                key={item.id}
                className="py-4 px-6 lg:py-8 lg:px-9 rounded-[20px] border-solid border border-white w-[280px] lg:min-w-[380px] lg:w-[28vw] max-w-[540px] text-white bg-[rgba(255,255,255,0.1)]"
              >
                {/* <div className=""> */}
                <div className="flex gap-3 mb-3 lg:mb-6">
                  <Image
                    src={item.image}
                    alt="user-profile-image"
                    width={64}
                    height={64}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <p className="text-sm mb-2">{item.designation}</p>
                    <Rating
                      readOnly
                      value={item.rating}
                      size="small"
                      style={{ strokeWidth: "1px", color: "#F3C04A" }}
                    />
                  </div>
                </div>
                <p className="text-base text-left font-light">{item.review}</p>
                {/* </div> */}
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
};

export default Reviews;
