"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, content, id, index, isActive, setIsActive }) => {
  const handleSetIndex = (index) => isActive !== index && setIsActive(index);

  return (
    <div key={index} className="cursor-pointer">
      <div onClick={() => handleSetIndex(index)}>
        <div
          className={`border border-black rounded-[16px] p-5 my-3 ${
            isActive === index &&
            "bg-[#FF6E4E] text-white border-r-2 border-b-2"
          } `}
        >
          <div className="flex justify-between p-0 lg:p-2 xl:p-2">
            <h1
              className="font-poppins font-[600] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px]  text-navy-900 "
              flex="1"
            >
              {id}/ {title}
            </h1>

            <div>
              {isActive === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {isActive === index && (
            <div className="text-left text-medium mt-2 p-2 text-[13px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] font-poppins font-[300] scale-in-ver-top">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomAccordion = ({ data }) => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="accordion">
      {data.map((data, index) => {
        const { title, content, id } = data;
        return (
          <Accordion
            key={index}
            index={index + 1}
            id={id}
            title={title}
            content={content}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
};

export default CustomAccordion;
