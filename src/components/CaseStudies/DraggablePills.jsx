"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const DraggablePills = () => {
  const parentRef = useRef();
  return (
    <div ref={parentRef}>
      <motion.div
        drag
        dragMomentum
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#FF6E4E] rotate-6 font-DM text-[15px] font-medium leading-[26px]"
      >
        Custom Development
      </motion.div>
      <motion.div
        drag
        dragMomentum
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#5BAFA9] rotate-180 font-DM text-[15px] font-medium leading-[26px] "
      >
        UI UX Design
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#0A141F] rotate-45 font-DM text-[15px] font-medium leading-[26px] "
      >
        App Developement
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#FF6E4E] rotate-90 font-DM text-[15px] font-medium leading-[26px] "
      >
        Wix Solutions
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#FF6E4E] rotate-5 font-DM text-[15px] font-medium leading-[26px] "
      >
        Custom Development
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#5BAFA9] rotate-45 font-DM text-[15px] font-medium leading-[26px] "
      >
        Content Writting
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#0A141F] rotate-2 font-DM text-[15px] font-medium leading-[26px] "
      >
        Wix API
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#0A141F] rotate-3 font-DM text-[15px] font-medium leading-[26px] "
      >
        SEO Audit
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#5BAFA9] rotate-1 font-DM text-[15px] font-medium leading-[26px] "
      >
        Wordpress
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#0A141F] rotate-5 font-DM text-[15px] font-medium leading-[26px] "
      >
        Consulting
      </motion.div>
      <motion.div
        drag
        dragConstraints={parentRef}
        className=" text-[white] rounded-3xl w-fit px-4 py-2 bg-[#5BAFA9] rotate-4 font-DM text-[15px] font-medium leading-[26px] "
      >
        Texting
      </motion.div>

      <motion.img
        drag
        dragConstraints={parentRef}
        src={"/assets/images/Case Studies/Star.png"}
        alt="star icon"
      />
      <motion.img
        drag
        dragConstraints={parentRef}
        src={"/assets/images/Case Studies/Rectangle.jpg"}
        alt="star icon"
      />
    </div>
  );
};

export default DraggablePills;
