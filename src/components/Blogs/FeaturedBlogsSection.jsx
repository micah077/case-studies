'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBlogsSection = ({ blogData }) => {
  const [filter, setFilter] = useState('All');
  const [filterDatas, setFilerDatas] = useState([]);
  const filterData = (categroy) => {
    if (categroy === 'All') {
      setFilerDatas(blogData);
      setFilter(categroy);
      return;
    }
    setFilter(categroy);
    const data = blogData.filter((item) => {
      return item.categroy === categroy ?? 'Marketing Basics';
    });
    setFilerDatas(data);
  };

  useEffect(() => {
    setFilerDatas(blogData);
  }, []);

  return (
    <div className="flex justify-center mt-14 pb-16 flex-row lg:flex-row xl:justify-start items-stretch gap-4 flex-wrap">
      {!filterDatas.length ? (
        <h4 className=" font-Inter text-[15px] md:text-[18px] lg:text-[20px] leading-[26px] font-bold">
          NO BLOG FOUND
        </h4>
      ) : (
        filterDatas.length &&
        filterDatas.map((item, index) => {
          return (
            <Link key={index} href={`/blog/${item.slug}`}>
              <div
                className={
                  item?.categroy === filter
                    ? "w-[250px] md:w-[310px] flex flex-col justify-between h-full cursor-pointer rounded-xl pb-8 border p-3 shadow-xl"
                    : "w-[310px] justify-between flex flex-col cursor-pointer h-full rounded-xl pb-8 border p-3 border-x-slate-200 shadow-xl"
                }
              >
                <Image
                  width={290}
                  height={170}
                  src={item.img}
                  className="w-[100%] h-[200px] rounded-lg"
                  alt={item.title + " image"}
                />
                <div className="flex gap-4 text-[#171A22] text-[13px] my-4 font-Inter font-medium">
                  <p>{item.content1}</p>
                  <p>{item.content2}</p>
                </div>
                <h6 className=" font-Inter text-[15px] md:text-[18px] lg:text-[20px] leading-[26px] font-bold ">
                  {item.title}
                </h6>
                <p className=" font-poppins  text-[14px] my-4 tracking-wide text-[#3E424B]">
                  {item?.desc}
                </p>
                <div className="flex gap-4 text-[#FB724C] font-normal text-[14px]">
                  <span>{item.top}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default FeaturedBlogsSection;
