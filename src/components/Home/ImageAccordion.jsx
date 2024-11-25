'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaArrowRightLong } from 'react-icons/fa6';

import CustomButton from '../Common/CustomButton';

const ImageAccordion = ({ ImagesSlider }) => {
  const [id, setId] = useState(3);

  const handleImageHover = (imageId) => {
    setId(imageId);
  };

  const handleMouseOut = () => {
    setId(3);
  };

  return (
    <section>
      <div className="py-6 mb-6">
        <div className=" ">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className=" font-poppins font-semibold text-[18px] leading-[30px]">
              People Loves Our Blogs
            </p>
            <Image
              width={80}
              height={80}
              src={"/assets/images/Home/ValuableClient/stars.png"}
              alt="Consultation Icon"
            />
          </div>
          <p className=" font-poppins text-center text-[17px] my-2 md:my-1 sm:text-[25px] md:text-[30px] lg:text-[33px] xl:text-[40px] 2xl:text-[46px] font-semibold">
            Read Our Latest{" "}
            <span className="text-[#FF6E4E]">Valuable Blogs</span>{" "}
          </p>
          <div className="text-center w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] m-auto ">
            <p className=" font-poppins  text-[14px] md:text-[16px] mt-2 mb-4 leading-[30px]">
              Discover a lot more about the tech world with our latest valuable
              blogs. However, expect a blend of expertise, creativity, and a
              touch of humor in each blog post. So, grab a cup of coffee and
              explore the world of tech and innovation with our blogs.
            </p>
          </div>
        </div>
        <div className="containers">
          {ImagesSlider.length > 0 &&
            ImagesSlider.map((item) => {
              return (
                <div
                  className={`  image-wrapper ${
                    item.id === id ? "active" : ""
                  }`}
                  key={item.id}
                  onMouseOver={() => handleImageHover(item.id)}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    className="w-[100%] rounded-xl"
                    src={item.src}
                    alt={item.title}
                  />
                  <div className="text-overlay  bg-[#00000054] flex flex-col  p-4 gap-2  pb-6">
                    <h2 className=" font-Inter font-bold text-[11px] leading-[21px]">
                      {item.title}
                    </h2>
                    <div className="flex gap-2 flex-col  lg:flex-row">
                      <div className=" font-Inter w-[100%] lg:w-[60%]  font-semibold text-[10px] md:text-[14px] xl:text-[15px] 2xl:text-[20px] leading-[22px] md:leading-[30px] tracking-wide">
                        <p>{item.description}</p>
                      </div>
                      <Link
                        className={
                          " w-[100%] lg:w-[20%]  flex items-center gap-4 font-Inter font-bold xl:ml-1 2xl:ml-0 text-[15px] xl:text-[13px] 2xl:text-[15px]"
                        }
                        href={`/blog/${item.slug}`}
                      >
                        <p className="text-white">Learn More</p>
                        <FaArrowRightLong color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="w-full flex justify-center mt-20 ">
          <CustomButton btnLabel={"View All Blogs"} link={"/blogs"} linkBtn />
        </div>
      </div>
    </section>
  );
};

export default ImageAccordion;
