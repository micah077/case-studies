"use client";
import React from 'react';
import { IData } from '../data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TechStack = ({ data }: { data: IData }) => {
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
            breakpoint: { max: 1024, min: 700 },
            items: 3 // Adjusted for better tablet experience
        },
        small: {
            breakpoint: { max: 700, min: 464 },
            items:2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='py-20' style={{ backgroundColor: data.techStackColor }}>
            <div className="layout">
                <div className="flex w-full flex-col items-center gap-5">
                    <h1 className='text-[28px] md:text-[32px] xl:text-[60px] font-semibold text-center'>
                        Tech Stacks <span style={{ color: data.brandColor }}>Used</span>
                    </h1>
                    <p className='text-center w-[70%] text-[#8A90A2] leading-[30px]'>
                        Our project employs a modern and efficient combination of technologies for both the backend and frontend, ensuring robust performance and scalability. The chosen stack allows for seamless data management and responsive user interfaces.
                    </p>
                    <div className="w-full mt-10 overflow-hidden">
                        <Carousel 
                            arrows={false}
                            renderButtonGroupOutside
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            autoPlay 
                            shouldResetAutoplay 
                            autoPlaySpeed={1500} 
                            infinite 
                            className="w-full mt-5" 
                            responsive={responsive}
                        >
                            {data.techStack.map((item, index) => (
                                <div key={index} className="flex my-5 w-[221px] h-[268px] flex-col justify-between items-center gap-5 bg-white shadow-lg rounded-2xl p-5 flex-shrink-0">
                                    <img src={item.img.src} className='h-[30%] object-cover' alt={item.title} />
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
