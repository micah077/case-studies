import Image from "next/image";

const PartnerCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="max-w-[428px] parent h-[450px]  md:h-[416px] rounded-[30px] border group border-[#FFFFFF66] p-3 mx-auto md:mx-2 ">
      <div className="bg-[#FFFFFF05] rounded-[30px] h-full w-full text-white flex justify-center py-[43px] px-[28px] group-[&:hover]:bg-[#FF6E4E] relative">
        <Image
          src={"/assets/images/Landing Page/strugbits.svg"}
          alt="Strubgits"
          width={279}
          height={250}
          className="!hidden group-[&:hover]:!block absolute w-auto h-auto"
        />
        <div className="flex flex-col gap-4 justify-center items-center m-auto">
          <div className="flex justify-center hover-bright ">
            <Image
              alt={title}
              height={100}
              width={100}
              className="h-auto w-auto"
              src={imgSrc}
            />
          </div>

          <div className="font-poppins text-[20px] font-[600]">
            <h4 className="text-center">{title}</h4>
          </div>
          <div className="font-poppins text-[14px] font-[400]">
            <p className="text-center">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
