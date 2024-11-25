'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoIosSearch } from 'react-icons/io';

import ScheduleCallCard from './ScheduleCallCard';

import { convertWixImageUrl } from "@/utils/ConvertWixImageUrl";
import { convertDateFormat } from "@/utils/convertDateFormat";
import { blogsData, TopicsData } from "@/utils/BlogPageData";

const LatestBlogs = ({ blogs }) => {
  const [inpVal, setInpVal] = useState("");

  const data = blogsData.filter(
    (item) =>
      item.title.toLowerCase().includes(inpVal.toLowerCase()) ||
      item.descr.toLowerCase().includes(inpVal.toLowerCase()) ||
      item.text.toLowerCase().includes(inpVal.toLowerCase())
  );
  return (
    <section className="flex gap-4 w-[95%] max-w-[1850px] flex-col lg:flex-col xl:flex-row justify-center items-center lg:justify-start xl:justify-start m-auto mt-10 pb-14 px-2 py-6">
      <div className="w-[90%] md:w-[80%] flex-[4] xl:w-[20%] m-auto mt-[1%] p-2 lg:p-3 xl:p-6 border border-slate-300 rounded-lg h-fit xl:sticky xl:top-5">
        <h6 className="text-[#171A22] mt-2 font-Inter text-[18px] sm:text-[20px] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] font-bold text-center">
          Topics
        </h6>
        <div className="flex justify-between border py-0 mt-2 border-slate-200 rounded-lg items-center">
          <input
            type="text"
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
            placeholder="Search for any keyword"
            className="border-0 text-[12px] outline-none p-2 flex-grow"
          />
          <div className=" bg-[#5BAFA9] px-4 py-[8px] cursor-pointer rounded-lg">
            <IoIosSearch color="white" size={20} />
          </div>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap w-[100%]">
          {TopicsData.length &&
            TopicsData.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => setInpVal(item)}
                    className="text-[11px] xl:text-[12px] 2xl:text-[13px] font-Inter bg-[#F6F7F8] border border-slate-200 rounded-lg w-fit p-2"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <div className="flex-[10] w-[95%] h-full md:w-[90%] lg:w-[80%]">
        <h6 className="font-poppins text-[24px] sm:text-[27px] md:text-[30px] lg:text-[35px] font-semibold text-center lg:text-left xl:text-[42px] leading-[96px] tracking-normal  ">
          Latest Blogs
        </h6>
        <div className="flex flex-wrap h-full justify-center lg:justify-start xl:flex-col gap-6">
          {blogs && blogs.length ? (
            blogs.map((item, index) => {
              const { title, excerpt, slug, lastPublishedDate, coverMedia } =
                item;

              return (
                <Link key={index} href={`/blog/${slug}`} className="w-full">
                  <div className="flex flex-col h-fit w-full items-center lg:w-full lg:flex-row rounded-lg shadow-xl border border-slate-200 ">
                    <div className="overflow-hidden">
                      {coverMedia ? (
                        <Image
                          src={convertWixImageUrl(coverMedia?.image)}
                          height={500}
                          width={500}
                          className="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
                          alt={`blog cover ${item.title}`}
                        />
                      ) : (
                        <Image
                          height={500}
                          width={500}
                          src="/assets/images/Blogs/mainDummyImage.png"
                          className="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
                          alt={`blog cover image`}
                        />
                      )}
                    </div>
                    <div className="w-[100%] text-center md:text-left lg:w-[60%] p-4 flex flex-col items-start justify-between">
                      <p>{item.text}</p>
                      <h6 className=" font-Inter text-center md:text-left my-1 font-bold mt-1 text-[16px] 2xl:text-[20px] leading-[26px] tracking-normal">
                        {title}
                      </h6>
                      <p className="text-[#3E424B] font-poppins text-[11px] 2xl:text-[13px] leading-[22px]">
                        {excerpt.slice(0, 200) + "..."}
                      </p>
                      <span className="text-white w-[100%] md:w-[auto] py-2 px-6 mt-3 2xl:mt-6 bg-[#FF6E4E]  rounded-3xl">
                        Read More
                      </span>
                      <p className="font-normal mt-2 text-[13px] font-DM  leading-[23px] ">
                        {convertDateFormat(lastPublishedDate)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <h6 className="font-poppins text-[16px] mx-auto md:text-[22px] lg:text-[20px] font-semibold text-center lg:text-left xl:text-[20px] leading-[96px] tracking-normal">
              No Blog Found
            </h6>
          )}
        </div>
        {/* {data.length > 0 && (
      <div className="m-auto mt-20 flex w-[100%]  md:w-[50%] ">
        <button className=" border rounded border-[#D1D4DB] font-Inter py-2 font-normal text-[15px] m-auto w-[100%]">
          Load more Articles
        </button>
      </div>
    )} */}
      </div>
      <ScheduleCallCard />
    </section>
  );
};

export default LatestBlogs;
