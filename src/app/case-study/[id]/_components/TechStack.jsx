"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScreenWidth } from "@/lip/useScreenWidth";

const TechStack = ({ data }) => {
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
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        small: {
            breakpoint: { max: 700, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div ref={sectionRef} className='py-20' style={{ backgroundColor: data.techStackColor }}>
            <div className="layout">
                <div className="flex w-full flex-col items-center gap-5">
                    <h1 className='text-[28px] md:text-[32px] xl:text-[60px] font-semibold text-center'>
                        Tech Stacks <span style={{ color: data.brandColor }}>Used</span>
                    </h1>
                    <p className='text-center md:w-[70%] text-[#8A90A2] leading-[30px]'>
                        Our project employs a modern and efficient combination of technologies for both the backend and frontend, ensuring robust performance and scalability. The chosen stack allows for seamless data management and responsive user interfaces.
                    </p>
                    <div className="w-[221px] md:w-full  mt-10 overflow-hidden">
                        <Carousel
                            arrows={false}
                            renderButtonGroupOutside
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            autoPlay={false}
                            shouldResetAutoplay
                            autoPlaySpeed={1500}
                            infinite
                            className="w-full mt-5"
                            responsive={responsive}
                        >

                            {data.techStack.map((item, index) => (
                                <div key={index} className="flex my-5 w-[221px] h-[234px] lg:h-[268px] flex-col items-center gap-2 justify-evenly bg-white shadow-lg rounded-2xl px-5 py-7 lg:py-5 flex-shrink-0">
                                    <img src={item.img.src} className='h-[40%] lg:h-[30%] object-contain' alt={item.title} />
                                    <div className="h-[1px] w-full bg-black/30" />
                                    <p className='text-lg font-bold text-center'>{item.title}</p>
                                    <p className='text-center text-sm text-[#707070]'>{item.text}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
