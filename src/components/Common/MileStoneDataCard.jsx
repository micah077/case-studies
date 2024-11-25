"use client";
import { mileStoneData } from "@/utils/HomePageData/MileStonesData";
import React, { useEffect, useState } from "react";

const MileStoneDataCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow() || 3);
  const [showImages, setShowImages] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleForward = () => {
    if (currentIndex < mileStoneData.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
      setShowImages(currentIndex + 1 < mileStoneData.length - cardsToShow);
    }
  };

  const handleBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowImages(true); // Set showImages to false on backward button click
    }
  };

  function getCardsToShow() {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1450) {
        return 3;
      } else if (window.innerWidth >= 1280 && window.innerWidth <= 1450) {
        return 2;
      } else if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
  }
  useEffect(() => {
    setLoading(() => false);
    function handleResize() {
      setCardsToShow(getCardsToShow());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[100%] max-w-[1170px] relative px-4 md:px-20 flex items-center gap-3 h-[259px]">
      <div className="cursor-pointer" onClick={handleBackward}>
        <img
          src={`assets/images/Home/back.png`}
          className={`absolute ${
            currentIndex === 0 ? "opacity-[0.6]" : ""
          } w-[100px] md:w-[110px] left-[-31px]  md:left-0 top-[25%] xl:left-[-9px]`}
          alt="Consultation Icon"
        />
      </div>
      {mileStoneData.length &&
        !loading &&
        mileStoneData
          .slice(currentIndex, currentIndex + getCardsToShow())
          .map((item, index) => (
            <div
              key={index}
              className={`min-h-[300px]  max-w-[350px] flex flex-col justify-between flex-1 shadow-2xl p-5 border  border-1 border-slate-100`}
            >
              <div>
                <img src={"assets/images/Home/Rating.png"} alt="STARs RATING" />
              </div>

              <h6 className="font-[600]  font-poppins my-3 text-[15px]">
                {item.title}
              </h6>
              <div className="">
                <p className="text-[14px]  mb-3 font-Roboto leading-[22px] font-[300]">
                  {item.desc}
                </p>
              </div>
              <div className="w-[60px] h-[1px] bg-gray-300"></div>
              <div className="mt-4">
                <h3 className="font-[700] font-Roboto text-[14px] ">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
      <div className="cursor-pointer" onClick={handleForward}>
        <img
          src={`assets/images/Home/forw.png`}
          className={`absolute ${
            showImages ? "" : "opacity-[0.6]"
          } w-[100px] md:w-[110px] right-[-25px] md:right-[-8px] xl:right-[-9px] top-[25%]`}
          alt="Consultation Icon"
        />
      </div>
    </div>
  );
};

export default MileStoneDataCard;
