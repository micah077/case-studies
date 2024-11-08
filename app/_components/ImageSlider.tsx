'use client';

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IData } from "../data";
import Image from "next/image";

export default function ImageSlider({ data }: { data: IData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;

    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const totalPanels = sections.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        start: "top top",
        end: () => `+=${container.offsetWidth}`,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (totalPanels - 1));
          setActiveIndex(newIndex);
        },
      },
    });

    const xPercent = data.imageSlide.length === 3 ? -81 : -97;
    tl.to(sections, {
      xPercent: xPercent * (totalPanels - 1),
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [data.imageSlide.length]);

  const activeImage = data.imageSlide[activeIndex];

  return (
    <div
      style={{
        backgroundColor: activeImage?.showColor ? activeImage.color : "#ffffff",
        backgroundImage: !activeImage?.showColor ? `url(${activeImage.bgImage?.src})` : "none"
      }}
      className="bg-cover overflow-x-hidden"
    >
      <div className="h-full flex container" ref={containerRef}>
        {data.imageSlide.map((image, index) => (
          <div className="panel box-border w-[90%] rounded-[10px] flex-none p-5" key={index}>
            <Image
              width={1041}
              height={669}
              src={image.image.src}
              alt={`Slider image ${index + 1}`}
              className="w-full"
              loading="lazy" // Enable lazy loading for performance
            />
          </div>
        ))}
      </div>
    </div>
  );
}
