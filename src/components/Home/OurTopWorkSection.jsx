import Link from "next/link";
import React from "react";

import { topWorkData } from "@/utils/HomePageData/TopWorkData";
import Container from "../Common/Container/Container";
import CardSlider from "../Services/Designing/CardSlider";

const OurTopWorkSection = () => {
  return (
    <section className="bg-[#FFFBF8] mt-10 xl:mt-8">
      <Container>
        <div className="w-full mt-[40px]">
          <div className="flex flex-col lg:flex-row mb-[50px] justify-between items-center gap-1 xl:px-28">
            <h3 className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[40px]  font-poppins font-bold">
              Our Top Work{" "}
            </h3>
            <Link href={"/404"}>
              <div className="flex items-center gap-1">
                <h5 className="font-[400] cursor-pointer font-Roboto text-[13px] md:text-[14px]  xl:text-[16px] 2xl:text-[18px] ">
                  View All{" "}
                </h5>
                <img src={"/assets/images/Home/Symbol.png"} alt="rightArrow" />
              </div>
            </Link>
          </div>
          <CardSlider data={topWorkData} />
        </div>
      </Container>
    </section>
  );
};

export default OurTopWorkSection;
