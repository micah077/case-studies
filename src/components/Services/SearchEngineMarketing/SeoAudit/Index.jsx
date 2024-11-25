import Image from 'next/image';

import { topSeoServicesNew } from "@/utils/ServicesPagesData/SeoPageData";

import ImageTextFeatureSection from "@/components/Common/Sections/ImageTextFeatureSection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";
import Container from "@/components/Common/Container/Container";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import SeoAuditServicesSection from "./ServicesSection";
import SeoAuditServicesCard from "./SeoServicesCard";
import SeoAuditCardSlider from "./SeoCardSlider";

const SeoAuditPage = () => {
  return (
    <main>
      <BackgroundImage
        src="/assets/images/Services/SEO/heroSectionBg.png"
        alt="seo audit page"
      >
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
          <div>
            <div className="max-w-[756px]">
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-white font-bold uppercase">
                <span className="text-[#FF6E4E]">SEO Audit</span> Services:
              </h2>
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 sm:leading-[50px] lg:leading-[45px] xl:leading-[60px] text-white font-bold uppercase">
                Flawless <UnderLineText italic>Solutions</UnderLineText>
              </h2>
              <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[white] text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
                Get ready for success with our SEO Audit Services – they're your
                key to doing great online. Our careful checks find hidden
                chances to make your website stand out more in search results.
                Let's skyrocket your online presence together with our perfect
                solutions.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-8">
                <CustomButton
                  link={"/contact-us"}
                  linkBtn
                  btnLabel={"Discuss With Us"}
                />
              </div>
            </div>
          </div>

          <div className="max-w-[653px] relative">
            <div className="hidden lg:block xl:block">
              <div className="border customAnimation_seo_audit border-[#FFFFFF] flex justify-center items-center rounded-[27.4px] h-[100px] w-[100px] absolute top-2 right-[38%] backdrop-filter backdrop-blur-lg">
                <Image
                  width={60}
                  height={60}
                  className="h-auto w-auto"
                  src={"/assets/images/Services/seo-audit/Icons/icon1.svg"}
                  alt="logos"
                />
              </div>
              <div className="border customAnimation_seo_audit2 border-[#FFFFFF] -rotate-12 flex justify-center items-center rounded-[27.4px] h-[100px] w-[100px] absolute bottom-32 left-2 backdrop-filter backdrop-blur-lg">
                <Image
                  width={100}
                  height={100}
                  src={"/assets/images/Services/SEO/Icons/icon2.svg"}
                  className="h-auto w-[60px] rotate-[35deg]"
                  alt="logos2"
                />
              </div>

              <div className="border bg-[#FFFFFF08] customAnimation_seo_audit3 border-[#FFFFFF] rotate-12 flex justify-center items-center rounded-[27.4px] h-[100px] w-[100px] absolute bottom-10 right-6  backdrop-filter backdrop-blur-lg">
                <Image
                  width={56}
                  className="h-auto w-auto"
                  height={56}
                  src={"/assets/images/Services/seo-audit/Icons/icon3.svg"}
                  alt="logos"
                />
              </div>
            </div>
            <picture>
              <source
                type="image/webp"
                srcSet={"/assets/images/Services/seo-audit/sec1.webp"}
              />
              <Image
                width={500}
                height={500}
                quality={100}
                priority
                src={"/assets/images/Services/seo-audit/sec1.png"}
                alt="heroSectionImage"
              />
            </picture>
          </div>
        </section>
      </BackgroundImage>

      <Container className={`lg:gap-x-[76px]`}>
        <div className="relative flex-[1]">
          <div className="hidden xl:block">
            <div className="customAnimation6 z-50 h-fit w-fit absolute top-16 left-0">
              <Image
                width={180}
                height={100}
                src={"/assets/images/Services/seo-audit/sec2Image2.png"}
                alt="logos"
              />
            </div>

            <div className="customAnimation7 z-50 h-[179px] w-[251px] absolute -bottom-16 right-16">
              <Image
                width={251}
                height={179}
                src={"/assets/images/Services/seo-audit/sec2Image3.png"}
                alt="logos"
              />
            </div>

            <div className="-z-30 absolute bottom-1">
              <Image
                width={200}
                height={200}
                src={"/assets/images/Services/seo-audit/orangeCircle.png"}
                alt="vectorIcon"
              />
            </div>
          </div>

          <picture>
            {/* <source
              type="image/webp"
              srcSet={"/assets/images/Services/SEO/sec3.webp"}
            /> */}
            <Image
              src={"/assets/images/Services/seo-audit/sec2Image1.png"}
              width={500}
              height={500}
              quality={100}
              className="max-w-[603px] w-full"
              priority
              alt="sec3Image"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-5 flex-[1]">
          <div>
            <h2 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left  md:leading-[52px]  font-bold ">
              Here's Why You Shouldn't Ignore an Services at{" "}
              <UnderLineText italic>SEO Audit</UnderLineText> for Your Site
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[#8A90A2]">
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              Ignoring an SEO audit for your website is like driving with
              blinders on in the digital world. An SEO audit is not just a box
              to check; it's a crucial step in ensuring your website's success.
            </p>
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              Our SEO audit services uncover hidden issues that can be hindering
              your site's performance, such as broken links, poor site
              structure, or outdated content. By addressing these issues, you
              can improve your site's visibility, rankings, and overall user
              experience.
            </p>
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              Don't underestimate the power of an SEO audit - it's the key to
              unlocking your site's full potential and staying ahead of the
              competition. Invest in our website SEO audit services today and
              propel your site towards digital success.
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
        <div className="flex flex-col gap-5  flex-1">
          <div>
            <h2 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left  md:leading-[52px]  font-bold ">
              Want Site Visibility? Trust
            </h2>
            <h2 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left md:leading-[52px]  font-bold ">
              <UnderLineText>Strugbits</UnderLineText> SEO Audits Services
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[#8A90A2]">
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              If you desire increased site visibility, Strugbits' SEO audit
              services are your solution. Our comprehensive website SEO audit
              delves deep into your site's structure, content, and performance,
              uncovering areas for improvement and optimization.
            </p>
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              With our meticulous approach, we identify issues such as broken
              links, duplicate content, and poor keyword usage that may be
              hindering your site's visibility and rankings. By addressing these
              issues, our SEO audit services pave the way for enhanced search
              engine visibility and increased organic traffic to your site.
            </p>
            <p className="font-DM text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              Trust Strugbits to provide you with actionable insights and
              recommendations tailored to improve your site's SEO performance.
              With our SEO audit services, your website can reach its full
              potential and succeed online like never before.
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

        <div className="relative flex-1">
          <div className="hidden xl:block">
            <div className="customAnimation4 z-50 absolute -top-24 right-0">
              <Image
                width={100}
                height={100}
                src={"/assets/images/Services/seo-audit/sec3Image3.png"}
                alt="logos"
              />
            </div>

            <div className="customAnimation7 z-50 absolute -bottom-16 -right-16 ">
              <Image
                width={200}
                height={200}
                src={"/assets/images/Services/seo-audit/sec3Image2.png"}
                alt="logos"
              />
            </div>

            <div className="-z-30 absolute -top-24 -left-16">
              <Image
                width={345}
                height={327}
                src={"/assets/images/Services/seo-audit/blueCircle.png"}
                alt="vectorIcon"
              />
            </div>
          </div>

          <picture>
            {/* <source
              type="image/webp"
              srcSet={"/assets/images/Services/SEO/sec3.webp"}
            /> */}
            <Image
              src={"/assets/images/Services/seo-audit/sec3Image1.png"}
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

      {/* <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/seo-audit/sec1image1.png"
        webpSrc=""
        altText="Section2Image"
        titlePart1="Here's Why You Shouldn't Ignore an for"
        underlinedText=" SEO Audit"
        titlePart2="Your Site"
        layoutDirection="row"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Ignoring an SEO audit for your website is like driving with blinders
          on in the digital world. An SEO audit is not just a box to check; it's
          a crucial step in ensuring your website's success.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Our SEO audit services uncover hidden issues that can be hindering
          your site's performance, such as broken links, poor site structure, or
          outdated content. By addressing these issues, you can improve your
          site's visibility, rankings, and overall user experience.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Don't underestimate the power of an SEO audit - it's the key to
          unlocking your site's full potential and staying ahead of the
          competition. Invest in our website SEO audit services today and propel
          your site towards digital success.
        </p>
      </ImageTextFeatureSection> */}

      {/* <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/seo-audit/sec2image1.png"
        webpSrc=""
        altText="Section2Image"
        titlePart1="  Want Site Visibility? Trust"
        underlinedText=" Strugbits"
        titlePart2="SEO Audits Services"
        layoutDirection="row-reverse"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          If you desire increased site visibility, Strugbits' SEO audit services
          are your solution. Our comprehensive website SEO audit delves deep
          into your site's structure, content, and performance, uncovering areas
          for improvement and optimization.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          With our meticulous approach, we identify issues such as broken links,
          duplicate content, and poor keyword usage that may be hindering your
          site's visibility and rankings. By addressing these issues, our SEO
          audit services pave the way for enhanced search engine visibility and
          increased organic traffic to your site.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Trust Strugbits to provide you with actionable insights and
          recommendations tailored to improve your site's SEO performance. With
          our SEO audit services, your website can reach its full potential and
          succeed online like never before.
        </p>
      </ImageTextFeatureSection> */}

      <SeoAuditServicesSection />

      <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/seo-audit/sec4Image1.png"
        webpSrc=""
        altText="Section2Image"
        titlePart1="SEO Audit "
        underlinedText=" Pricing"
        titlePart2=""
        layoutDirection="row"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Our SEO audit pricing is transparent and tailored to meet the unique
          needs of your website. We offer competitive rates based on the size
          and complexity of your site, ensuring that you receive the most value
          for your investment. As part of the audit, we also assess the level of
          SEO your site requires. This helps us recommend the best package from
          Strugbits, whether you should opt for a one-time SEO service or a
          recurring one, based on your long-term goals and needs.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Our pricing structure takes into account factors such as the number of
          pages, the depth of analysis required, and any additional services
          requested. We believe in providing affordable SEO audit services
          without compromising on quality, so you can access the insights and
          recommendations needed to improve your website's performance.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Contact us today for a customized quote and take the first step
          towards optimizing your website for success in the digital world.
        </p>
      </ImageTextFeatureSection>

      <section className="py-16 md:pb-[125px] bg-[image:--bgImageSec4Seo]">
        <div className="lg:flex-col md:gap-[60px] py-8 px-6">
          <div className="max-w-[850px] flex flex-col gap-3 text-white mx-auto">
            <h2 className="text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] leading-[62px] font-poppins text-center font-[700]">
              Tools and Software's We Use for
              <span className="text-[#FF6E4E]"> SEO Audits</span>
            </h2>
            <div>
              <p
                className="font-poppins md:leading-[26.16px] text-center mt-4 text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]
              "
              >
                We use special tools for SEO checks on websites. These tools
                help us find what's good and what needs fixing, making sure your
                site does well on search engines. With these tools, we make sure
                your website is in top shape for online success.
              </p>
            </div>
          </div>
        </div>

        <SeoAuditCardSlider>
          {topSeoServicesNew.map((e, i) => (
            <div key={i} className="flex justify-center items-center w-full">
              <SeoAuditServicesCard
                title={e.title}
                desc={e.desc}
                imgSrc={e.imgSrc}
              />
            </div>
          ))}
        </SeoAuditCardSlider>
      </section>
      <BusinessSection
        firstText="Ready to Make Your Site"
        orangeText=" User-Friendly"
        lastText="for Search Engines?"
        para="Are you ready to make your website user-friendly for search engines? Our SEO audit services can help! Let's optimize your site together and boost your online visibility. Contact us now to get started!"
      />
    </main>
  );
};

export default SeoAuditPage;
