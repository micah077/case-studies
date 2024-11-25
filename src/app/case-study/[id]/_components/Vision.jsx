'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useScreenWidth } from '../../../../lip/useScreenWidth';

const ScrollingLaptopAnimation = ({ data }) => {
  const sectionRef = useRef(null);
  const laptopRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const isMobile = useScreenWidth(600)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if(!isMobile){

    const section = sectionRef.current;
    const laptop = laptopRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;

    if (section && laptop && leftText && rightText) {
      gsap.set([leftText, rightText], { autoAlpha: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(laptop, { x: '70%', duration: 1.5, ease: "power2.inOut" })
        .to(leftText, { autoAlpha: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")
        .to(leftText, { autoAlpha: 0, y: -100, duration: 1.5, ease: "power2.in" }, "+=1")
        .to(laptop, { x: '0%', duration: 1.5, ease: "power2.inOut" })
        .to(laptop, { x: '-70%', duration: 1.5, ease: "power2.inOut" }, "+=1")
        .to(rightText, { autoAlpha: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1");

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }

  }, [isMobile]);

  return (
    <>
    <section ref={sectionRef} className="h-screen w-full hidden md:inline-block overflow-hidden relative">
      <div ref={laptopRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={data.VisionImage.src}
          alt="Laptop"
          width={1028} // Ensure dimensions are integers
          height={720}
          priority // Use priority for critical images
        />
      </div>
      <div ref={leftTextRef} className="flex flex-col gap-5 absolute top-1/2 left-[5%] lg:left-[15%] transform -translate-y-1/2 w-[45%] lg:w-[34%]">
        <h1 className="text-[32px] lg:text-[45.59px] font-semibold leading-[40px] lg:leading-[50px]">
          Client’s <span style={{ color: data.brandColor }}>Vision</span> Behind The Project
        </h1>
        {data.visionTitle?.map((item, index) => (
          <p className="text-[#8A90A2] text-sm lg:text-lg lg:leading-[32px]" key={index}>{item}</p>
        ))}
      </div>

      <div ref={rightTextRef} className="flex flex-col gap-5 absolute top-1/2 right-[5%] lg:right-[20%] transform -translate-y-1/2 w-[50%] lg:w-[34%]">
        <h1 className="text-[32px] lg:text-[45.59px] font-semibold leading-[40px] lg:leading-[50px]">
          Problems <span style={{ color: data.brandColor }}>Faced By</span> The Client
        </h1>
        <ul className="list-disc pl-5">
          {data.visionProblem?.map((item, index) => (
            <li className="text-[#8A90A2] text-sm lg:text-lg lg:leading-[32px]" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* mobile */}

    <section className="py-10 px-5 flex flex-col gap-10 w-full  md:hidden overflow-hidden relative">
     
      <div className="flex flex-col">
        <h1 className="text-[28px] font-semibold">
          Client’s <span style={{ color: data.brandColor }}>Vision</span> Behind The Project
        </h1>
        {data.visionTitle?.map((item, index) => (
          <p className="text-[#8A90A2] text-[13px]" key={index}>{item}</p>
        ))}
      </div>

      <div className="">
        <Image
          src={data.VisionImage.src}
          alt="Laptop"
          height={229.82} // Ensure dimensions are integers
          width={328}
          priority // Use priority for critical images
        />
      </div>

      <div className="flex flex-col gap-5 ">
        <h1 className="text-[28px] font-semibold leading-[50px]">
          Problems <span style={{ color: data.brandColor }}>Faced By</span> The Client
        </h1>
        <ul className="list-disc pl-5">
          {data.visionProblem?.map((item, index) => (
            <li className="text-[#8A90A2] text-[13px]" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default ScrollingLaptopAnimation;
