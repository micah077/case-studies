import Image from 'next/image';
import { IData } from '../data';

const ProvidedSolution = ({ data }: { data: IData }) => {
  return (
    <div className="pt-10">
      <div className="layout flex flex-col items-center gap-10">
        <h1 className="text-[60px] font-semibold">
          Our Provided <span style={{ color: data.brandColor }}>Solution</span>
        </h1>
        <div className="h-[2px] w-[63.98px]" style={{ backgroundColor: data.brandColor }} />
        <p className="text-lg text-center text-[#8A90A2] md:leading-[34px]">
          {data.providedSoltuionDescription}
        </p>
      </div>

      <div 
        style={{ backgroundImage: `url(${data.providedSolutionBackground.src})` }} 
        className="mt-80 pb-10 bg-cover bg-no-repeat"
      >
        <div className="layout flex flex-col justify-center">
          <Image 
            className="md:mt-[-290px]" 
            alt="Provided Solution Image" 
            height={997} 
            width={1428} // Adjusted to integer
            src={data.providedSolutionLaptop.src} 
            priority // Load this image with priority
          />
          <div className="flex items-center h-full gap-5">
            <p className="border-l-4 border-solid border-white leading-[36px] pl-5 text-2xl text-white lg:w-[65%]">
              {data.providedSolutionLaptopDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidedSolution;
