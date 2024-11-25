import Image from "next/image";

import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";
import Container from "@/components/Common/Container/Container";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import ExploreOurPerformanceSection from "../ExploreOurPerformanceSection";
import WhyChooseUsSection from "../WhyChooseUsSection";
import ServicesSection from "../ServicesSection";

const SeoPage = () => {
  return (
    <main>
      <BackgroundImage
        src="/assets/images/Services/SEO/heroSectionBg.png"
        alt="Seo page"
      >
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
          <div>
            <div className="max-w-[756px]">
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-white font-bold uppercase">
                Boost Your <span className="text-[#FF6E4E]">Brand's</span>
              </h2>

              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-white font-bold uppercase">
                VISIBILITY with Our{" "}
              </h2>
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-white font-bold uppercase">
                <UnderLineText italic>Professional</UnderLineText>

                <span> SEO Services </span>
              </h2>
              <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[white] text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
                Get your brand noticed online with Strugbits' professional SEO
                services! We make sure your website pops up first when people
                search online, bringing in more visitors and making your brand
                look great. Let us work our magic to make your website shine
                bright in the crowded world of the internet with our affordable
                SEO services!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-8">
                <CustomButton
                  btnLabel={"Discuss With Us"}
                  linkBtn
                  link={"/contact-us"}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="max-w-[653px]">
              <div className="hidden xl:block">
                <div className="border customAnimation border-[#FFFFFF] -rotate-12  flex justify-center items-center rounded-[27.4px] h-[100px] w-[100px] absolute top-10 left-52 backdrop-filter backdrop-blur-lg">
                  <Image
                    width={60}
                    height={60}
                    className="h-auto w-auto"
                    src={"/assets/images/Services/SEO/Icons/icon1.svg"}
                    alt="logos"
                  />
                </div>
                <div className="border bg-[#FFFFFF1A] customAnimation border-[#FFFFFF] -rotate-12  flex justify-center items-center rounded-[27.4px] h-[82px] w-[82px] absolute bottom-28 left-5 backdrop-filter backdrop-blur-xl">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/Services/SEO/Icons/icon2.svg"}
                    className="h-auto w-auto"
                    alt="logos2"
                  />
                </div>

                <div className="border bg-[#FFFFFF08] customAnimation2 border-[#FFFFFF] rotate-12  flex justify-center items-center rounded-[27.4px] h-[100px] w-[100px] absolute bottom-20 right-28  backdrop-filter backdrop-blur-xl">
                  <Image
                    width={56}
                    className="h-auto w-auto"
                    height={56}
                    src={"/assets/images/Services/SEO/Icons/icon3.svg"}
                    alt="logos"
                  />
                </div>
              </div>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/Services/SEO/sec1.webp"
                />
                <Image
                  width={600}
                  height={600}
                  quality={100}
                  priority
                  src="/assets/images/Services/SEO/sec1.png"
                  alt="heroSectionImage"
                />
              </picture>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <Container className={`lg:gap-x-[76px]`}>
        <div className="relative flex-[1] 2xl:pl-3">
          <div className="hidden xl:block">
            <div className="customAnimation3 z-50  h-[180px] w-[270px] absolute -bottom-10 right-20 ">
              <Image
                width={270}
                height={180}
                className="h-auto w-auto"
                src={"/assets/images/Services/SEO/sec2Second.png"}
                alt="logos"
              />
            </div>
            <div className="absolute -left-10 -bottom-24">
              <Image
                className="max-h-[395px] max-w-[395px]"
                src={"/assets/images/Services/SEO/sec1Circle.png"}
                width={395}
                height={395}
                alt="circle"
              />
            </div>
            <div className="customAnimation4 absolute xl:-top-2 2xl:right-20 right-0 2xl:-top-10 -top-24">
              <Image
                className="h-auto w-auto"
                src={"/assets/images/Services/SEO/sec2Third.png"}
                width={60}
                height={80}
                alt="Image"
              />
            </div>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/images/Services/SEO/sec2.webp"
            />
            <Image
              src={"/assets/images/Services/SEO/sec2.png"}
              height={500}
              width={500}
              quality={100}
              className="max-w-[470px] w-full customAnimation3 "
              alt="secondSectionImage"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-5 flex-[1]">
          <div>
            <h6 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left  md:leading-[52px]  font-bold ">
              Rank Higher: Professional SEO{" "}
              <span>
                Services at{" "}
                <br className="hidden lg:block xl:hidden 2xl:hidden " />
              </span>{" "}
              <UnderLineText italic>Unbeatable Prices</UnderLineText>
            </h6>
          </div>
          <div className="flex flex-col gap-5 text-[#8A90A2]">
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
              At Strugbits, we offer professional SEO services at prices you
              can't beat. As an experienced SEO company, we know how to boost
              your website's ranking without costing you a fortune. Our
              affordable services are tailored to make sure your website shows
              up higher in search results, bringing in more visitors and making
              your brand more visible online.
            </p>
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
              With our budget-friendly SEO services, we use smart strategies to
              improve your website's ranking on search engines. From finding the
              right keywords to making your website more attractive to search
              engines, we'll help your brand stand out online. Let us help you
              climb the search engine ladder and get noticed by more customers!
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
            <CustomButton
              btnLabel={"Discuss With Us"}
              linkBtn
              link={"/contact-us"}
            />
          </div>
        </div>
      </Container>

      <Container className={"lg:my-16 lg:gap-x-[76px]"}>
        <div className="flex flex-col gap-5  flex-[1]">
          <div>
            <h6 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left  md:leading-[52px]  font-bold ">
              We Guarantee 5X Organic
            </h6>
            <h6 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left md:leading-[52px]  font-bold ">
              <UnderLineText italic>Growth</UnderLineText>

              <span> for Your Brand</span>
            </h6>
          </div>
          <div className="flex flex-col gap-5 text-[#8A90A2]">
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
              We stand by our promise to deliver exceptional results with our
              affordable SEO services. As a professional SEO company, we
              guarantee a 5X increase in organic growth for your brand, ensuring
              significant improvement in your website's visibility and traffic.
            </p>
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
              With our proven strategies and dedicated team of experts, we
              implement tailored SEO solutions that drive real, measurable
              results. From optimizing your website's content to enhancing its
              technical aspects, we leave no stone unturned in our quest to
              boost your brand's online presence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
            <CustomButton
              btnLabel={"Discuss With Us"}
              linkBtn
              link={"/contact-us"}
            />
          </div>
        </div>

        <div className="relative  flex-[1]">
          <div className="hidden xl:block">
            <div className=" customAnimation6 z-50  h-[112px] w-[113px] absolute top-16 left-0 ">
              <Image
                width={113}
                height={112}
                src={"/assets/images/Services/SEO/sec3Second.png"}
                alt="logos"
              />
            </div>

            <div className=" customAnimation3 z-50  h-[179px] w-[251px] absolute -bottom-16 right-16 ">
              <Image
                width={251}
                height={179}
                src={"/assets/images/Services/SEO/sec3Third.png"}
                alt="logos"
              />
            </div>

            <div className="  h-[327px] -z-30 w-[345px] absolute -top-24 right-0 ">
              <Image
                width={345}
                height={327}
                src={"/assets/images/Services/SEO/Icons/sec3Icon.svg"}
                alt="vectorIcon"
              />
            </div>
          </div>

          <picture>
            <source
              type="image/webp"
              srcSet={"/assets/images/Services/SEO/sec3.webp"}
            />
            <Image
              src={"/assets/images/Services/SEO/sec3.png"}
              width={500}
              height={500}
              quality={100}
              className="max-w-[603px] w-full"
              priority
              alt="sec3Image"
            />
          </picture>
        </div>
      </Container>

      <WhyChooseUsSection />

      <ExploreOurPerformanceSection />

      <ServicesSection />

      <BusinessSection
        firstText="Ready to Partner With"
        orangeText=" The Best"
        lastText="SEO Company?"
        para="Team up with Strugbits, the ultimate professional SEO powerhouse, to turn your website into a search engine superstar. With our personalized approach and unbeatable expertise, your brand will soar to new heights in no time."
      />
    </main>
  );
};

export default SeoPage;
