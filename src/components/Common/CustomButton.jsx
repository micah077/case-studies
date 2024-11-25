import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const CustomButton = ({
  btnLabel,
  className,
  btnClassName,
  linkBtn,
  link,
  target,
}) => {
  return linkBtn ? (
    <Link
      href={link || "/"}
      target={target}
      className={`flex cursor-pointer group  z-[5] flex-row   max-w-[212px] w-full justify-center items-center ease-in duration-300  font-[500] text-[12px] lg:text-[14.95px]  border rounded-full border-[#FF6E4E] lg:px-8 px-10 py-3 lg:py-3 bg-[#FF6E4E] font-poppins text-white overflow-hidden relative ${
        btnClassName || ""
      } `}
    >
      <span className={className || ""}>{btnLabel}</span>
      <span className="absolute text-[12px] right-4 mx-1">
        <FaChevronRight />
      </span>
      <span className="absolute  w-[186px] rounded-full mt-[120px] ml-[240px] group-hover:ml-[-260px] bg-white h-[186px] duration-300 opacity-[20%] "></span>
    </Link>
  ) : (
    <div
      className={`flex cursor-pointer group  z-[5] flex-row   max-w-[212px] w-full justify-center items-center ease-in duration-300  font-[500] text-[10px] lg:text-[14.95px]  border rounded-full border-[#FF6E4E] lg:px-8 px-10 py-3 lg:py-3 bg-[#FF6E4E] font-poppins text-white overflow-hidden relative ${
        btnClassName || ""
      } `}
    >
      <span className={className || ""}>{btnLabel}</span>
      <span className="absolute text-[12px] right-4 mx-1">
        <FaChevronRight />
      </span>
      <span className="absolute  w-[186px] rounded-full mt-[120px] ml-[240px] group-hover:ml-[-260px] bg-white h-[186px] duration-300 opacity-[20%] "></span>
    </div>
  );
};

export default CustomButton;
