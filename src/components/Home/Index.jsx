'use client';
import { useState } from 'react';
import Image from 'next/image';

import { ImageAccordionData } from '@/utils/HomePageData/ImageAccordionData';
import { countriesCardData } from '@/utils/HomePageData/CountriesCardData';
import { standData } from '@/utils/HomePageData/StandData';


import AboutUsModal from "@/components/Layout/Navbar/AboutUsModal";
import TopNotchSolutionsSection from "./TopNotchSolutionsSection";
import ReadMoreReviewsSection from "./ReadMoreReviewsSection";
import { slides } from "../ContactUs/ContactUsSlider";
import OurTopWorkSection from "./OurTopWorkSection";
import OurMissionSection from "./OurMissionSection";
import StandOutSection from "./StandOutSection";
import ImageAccordion from "./ImageAccordion";
import FAQSection from "./FaqsSection";

import ClientTestimonialsSection from "../Common/Sections/ClientTestimonialsSection";
import CountriesCardSection from "../Common/Sections/CountriesCardSection";
import MileStonesSection from "../Common/Sections/MileStonesSection";
import BusinessSection from "../Common/Sections/BusinessSection";
import BackgroundImage from "../Common/BackgroundImage";
import Container from "../Common/Container/Container";
import UnderLineText from "../Common/UnderLineText";
import CustomButton from "../Common/CustomButton";
import Slider from "../Common/Slider";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const [aboutModel, setAboutModel] = useState(false);

  return (
    <>
      {aboutModel && (
        <AboutUsModal setNav={setNav} setAboutModel={setAboutModel} />
      )}
      <main>
        <BackgroundImage src="/assets/images/bg.webp" alt="home page">
          <section className="max-w-[1440px] mx-auto flex items-center justify-center flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
            {/* LEFT SIDE */}
            <div className="w-full">
              <div className="flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start">
                <h2 className="max-w-[28rem] lg:max-w-[28rem] xl:max-w-[32rem] leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-center lg:text-left xl:text-left font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-white font-bold">
                  IT SOLUTIONS THAT
                  <span className="text-[#FF6E4E]"> AMAZE, </span>
                  <UnderLineText italic>STRATEGIES </UnderLineText>
                  THAT WORK
                </h2>
                <div className="flex justify-center items-center my-6">
                  <p className="font-poppins text-center lg:text-left xl:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-normal text-slate-200">
                    Strugbits is where technology isn't just tools but amazing
                    experiences! Our IT know-how combines smart ideas with
                    effective planning, making your business a sure success.
                    Trust us to make your IT solutions impressive and your
                    strategies foolproof.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5">
                  <CustomButton
                    linkBtn
                    link={"/case-studies"}
                    btnLabel={"View Case Studies"}
                    className={"text-[10.5px] lg:text-[14.95px] "}
                  />
                </div>
                <div className="flex justify-center lg:justify-start flex-wrap items-center gap-8 mt-4">
                  <Image
                    width={167}
                    height={167}
                    quality={100}
                    loading="lazy"
                    src={"/assets/images/Home/partners.png"}
                    alt="Consultation Icon"
                  />
                  <div className="w-[100px]">
                    <Image
                      width={120}
                      height={120}
                      quality={100}
                      loading="lazy"
                      src={"/assets/images/Home/trust.png"}
                      className="w-[100%]"
                      alt="Consultation Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE CAROUSEL | SLIDER */}
            <div className="w-full mt-6 sm:mt-6 lg:mt-0 xl:mt-0">
              <div className="flex flex-row items-center text-left justify-center lg:justify-start xl:justify-start font-medium text-[14px] lg:text-[16px] 2xl:text-[18.69px]">
                <Image
                  width={60}
                  height={60}
                  src={"/assets/images/Home/circlebtn.png"}
                  alt="Consultation Icon"
                />
                <div className="text-left lg:text-left ml-2 text-white">
                  <p className="text-[#FF6E4E]">#NO1</p>
                  <p>WEBSITE SOLUTIONS PROVIDER IN THE GLOBE</p>
                </div>
              </div>
              <Slider slides={slides} />
            </div>
          </section>
        </BackgroundImage>

        <OurMissionSection />

        <StandOutSection standData={standData} />

        <TopNotchSolutionsSection setAboutModel={setAboutModel} />

        <div>
          <img
            className="w-full"
            src={"/assets/images/Home/line.png"}
            alt="Consultation Icon"
          />
        </div>

        <MileStonesSection />

        <OurTopWorkSection />

        <section
          id="testimonial"
          className="bg-center relative bg-cover bg-[image:--bgImageTestomonialSectionHome] py-1"
        >
          <Container>
            <ClientTestimonialsSection />
          </Container>
        </section>

        <ReadMoreReviewsSection />

        <ImageAccordion ImagesSlider={ImageAccordionData} />

        <CountriesCardSection
          data={countriesCardData}
          backgroundImage="bg-[image:--bgImageHeroSection]"
        />

        <FAQSection />

        <BusinessSection
          firstText="Ready to Grow"
          orangeText="Your Business"
          lastText="With Strugbits?"
          para="We're ready to brainstorm, design, develop, and support your digital dreams. Let's come up with a plan, set ambitious goals, and turn your aspirations into achievements. Your growth story starts right here, are you ready to begin?"
        />
      </main>
    </>
  );
};
export default HomePage;
