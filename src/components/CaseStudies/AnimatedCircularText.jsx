"use client";
import { motion } from "framer-motion";
const AnimatedCircularText = () => {
  return (
    <div className="relative">
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        viewBox="0 0 300 300"
        className=" xl:w-[250px] xl:h-[250px]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="#fff" color="white">
          <textPath xlinkHref="#circlePath" className="text-[10px]">
            STRUGBITS.PORTFOLIO STRUGBITS.PORTFOLIO STRUGBITS.PORTFOLIO
            STRUGBITS.PORTFOLIO STRUGBITS.PORTFOLIO
          </textPath>
        </text>
      </motion.svg>
      <div className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto text-white rounded-full flex justify-center items-center">
        <img src={"/assets/images/Case Studies/PRINT.png"} alt="print" />
      </div>
    </div>
  );
};

export default AnimatedCircularText;
