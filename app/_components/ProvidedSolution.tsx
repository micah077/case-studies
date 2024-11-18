"use client"
import Image from 'next/image';
import { IData } from '../data';
import { useScreenWidth } from '@/lip/useScreenWidth';

const ProvidedSolution = ({ data }: { data: IData }) => {
  const isMobile = useScreenWidth(767)
  return (
    <div className="pt-10">
      <div className="layout flex flex-col items-center gap-10">
        <h1 className="text-[28px] md:text-[32px] xl:text-[60px] font-semibold">
          Our Provided <span style={{ color: data.brandColor }}>Solution</span>
        </h1>
        <div className="h-[2px] w-[63.98px]" style={{ backgroundColor: data.brandColor }} />
        <p className="text-[13px] md:text-[16px] xl:text-lg text-center text-[#8A90A2] md:leading-[24px] xl:leading-[34px] md:w-[80%]">
          {data.providedSoltuionDescription}
        </p>
      </div>

      <div 
        style={{ backgroundImage: `url(${data.providedSolutionBackground.src})` }} 
        className="mt-40 md:mt-80 pb-10 bg-cover bg-no-repeat"
      >
        <div className="layout flex flex-col ">
          <Image 
            className="mt-[-150px] md:mt-[-290px]" 
            alt="Provided Solution Image" 
            height={isMobile ? 223 :997} 
            width={isMobile ? 324 : 1447} // Adjusted to integer
            src={data.providedSolutionLaptop.src} 
            priority // Load this image with priority
          />
          <div className="lg:ml-10 flex items-center h-full gap-5">
            <p className="border-l-4 border-solid border-white xl:leading-[36px] pl-5 text-[14px] md:text-[20px] xl:text-2xl text-white md:w-[75%] xl:w-[65%]">
              {data.providedSolutionLaptopDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidedSolution;
