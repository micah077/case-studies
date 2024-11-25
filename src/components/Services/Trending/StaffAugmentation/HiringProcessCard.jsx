import Image from "next/image";

const HiringProcessCard = ({count, title, detail, src}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-left md:items-center gap-8 md:gap-20 bg-white rounded-xl py-5 px-7 md:py-8 md:px-14 shadow-[0_8px_24px_0px_#7D7D7D1A] shadow-[#7D7D7D1A]">
      <div className="font-poppins">
        <h2 className="font-extrabold text-4xl md:text-5xl 3xl:text-[62px] mb-4 md:mb-8 3xl:mb-12 text-[#FF6E4E]">{count}</h2>
        <h6 className="font-bold text-xl md:text-[22px] mb-3 md:mb-6">
          {title}
        </h6>
        <p className="text-sm md:text-[16px] text-[#5D616F]">
          {detail}
        </p>
      </div>
      <div className="bg-[#5BAFA9] rounded-lg w-full min-h-[23vw] h-full max-w-[455px] p-6 md:p-4 lg:p-8 flex justify-center items-center">
        <Image
          src={src}
          width={500}
          height={273}
          alt="image"
        />
      </div>
    </div>
  );
};

export default HiringProcessCard;
