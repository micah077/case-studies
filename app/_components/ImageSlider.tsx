'use client';

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IData } from "../data";
import Image from "next/image";

export default function ImageSlider({ data }: { data: IData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;

    if (!container) return;

    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 620);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const totalPanels = sections.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        start: "top top",
        end: () => `+=${totalPanels * 100}%`,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (totalPanels - 1));
          setActiveIndex(newIndex);
        },
      },
    });

    const xPercent = -100;
    tl.to(sections, {
      xPercent: xPercent * (totalPanels - 1),
      ease: "none",
    });

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', refreshScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', refreshScrollTrigger);
      window.removeEventListener('resize', updateIsMobile);
    };
  }, [data.imageSlide.length,isMobile]);

  const activeImage = data.imageSlide[activeIndex];

  return (
    <div
      style={{
        backgroundColor: activeImage?.showColor ? activeImage.color : "#ffffff",
        backgroundImage: !activeImage?.showColor ? `url(${activeImage.bgImage?.src})` : "none"
      }}
      className="bg-cover overflow-x-hidden"
    >
      <div className="h-screen flex container" ref={containerRef}>
        {data.imageSlide.map((image, index) => (
          <div className="panel box-border w-full md:w-[90%] rounded-[10px] flex-none p-5" key={index}>
            <Image
              width={1041}
              height={669}
              src={image.image.src}
              alt={`Slider image ${index + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center">
          {data.imageSlide.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}