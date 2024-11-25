'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ data }) => {
  const heroRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (hero && leftColumn && rightColumn) {
      gsap.set(hero, { opacity: 0 });
      gsap.set(leftColumn, { x: -50, opacity: 0 });
      gsap.set(rightColumn, { x: 50, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(hero, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(leftColumn, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.5')
      .to(rightColumn, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.8');
    }
  }, []);

  return (
    <div
      ref={heroRef}
      style={{ backgroundImage: `url(@/assests/heroBg.png)` }}
      className="bg-contain bg-[#0c192d]"
    >
      <div className="layout">
        <div className="flex flex-col items-center justify-center h-full">
          <div className=" py-0 pt-32 pb-10 md:pb-10 md:pt-20 px-0 grid grid-cols-6 lg:grid-cols-12 gap-5 text-white">
            <div
              ref={leftColumnRef}
              className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col h-full justify-center"
            >
              <div className="flex items-center gap-5">
                <Image
                  alt="logo"
                  height={70.38}
                  width={70.38}
                  src={data.heroLeftIcon.src}
                />
                <p className="text-[20px] md:text-[28px] xl:text-3xl tracking-[10px] font-bold">
                  {data.heroLeftTitle.toUpperCase()}
                </p>
              </div>

              <p className="mt-16 leading-[22px] md:leading-[28px] text-[13px] md:text-lg text-white/80">
                {data?.heroLeftDescription}
              </p>

              <Link href={data.heroLeftSiteLink} target='_blank'  className="mt-10 flex items-center gap-3">
                <p>VISIT WEBSITE</p>
                <img src={data.heroLeftWebsiteIcon.src} alt="website icon" />
              </Link>

              <div className="flex items-center gap-5 mt-20 ">
                {['Platforms', 'Deliverables'].map((title, index) => (
                  <div key={index} className="flex gap-5">
                    <img src={data.heroRightPlaformBorder.src} alt={`${title} border`} />
                    <div className="flex flex-col gap-3">
                      <p className="text-sm md:text-md text-white/80">{title}:</p>
                      <div className="flex items-center gap-2">
                        <Image
                          height={24}
                          width={24}
                          alt={`${title.toLowerCase()} icon`}
                          src={title === 'Platforms' ? data.PlatformIcon.src : data.DeliverablesIcon.src}
                        />
                        <p className='text-[12px] md:text-md' >{title === 'Platforms' ? data.platformText : data.deliverablesText}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={rightColumnRef} className="col-span-12 md:col-span-7 lg:col-span-8">
              <Image
                alt="hero"
                height={708.19}
                width={1033.84}
                src={data.heroRightImage.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
