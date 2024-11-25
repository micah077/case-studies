"use client"
import React, { useEffect, useRef } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScreenWidth } from '@/lip/useScreenWidth';

const EndResult = ({ data }) => {
  const sectionRef = useRef(null)
  const isMobile = useScreenWidth(767)

  useEffect(() => {

    if (!isMobile) {
      const section = sectionRef.current

      if (section) {
        gsap.set(section, { opacity: 0, y: 50 })

        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out'
            })
          },
          once: true
        })
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [isMobile])
  return (
    <div ref={sectionRef} className='py-20 md:py-40 relative'>
      <div className="layout">
        <div className="flex flex-col gap-5 items-center">
          <h1 className='text-[#0A141F] text-[28px] md:text-[60px] font-semibold'>End Results</h1>
          <p className='text-[12px] md:text-lg text-[#292929] text-center md:leading-[33px] md:w-[85%]'>
            {data?.endResultDescription}
          </p>
          <div className="mt-10 group cursor-pointer hover:bg-orange-600 border-[2px] border-[#000248] shadow-lg px-6 py-3 rounded-full flex items-center justify-center gap-3 transition-colors duration-300">
            <p className='m-0 text-[14px] md:text-base text-[#050748]'>Schedule free consultation</p>
            <IoChevronForwardOutline size={20} className='m-0 text-black' />
          </div>
          <div className="mt-10 flex items-center gap-2 text-[#6A6A8E] text-[12px] md:text-xl">
            <p>Or call us now</p>
            <FaPhoneAlt color='#6A6A8E' />
            <p>+1 (631) **4-05*9</p>
          </div>
        </div>
      </div>
      <img
        src={data.endResultBottomLeft.src}
        className='hidden md:inline absolute bottom-0 left-0 w-[200px] h-[200px]'
        alt="Decorative element left bottom"
      />
      <img
        src={data.endResultBottomRight.src}
        className='hidden md:inline absolute bottom-0 right-0 w-[120px] h-[160px]'
        alt="Decorative element right bottom"
      />
      <img
        src={data.endResultTopRight.src}
        className='hidden md:inline absolute top-0 right-0 w-[93px] h-[101px]'
        alt="Decorative element top right"
      />
    </div>
  );
};

export default EndResult;
