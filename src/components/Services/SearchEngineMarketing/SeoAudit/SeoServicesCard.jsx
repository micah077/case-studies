import Image from "next/image";

const SeoAuditServicesCard = ({ imgSrc, title, desc }) => {
  return (
    <div className=" parent mx-auto w-full h-[290px] border-r border-[#FFFFFF66]">
      <div className="h-full w-full text-white flex justify-center  px-[28px]">
        <div className="flex flex-col gap-4 justify-center items-center m-auto">
          <div className="flex justify-center hover-bright ">
            <Image
              height={90}
              width={90}
              quality={95}
              src={imgSrc}
              alt={title}
            />
          </div>

          <div className="font-poppins text-[20px] font-[600]">
            <h4 className="text-center">{title}</h4>
          </div>
          <div className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
            <p className="text-center">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoAuditServicesCard;
