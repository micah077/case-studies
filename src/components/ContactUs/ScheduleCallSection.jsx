import Link from 'next/link';
import CustomButton from '../Common/CustomButton';

const ScheduleCallSection = () => {
  return (
    <div className="max-w-[1052px] mx-auto mt-16 lg:mt-[200px] lg:mb-10">
      <h1
        className=" text-[25px] sm:text-[28px] md:text-[32px] 
lg:text-[36px] xl:text-[40px] 2xl:text-[46px] font-poppins text-center font-[600] text-[#0A141F]"
      >
        Schedule a<span className="italic text-[#FF6E4E]"> Call </span>
        with us
      </h1>
      <div className=" w-[90%] md:w-[80%]  xl:w-[65%] 2xl:w-[55%]  mt-4 mx-auto">
        <p className="text-[14px] 2xl:text-[16px] text-[#292929] leading-7 font-poppins text-center">
          Explore all our quality solutions at Strugbits, and discover how we
          can transform your digital presence into a powerful, engaging, and
          memorable experience.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <CustomButton
          btnLabel={`Schedule a Call`}
          link={'https://calendly.com/peter-1216/30min?back=1&month=2024-07'}
          linkBtn
          target="_blank"
        />
      </div>
    </div>
  );
};

export default ScheduleCallSection;
