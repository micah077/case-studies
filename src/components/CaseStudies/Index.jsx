import Image from "next/image";

import ClientTestimonialsSection from "../Common/Sections/ClientTestimonialsSection";
import CountriesCardSection from "../Common/Sections/CountriesCardSection";
import BusinessSection from "../Common/Sections/BusinessSection";
import Container from "../Common/Container/Container";
import CustomButton from "../Common/CustomButton";

import AnimatedCircularText from "./AnimatedCircularText";
import TopNotchSection from "./TopNotchSection";
import DraggablePills from "./DraggablePills";
import GallerySlider from "./GallerySlider";
import CaseCard from "./CaseCard";

import { countriesCardData } from "@/utils/HomePageData/CountriesCardData";
import { data } from "@/utils/CaseStudiesPageData";

const CaeStudiesPage = () => {
  return (
    <main>
      <div
        style={{ backgroundRepeat: "no-repeat" }}
        className="bg-[image:--bgImageCaseStudiesSec1] pt-[120px]  sm:pt-[150px]   bg-[#122033]"
      >
        <section className=" bg-center  relative  w-[100%] min-h-[55vh] sm:min-h-[75dvh] pb-20 lg:pb-[150px] bg-no-repeat bg-cover flex items-center lg:pt-0 ">
          <div className="hidden lg:block absolute  2xl:-bottom-[1%] 3xl:bottom-[5%] 2xl:left-[15%] -bottom-2 left-[10%]">
            <Image
              src={"/assets/images/Case Studies/scroll.png"}
              className=" h-[180x] 2xl:h-[202px] w-[27px] cursor-pointer scroll-image"
              alt="scroll"
              height={500}
              width={500}
              quality={100}
            />
          </div>

          <div className="w-full max-w-[1200px] lg:m-auto px-[50px] md:pb-20 2xl:pb-0">
            <div className="flex-col ">
              <div className="w-[100%] flex lg:m-auto    mt-10 flex-col lg:min-h-[40vh] justify-start items-center gap-6   ">
                <div className="text-[#fff]">
                  <p className=" font-poppins text-center text-[22px] sm:text-[30px] md:text-[40px]  2xl:text-left font-bold lg:text-[45px] xl:text-[50px] 2xl:text-[70px] text-[#fff] ">
                    ALL IN ONE{" "}
                  </p>
                  <h6 className="font-poppins text-center text-[22px] sm:text-[30px] md:text-[45px] 2xl:text-left  font-bold lg:text-[45px] xl:text-[50px] 2xl:text-[70px]">
                    {" "}
                    <span className="text-[#FF6E4E]">PORTFOLIO</span>{" "}
                    <br className="block sm:hidden" />
                    <span className="relative italic w-fit">
                      <span className="relative w-full z-10">
                        & CASE STUDIES
                      </span>
                      <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-[6px] md:bottom-[14px] xl:bottom-[16px] 2xl:bottom-[23px] right-0" />
                    </span>
                  </h6>
                  <div className="flex gap-6 flex-col xl:flex-row items-center mt-6">
                    <CustomButton
                      linkBtn
                      link={"/contact-us"}
                      btnLabel={`Discuss With Us`}
                    />

                    <p className=" font-poppins text-center text-[10px] sm:text-[12px] md:text-[13px] mb-8 lg:mb-0 2xl:text-left font-normal text-[#F6F9FF]  2xl:text-[14px] ">
                      Strugbits, a place where websites aren't just pages but
                      extraordinary experiences! Our IT magic combines stunning
                      designs with strategic brilliance, turning your site into
                      a magnet for success. With us, your website will be a
                      'Wow' and your success a 'Sure Thing'.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCLE ANIMATED TEXT */}
          <div className="hidden 2xl:block  z-30 absolute -bottom-[120px] right-72">
            <div className="relative">
              <AnimatedCircularText />
              <Image
                style={{
                  borderRadius: `50% 50% 50% 50% / 0% 0% 100% 100% `,
                }}
                width={250}
                height={250}
                quality={100}
                className="absolute -top-10 -z-30"
                src={"/assets/images/Case Studies/Ellipse.png"}
                alt="circle"
              />
            </div>
          </div>
        </section>
        {/* Second section */}
        <div className="px-[50px] py-[40px] md:py-[50px]  lg:py-[100px] bg-[#F8F9FF] 2xl:pt-[130px]   lg:rounded-[100px]">
          <div className="w-full max-w-[1440px] m-auto">
            <div className=" w-[90%]  md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] m-auto">
              <h6 className=" font-poppins font-semibold text-[18px] sm:text-[20px]  md:text-[25px] lg:text-[33px] xl:text-[40px] 2xl:text-[46px] text-center">
                We Build <span className="text-[#FF6E4E]">Solutions</span> FOR
                YOU
              </h6>
              <p className="text-[#292929] font-poppins text-[14px] mt-2 2xl:text-[16px] text-center   ">
                Unlock the power of advanced features meticulously crafted for
                you by our expert website development team. Elevate your online
                presence with Wix, experiencing a seamless blend of innovation
                and design tailored to your unique needs.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-6 mt-16 w-[100%]   m-auto">
              <div className=" shadow-xl md:col-span-6  lg:col-span-2 pt-8  bg-[#fff] lg:row-span-2  ">
                <div className="h-auto mb-6 lg:h-auto w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]  m-auto font-poppins text-center leading-9 text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
                  <h6 className="font-bold ">
                    Development{" "}
                    <span className="text-[#FF6E4E]">Solutions</span>{" "}
                  </h6>
                </div>
                <div>
                  <DraggablePills />
                </div>
              </div>
              <div className=" rounded-lg shadow-xl md:col-span-3 lg:col-span-2 py-6 bg-[#fff] flex flex-col gap-5 items-center justify-center">
                <div className="">
                  <img
                    src={"/assets/images/Case Studies/uiux.png"}
                    alt="Consultation Icon"
                    className="m-auto"
                  />
                </div>
                <div className=" mt-3 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] m-auto text-center text-[#020818] font-poppins font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  ">
                  <h6>UI/UX & Graphic Design Solutions</h6>
                </div>
              </div>
              <div className="rounded-lg shadow-xl md:col-span-3 lg:col-span-2 py-6 bg-[#fff] flex flex-col gap-5 items-center justify-center">
                <div className="">
                  <img
                    src={"/assets/images/Case Studies/app.png"}
                    alt="Consultation Icon"
                    className="m-auto"
                  />
                </div>
                <div className=" w-[50%] mt-1 m-auto text-center text-[#020818] font-poppins font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  ">
                  <h6>App Development Solution</h6>
                </div>
              </div>
              <div className=" rounded-lg shadow-xl md:col-span-3 lg:col-span-2 py-6 bg-[#fff] flex flex-col gap-5 items-center justify-center">
                <div className="">
                  <img
                    src={"/assets/images/Case Studies/seo.png"}
                    alt="Consultation Icon"
                    className="m-auto"
                  />
                </div>
                <div className=" w-[95%] mt-1 md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mb-3 m-auto text-center text-[#020818] font-poppins font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                  <h6>Search Engine Optimization (SEO)</h6>
                </div>
              </div>
              <div className=" rounded-lg shadow-xl md:col-span-3 lg:col-span-2 py-6 bg-[#fff] flex flex-col gap-5 items-center justify-center">
                <div className="">
                  <img
                    src={"/assets/images/Case Studies/ring.png"}
                    alt="Consultation Icon"
                    className="m-auto"
                  />
                </div>
                <div className=" w-[95%] mt-3 md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mb-3 m-auto text-center text-[#020818] font-poppins font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                  <h6>Social Media Management</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopNotchSection />

      <div className="bg-white py-[80px] w-full ">
        <h6 className=" font-poppins text-center font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] text-[#0A141F]">
          Why We are <span className=" text-[#FF6E4E]">Best</span> FOR YOU
        </h6>
        <div className="text-center w-[90%] lg:w-[75%] xl:w-[65%]  2xl:w-[50%] m-auto ">
          <p className="font-poppins font-normal text-[#292929] mt-4 mb-24 my-2 text-[15px] ">
            Unlock the power of advanced features meticulously crafted for you
            by our expert website development team. Elevate your online presence
            with Wix, experiencing a seamless blend of innovation and design
            tailored to your unique needs.
          </p>
        </div>
        <div className="flex justify-between gap-10 xl:gap-5 2xl:gap-10 flex-wrap w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[65%] 2xl:w-[55%] m-auto items-center">
          {data.length &&
            data.map((item, index) => {
              return <CaseCard key={index} item={item} />;
            })}
        </div>
      </div>

      <GallerySlider />

      <section className="bg-center relative bg-cover bg-[image:--bgImageTestomonialSectionHome]">
        <Container>
          <ClientTestimonialsSection />
        </Container>
      </section>

      <section className="bg-cover bg-[image:--bgImageCountriesSectionHome] pb-[120px] xl:pb-[70px] 2xl:pb-[80px] z-[-5] min-h-[900px]  xl:min-h-[750px]  2xl:min-h-[823px] text-center pt-8 md:pt-[70px]">
        <CountriesCardSection data={countriesCardData} />
      </section>

      <BusinessSection
        firstText="Ready to Grow"
        orangeText=" Your Business"
        lastText="With Strugbits?"
        para="We're ready to brainstorm, design, develop, and support your digital dreams. Let's come up with a plan, set ambitious goals, and turn your aspirations into achievements. Your growth story starts right here, are you ready to begin?"
      />
    </main>
  );
};

export default CaeStudiesPage;
