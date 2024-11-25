import Image from "next/image";

const DevelopmentCard = ({ item, textFlex, imgFlex }) => {
  const textFlexClass = `flex-[${textFlex || "1.1"}] `;
  const imgFlexClass = `flex-[${imgFlex || "0.7"}] `;
  return (
    <div className="w-full bg-[#ffffff09] max-w-[341px] md:min-h-[290px] p-5 md:p-5 rounded-[30px] border border-white">
      <div className="flex lg:justify-between gap-2 items-center justify-center">
        <div className={textFlexClass}>
          <h3 className="text-[20px] font-[500]  text-center md:text-left font-poppins my-3  text-[#FF6E4E]">
            {item.id}
          </h3>

          <h3
            dangerouslySetInnerHTML={{ __html: item.title }}
            className="text-[20px]  text-center md:text-left font-poppins my-3 font-[500] text-white"
          ></h3>
        </div>
        <div className={`${imgFlexClass} flex justify-end`}>
          <Image
            src={item.img}
            height={500}
            width={500}
            className="hidden max-w-[80px]  md:block object-contain"
            alt={item.title}
          />
        </div>
      </div>

      <p className="text-[12px] text-center lg:text-left md:text-left font-[300] font-poppins mb-4 border-slate-500 mt-4 text-white">
        {item.desc}
      </p>
    </div>
  );
};

export default DevelopmentCard;
