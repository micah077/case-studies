"use client";
import Image from "next/image";

import FeaturedBlogsSection from "./FeaturedBlogsSection";
import StayConnectedSection from "./StayConnectedSection";
import LatestBlogs from "./LatestBlogs";
import BlogSlider from "./BlogSlider";

import BusinessSection from "../Common/Sections/BusinessSection";
import BackgroundImage from "../Common/BackgroundImage";
import UnderLineText from "../Common/UnderLineText";
import CustomButton from "../Common/CustomButton";

import { featuredBlogs } from "@/utils/BlogPageData";
import { useEffect, useState } from "react";

const BlogsPage = ({ blogs }) => {
  const [filter, setFilter] = useState("All");
  const [filterDatas, setFilerDatas] = useState([]);
  const filterData = (categroy) => {
    if (categroy === "All") {
      setFilerDatas(featuredBlogs);
      setFilter(categroy);
      return;
    }
    setFilter(categroy);
    const data = featuredBlogs.filter((item) => {
      return item.categroy === categroy ?? "Marketing Basics";
    });
    setFilerDatas(data);
  };

  useEffect(() => {
    setFilerDatas(featuredBlogs);
  }, []);
  return (
    <main>
      <BackgroundImage src="/assets/images/Blogs/hero.webp" alt="blog page">
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap py-32 sm:py-32 md:py-32 lg:py-36 xl:py-40 px-8">
          <div>
            <div className="max-w-[756px]">
              <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                OUR BLOGS
              </h6>
              <h6 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] md:py-2 text-center lg:text-left leading-snug text-[white] font-bold uppercase">
                Explore the
                <span className="text-[#FB724C]"> Latest </span>
                <UnderLineText italic>Insights</UnderLineText>
              </h6>
              <p className="font-poppins text-center lg:text-left mt-6 text-[white] text-[12px] md:text-[16px] font-[300]">
                Explore insights, tips, and stories on our captivating blog
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-6">
                <CustomButton
                  btnLabel={"Discuss With Us"}
                  linkBtn
                  link={"/contact-us"}
                />
              </div>
            </div>
          </div>

          <div className="max-w-[653px] relative">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/images/Blogs/pngwing 4.webp"
              />
              <Image
                width={550}
                height={550}
                quality={100}
                src="/assets/images/Blogs/pngwing 4.png"
                className="object-fill"
                alt="section1ImgAFFORDABLE, STUNNING WEB DESIGN "
              />
            </picture>
          </div>
        </section>
      </BackgroundImage>

      <LatestBlogs blogs={blogs} />

      <StayConnectedSection />

      <section className="p-6 max-w-[1400px] pb-20  m-auto">
        <h6 className="font-poppins text-center md:text-left font-semibold text-[20px] sm:text-[26px] md:text-[33px] lg:text-[42px] leading-[96px] tracking-normal">
          Featured Blogs
        </h6>

        <BlogSlider filter={filter} filterData={filterData} />

        <FeaturedBlogsSection title="Featured Blogs" blogData={featuredBlogs} />

        {/* {filter !== "All" && (
        <div
          className={
            filterDatas.length > 5 ? "w-[90%] lg:w-[50%] mt-8 m-auto" : "hidden"
          }
        >
          <button className=" border rounded border-[#D1D4DB] font-Inter py-2 font-normal text-[15px] m-auto w-[100%]">
            Load more Articles
          </button>
        </div>
      )} */}
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

export default BlogsPage;
