"use client";
import React, { useState } from "react";

const ProfessionalSeoServiceCard = ({
  id,
  title,
  desc,
  onMouseDown,
  onMouseUp,
}) => {
  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className="max-w-[336px] border-2 text-white border-[#FFFFFF66]   rounded-[8px] h-[390px] flex justify-center items-center px-[8px] py-[60px] relative m-auto"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="progress-bar"></div>
      <div className="flex flex-col gap-[20px] relative z-10">
        <div
          className={` text-[#FF6E4E] text-[36px] text-center font-poppins font-[600] `}
        >
          <h3>{id}.</h3>
        </div>
        <div>
          <h4 className="text-[24px] text-center font-poppins font-[500]">
            {title}
          </h4>
        </div>
        <div className="max-w-[277px]">
          <p className="text-[16px] leading-[24px] text-center font-poppins font-[400]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSeoServiceCard;
