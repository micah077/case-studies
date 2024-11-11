"use client";
import React, { useEffect, useRef, useState } from 'react';
import { IData } from '../data';
import { hexToRgb } from '@/lip/helper';
import Image from 'next/image';

const TypographySection = ({ data }: { data: IData }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setScrollProgress(entry.intersectionRatio);
                }
            },
            { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
        );

        const currentContainer = containerRef.current;
        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [isMounted]);

    const leftImageStyle = { transform: `translateX(${-scrollProgress * 50}px)` };
    const rightImageStyle = { transform: `translateX(${scrollProgress * 50}px)` };

    if (!isMounted) return null;

    return (
        <div className='py-20 px-5 md:px-0'>
            <div className="layout flex flex-col gap-10">
                <h1 className='text-[28px] md:text-[40px] xl:text-[60px] font-semibold'>
                    <span style={{ color: data.brandColor }}>Typography</span> and Colors
                </h1>
                <div className="flex flex-wrap xl:flex-nowrap items-end justify-between">
                    <div className="text-[#92969C]">
                        <div className="flex flex-col leading-[45px]">
                            <p className='m-0 text-[20px] xl:text-[32px]'>Font Family</p>
                            <div className="m-0 flex gap-5 font-bold text-[26px] xl:text-[48px]">
                                <p>{data.typography.family[0]}</p>
                                {data.typography.family[1] && <p>and</p>}
                                <p>{data.typography.family[1]}</p>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap md:flex-nowrap items-center gap-5 text-lg md:text-[24px] xl:text-[32px] font-bold">
                            {data.typography.weight.map((item, index) => (
                                <p key={index} className={`font-${item.toLowerCase().replace(/\s/g, '')}`}>{item}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 md:mt-0 flex flex-wrap gap-5 xl:flex-col xl:gap-2 h-full">
                        {data.typography.family.slice().reverse().map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <p className=' text-[24px] xl:text-[36px] font-semibold text-[#0F0928]'>{item}</p>
                                <div className="flex items-center gap-10 xl:gap-5">
                                    {["bold", "semibold", "medium", "regular"].map((weight, index) => (
                                        <p key={index} className={`font-${weight} text-[40px] xl:text-[72px] text-[#92969C]`}>Aa</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
                                    <p className='text-[22px] font-bold'>RGB</p>
                                    <p className='text-[#80868A] text-[22px]'>{hexToRgb(color)}</p>
                                </div>
                                <div className="h-[1px] w-full bg-[#80868A]" />
                                <div className="px-5 flex items-center justify-between">
                                    <p className='text-[22px] font-bold'>HEX</p>
                                    <p className='text-[#80868A] text-[22px]'>{color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={containerRef} style={{ backgroundImage: `url(${data.providedSolutionBackground.src})` }} className="md:mx-10 mt-40 pb-10 bg-cover bg-no-repeat">
                <div className="pt-10 layout flex flex-col items-center justify-end h-full">
                    <div className="flex items-end">
                        <div className="mr-[-120px] relative z-10">
                            <Image alt='mobile' height={540} width={261} className='object-contain mr-[-20px] z-10' src={data.typographyLaptop.mobileScreen.src} />
                            <img className='absolute top-16 left-[-40px]' src={data.typographyLaptop.mobileLeft.src} style={leftImageStyle} />
                        </div>
                        <div className="relative">
                            <Image width={1121.37} height={659} alt='laptop' className='object-contain z-1' src={data.typographyLaptop.laptopScreen.src} />
                            <img className='absolute top-24 right-[100px]' src={data.typographyLaptop.laptopEight.src} style={rightImageStyle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypographySection;
