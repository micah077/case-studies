import { webDesignCardData } from "@/utils/ServicesPagesData/WebDesignPageData";
import Image from "next/image";
import Link from "next/link";
import WDPCard from "../WDPCard";

const DesignProcessSection = ({
  starsText,
  firstText,
  orangeText,
  lastText,
  para,
}) => {
  return (
    <section
      style={{
        backgroundSize: "100% 100%",
      }}
      className=" relative w-full bg-center bg-[image:--bgImageHeroSection]  mx-auto h-auto "
    >
      <div className="bg-[#0A141FCC] bg-opacity-80 px-6  md:py-[120px] py-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full max-w-[750px] m-auto text-white ">
            <p className="text-[25px] md:text-[30px] lg:text-[40px] font-[600] xl:text-[46px] font-DM text-center uppercase">
              Let's Explore Our Flawless
              <br className="hidden lg:block" />
              <span className="text-[#FF6E4E] "> Web Design</span>{" "}
              <span className="relative w-fit">
                <span className="relative w-full z-10">Process</span>
                <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-3 right-0" />
              </span>
            </p>

            <p className="text-center text-white mt-5 font-[400] font-poppins text-[14px] m-auto">
              Explore how we create amazing websites step by step. From planning
              to launch, we'll show you how we make your website perfect.
            </p>
          </div>

          <div className="flex gap-[45px] w-full flex-wrap mt-10 justify-center">
            {webDesignCardData.map((e, i) => (
              <WDPCard
                key={i}
                imgSrc={e.imgSrc}
                serialNum={e.serialNum}
                Heading={e.Heading}
                text={e.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
