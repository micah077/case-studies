"use client";
import React, { useState } from 'react';
import { IData } from '../data';
import { hexToRgba } from '@/lip/helper';

const Feature = ({ data }: { data: IData }) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="layout py-20">
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-[28px] md:text-[32px] xl:text-[60px] font-semibold text-center">New Features Added</h1>
                <p className="text-[#8A90A2] md:text-[14px] md:leading-[21px] xl:text-lg xl:leading-[30px] text-center w-[75%]">
                    The platform focuses on improving user experience and engagement through streamlined access and enhanced management tools.
                </p>
                <div className="flex flex-wrap justify-center">
                    {data?.featuresAdded.map((item, index) => {
                        const isHovered = hoveredId === index;

                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center col-span-1 mt-10 ${data.featureNumber}`}
                            >
                                <div 
                                    className='rounded-full p-1' 
                                    style={{ background: `linear-gradient(90deg, ${data.featuresAddedGradient.start}, ${data.featuresAddedGradient.end})` }}
                                >
                                    <div
                                        style={{
                                            background: isHovered ? `linear-gradient(90deg, ${data.featuresAddedGradient.start}, ${data.featuresAddedGradient.end})` : "#ffffff",
                                        }}
                                        onMouseEnter={() => setHoveredId(index)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className="group flex items-center justify-center h-[90px] w-[90px] rounded-full"
                                    >
                                        <p className="text-[28px] font-medium group-hover:text-white">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2 mt-5">
                                    <p className="text-center text-[#0F0928] font-medium">{item.title}</p>
                                    {item?.text && (
                                        <p className="text-center text-[#79808A] w-[80%]">{item.text}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Feature;
