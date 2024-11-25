import Image from "next/image";

const CaseCard = ({ item }) => {
  return (
    <div className=" w-[230px] xl:w-[180px] xl:h-[153px] 2xl:h-auto 2xl:w-[230px]  m-auto text-center">
      <div>
        <Image
          src={item.img}
          width={100}
          height={100}
          className="m-auto w-[50px] md:w-auto"
          alt={item.title}
        />
      </div>
      <div className="w-[50%] xl:w-[70%] 2xl:w-[50%] m-auto font-DM font-bold text-[15px] 2xl:text-[17px]">
        <h6 className="mt-4">{item.title}</h6>
      </div>
    </div>
  );
};

export default CaseCard;
