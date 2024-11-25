import Image from "next/image";

import { FeaturedWorkSectionDark } from "@/components/Common/Sections/FeaturedWorkSection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import Container from "@/components/Common/Container/Container";
import CustomButton from "@/components/Common/CustomButton";

import { UiUxFeaturedWork } from "@/utils/ServicesPagesData/UiUxDesignPageData";

import ServicesSection from "../ServicesSection";
import TopWorkSlider from "../TopWorkSlider";

const UiUxDesignPage = () => {
  return (
    <main>
      <section className="bg-center bg-[image:--bgImageHeroSection] w-[100%] min-h-[100dvh] bg-no-repeat bg-cover flex items-center pt-[175px] 2xl:pt-10 ">
        <Container>
          <div className="flex-[1] ">
            <div className="max-w-[650px] ml-auto">
              <h6 className="font-poppins text-[25px] lg:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-[600] uppercase">
                From Sketch to Screen: <br className="hidden lg:block" />
                <span className="relative  w-fit">
                  <span className="relative w-full z-10 ">Providing</span>
                  <br className="block sm:hidden" />
                  <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-2 lg:bottom-3.5 right-0" />
                </span>{" "}
                <span className="text-[#FB724C]">UI/UX Design</span>
              </h6>
              <h6 className="font-poppins text-[25px] lg:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-[600] uppercase">
                SERVICES
              </h6>
              <p className=" font-poppins text-center lg:text-left mt-4 text-[white] text-[12px] md:text-[14px] font-[300]">
                From envisioning the sketch to bringing it to life on the
                screen, we're the experts in user-centric design. Our UI/UX
                design services are the brushstrokes that transform your online
                presence into an engaging masterpiece. Elevate your user
                experience with Strugbits today!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-12">
                <CustomButton btnLabel={"Discuss With Us"} />
              </div>
            </div>
          </div>
          <div className="flex-[1] ">
            <div className="max-w-[694px] relative">
              <div className="hidden absolute bottom-48 left-8 bg-[#ffffff15] w-[80px] -rotate-[20deg] h-[80px] p-2 backdrop-filter backdrop-blur-sm xl:flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                <img
                  className="w-32  rotate-[20deg]"
                  src={"/assets/images/Services/uiux-design/ai.png"}
                  alt="adobe-illustrator Logo"
                />
              </div>
              <Image
                width={1000}
                height={1000}
                quality={100}
                src={"/assets/images/Services/uiux-design/section1.png"}
                className={`w-full object-fill`}
                alt={"section1"}
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className={"lg:my-16"}>
        <div className="flex-[1]">
          <div className="max-w-[706.65px] ">
            <picture>
              <source
                type="image/webp"
                srcSet={"/assets/images/Services/uiux-design/section2.webp"}
              />
              <Image
                src={"/assets/images/Services/uiux-design/section2.png"}
                className="w-full"
                height={1000}
                width={1000}
                quality={100}
                alt="section2-WordPress-IMage"
              />
            </picture>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="max-w-[684px]  ml-auto">
            <h6 className="font-DM  text-[25px] lg:text-[45.59px] text-center lg:text-left  md:leading-[52px]  lg:flex-left text-[#0A141F] font-bold ">
              How UI/UX Services Impact Your{" "}
              <span className="relative w-fit">
                <span className="relative w-full z-10">Business</span>
                <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-3 right-0" />
              </span>
            </h6>
            <div className="text-[12px] font-DM  text-[#8A90A2] md:text-[16.41px]">
              <p className=" mt-8">
                Beyond mere website design, Strugbits offers UI/UX design
                services that are strategically crafted to impact your business
                positively. Our commitment is simple: to make your digital
                presence not only visually appealing but also functionally
                seamless. 
              </p>
              <p className=" mt-8">
                With UI/UX services that prioritize user-centricity, we ensure
                that your audience enjoys a smooth, intuitive, and delightful
                journey through your website. Our UI/UX design services aren't
                just all about aesthetics and looks. They are about delivering
                an exceptional online experience that leaves a lasting impact on
                your users and your bottom line. Choose Strugbits to transform
                your website design into a powerful business tool that drives
                results and sets you apart in the competitive digital landscape.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-12">
              <CustomButton btnLabel={"Discuss With Us"} />
            </div>
          </div>
        </div>
      </Container>

      <section className=" bg-center  bg-[image:--achivementSectionBg]">
        <div className="bg-[#ffffffc0]  ">
          <Container>
            <div className="flex-[1.1]">
              <div className="max-w-[684px]  ">
                <h6 className="font-DM  text-[25px] lg:text-[45.59px] text-center lg:text-left  md:leading-[52px]  lg:flex-left text-[#0A141F] font-bold capitalize">
                  How Our UI/UX Agency Boosts Your Website's{" "}
                  <span className="relative w-fit">
                    <span className="relative w-full z-10">Conversions</span>
                    <span className="absolute w-full h-1 lg:h-1 bg-[#FB724C] bottom-1.5 lg:bottom-2.5 right-0" />
                  </span>
                </h6>
                <div className="text-[12px] font-DM  text-[#8A90A2] md:text-[16.41px]">
                  <p className=" mt-8">
                    Strugbits is your secret weapon for elevating your website's
                    conversions. Our UI/UX design services go beyond the
                    surface, delving deep into user behavior, psychology, and
                    industry best practices to craft interfaces that drive
                    results.
                  </p>
                  <p className=" mt-8">
                    Our UI/UX design services seamlessly blend with web
                    development to create a symphony of functionality and
                    beauty. We optimize your website's architecture, streamline
                    navigation, and enhance call-to-action elements to ensure
                    that every click translates into conversions. With Strugbits
                    as your UI/UX design agency, you're not just investing in a
                    pretty website; you're investing in a tool that attracts,
                    engages, and converts visitors into loyal customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.9]">
              <div className="max-w-[662px] ml-auto">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={"/assets/images/Services/uiux-design/section3.webp"}
                  />
                  <Image
                    src={"/assets/images/Services/uiux-design/section3.png"}
                    className="w-full"
                    height={1000}
                    width={1000}
                    quality={100}
                    alt="section2IMage"
                  />
                </picture>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <Container className={""}>
        <div className="flex-[0.9]">
          <div className="max-w-[662px] ">
            <picture>
              <source
                type="image/webp"
                srcSet={"/assets/images/Services/uiux-design/section4.webp"}
              />
              <Image
                src={"/assets/images/Services/uiux-design/section4.png"}
                className="w-full"
                height={1000}
                width={1000}
                quality={100}
                alt="section2-WordPress-IMage"
              />
            </picture>
          </div>
        </div>
        <div className="flex-[1.1]">
          <div className="max-w-[716px]  ml-auto">
            <h6 className="font-DM  text-[25px] lg:text-[45.59px] text-center lg:text-left  md:leading-[52px]  lg:flex-left text-[#0A141F] font-bold ">
              Creating Digital Magic - The Ultimate UI/UX Design{" "}
              <span className="relative w-fit">
                <span className="relative w-full z-10">Company</span>
                <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-3 right-0" />
              </span>
            </h6>
            <div className="text-[12px] font-DM  text-[#8A90A2] md:text-[16.41px]">
              <p className=" mt-8">
                As the ultimate UI/UX design company, we take pride in turning
                your digital dreams into captivating realities. By partnering
                with us, you're not just choosing a UI/UX design company, but
                you're choosing a transformative journey where innovation meets
                excellence. 
              </p>
              <p className=" mt-8">
                In the competitive digital landscape, user experience is the key
                to success. Our UI/UX designers are passionate architects of
                user-centricity. With every click, scroll, and interaction, we
                ensure that your website not only looks fantastic but also
                functions seamlessly. We understand that your digital presence
                is a reflection of your brand, and we're dedicated to making it
                a remarkable one. Embrace the magic of digital experiences with
                us, and let your brand shine in the digital world like never
                before.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-12">
              <CustomButton btnLabel={"Discuss With Us"} />
            </div>
          </div>
        </div>
      </Container>

      <section className=" bg-[image:--webDesignSectionsBgImage]  2xl:px-0  relative w-full bg-no-repeat bg-center  bg-cover  mx-auto">
        <div className="w-full bg-[#0b1724] bg-opacity-[0.99] pt-24  ">
          <ServicesSection />

          <TopWorkSlider />

          <div className="relative">
            <div className="absolute z-50 hidden md:block left-[10px] top-[10%]  max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <div className="absolute hidden md:block right-[10px] top-[35%] max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <div className="absolute hidden md:block left-[10px] bottom-[10%]  max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <FeaturedWorkSectionDark data={UiUxFeaturedWork} />
          </div>
        </div>
      </section>

      <BusinessSection
        firstText="Ready to Grow"
        orangeText="Your Business"
        lastText="With Skilled Web Website Developers?"
        para="Boost your business and take your online presence to the next level with our web developers’ skills. Get in touch with us now to begin your digital transformation journey with custom web development."
      />
    </main>
  );
};

export default UiUxDesignPage;
