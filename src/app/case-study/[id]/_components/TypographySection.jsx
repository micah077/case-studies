"use client";
import React, { useEffect, useRef, useState } from 'react';
import { hexToRgb } from '@/lip/helper';
import Image from 'next/image';
import { useScreenWidth } from '@/lip/useScreenWidth';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TypographySection = ({ data, id }) => {
    const containerRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    const isMobile = useScreenWidth(600)
    const isTablet = useScreenWidth(1024)

    const leftImageRef = useRef(null)
    const rightImageRef = useRef(null)

    const sectionRef = useRef(null)

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

    useEffect(() => {
        setIsMounted(true);

        const leftImage = leftImageRef.current
        const rightImage = rightImageRef.current

        if (leftImage && rightImage) {
            gsap.to(leftImage, {
                x: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

            gsap.to(rightImage, {
                x: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })
        }

        return () => {
            gsap.killTweensOf(leftImage)
            gsap.killTweensOf(rightImage)
        }
    }, [isMounted])

    if (!isMounted) return null;

    return (
        <div ref={sectionRef} className='py-20 px-0'>
            <div className="layout">
                <div className="flex flex-col gap-10 lg:w-[98%]">
                    <h1 className='text-[28px] md:text-[40px] xl:text-[60px] font-semibold'>
                        <span style={{ color: data.brandColor }}>Typography</span> and Colors
                    </h1>
                    <div className="flex flex-wrap xl:flex-nowrap items-end justify-between">
                        <div className="flex flex-col gap-5 md:gap-10 md:flex-10 text-[#92969C]">
                            <div className="flex flex-col leading-[45px]">
                                <p className='m-0 text-[20px] xl:text-[32px]'>Font Family</p>
                                <div className="m-0 flex gap-5 font-bold text-[26px] xl:text-[48px]">
                                    <p>{data.typography.family[0]}</p>
                                    {data.typography.family[1] && <p>and</p>}
                                    <p>{data.typography.family[1]}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap items-center gap-5 text-lg md:text-[24px] xl:text-[32px]">
                                {data.typography.weight.map((item, index) => (
                                    <p key={index} className={`font-${item.toLowerCase().replace(/\s/g, '')}`}>{item}</p>
                                ))}
                            </div>
                        </div>

                        <div className="pt-5 md:mt-0 flex flex-wrap gap-5 lg:flex-col lg:gap-0 h-full">
                            {data.typography.family.slice().reverse().map((item, index) => (
                                <div key={index} className="flex flex-col lg:leading-[72px]">
                                    <p className=' text-[24px] xl:text-[36px] font-semibold text-[#0F0928]'>{item}</p>
                                    <div className="flex items-center gap-5 md:gap-10 xl:gap-5">
                                        {["bold", "semibold", "medium", "regular"].map((weight, index) => (
                                            <p key={index} className={`font-${weight} text-[40px] xl:text-[72px] text-[#92969C]`}>Aa</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {data.typography.colorScheme.map((color, index) => (
                            <div key={index} className="col-span-1 shadow-lg rounded-[24px] h-[278px]">
                                <div className={`h-[40%] rounded-t-[24px]`} style={{ backgroundColor: color }} />
                                <div className="flex h-[10%]">
                                    {["opacity-100", "opacity-70", "opacity-40", "opacity-30"].map((opacityClass, idx) => (
                                        <div key={idx} className={`h-full w-[25%] ${opacityClass}`} style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                                <div className="h-[40%] mt-5 flex flex-col justify-between">
                                    <div className="px-5 flex items-center justify-between">
                                        <p className='text-lg lg:text-[22px] font-bold'>RGB</p>
                                        <p className='text-[#80868A] text-lg lg:text-[22px]'>{hexToRgb(color)}</p>
                                    </div>
                                    <div className="h-[1px] w-full bg-[#80868A]" />
                                    <div className="px-5 flex items-center justify-between">
                                        <p className='text-lg lg:text-[22px] font-bold'>HEX</p>
                                        <p className='text-[#80868A] text-lg lg:text-[22px]'>{color}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={containerRef} style={{ backgroundImage: `url(${data.providedSolutionBackground.src})` }} className="md:mx-5 lg:mx-10 mt-20 md:mt-40 pb-10 bg-cover bg-no-repeat">
                <div className="pb-10 md:pb-0 pt-10 layout flex flex-col items-center justify-end h-full">
                    <div className="flex items-end">
                        <div className={`${isMobile ? "mr-[-20px] mb-[-60px] " : isTablet ? "mr-[-100px]" : "mr-[-120px]"} relative z-10`}>
                            <Image alt='mobile' height={isMobile ? 60 : isTablet ? 269 : 540} width={isMobile ? 124 : isTablet ? 130 : 261} className='object-contain mr-[-20px] z-10' src={data.typographyLaptop.mobileScreen.src} />
                            <div ref={leftImageRef} className={`w-full absolute ${isMobile ? `${id == 2 ? "top-16 right-[20px]" : "top-8 right-[20px]"}` : isTablet ? `${id == 2 ? "top-16 right-[30px]" : "top-6 right-[30px]"}` : `${id == 2 ? "top-36 right-[50px]" : "top-16 right-[50px] w-full"}`} ${isMobile && `${id == 2 ? "h-[63.18px] w-[69.81px]" : "h-[40.18px] w-[66.81px]"}`}`} >
                                <img className={``} src={data.typographyLaptop.mobileLeft.src} />
                            </div>
                        </div>
                        <div className="relative">
                            <Image width={isMobile ? 261 : isTablet ? 566 : 1121.37} height={isMobile ? 156 : isTablet ? 338 : 659} alt='laptop' className='object-contain z-1' src={data.typographyLaptop.laptopScreen.src} />
                            <div ref={rightImageRef} className={`absolute  ${isMobile ? `${id == 2 ? "h-[18px] w-[201px] top-7 right-[5px]" : "h-[87.49px] w-[66.61px] top-8 right-[20px]"}` : isTablet ? `${id == 2 ? "w-[434px] h-[40px] top-14 right-[10px]" : "h-[187.49px] w-[143.61px] top-10 right-[50px]"}` : `${id == 2 ? "top-32 right-[30px]" : "top-24 right-[100px]"}`}`}>
                                <img src={data.typographyLaptop.laptopEight.src} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypographySection;
