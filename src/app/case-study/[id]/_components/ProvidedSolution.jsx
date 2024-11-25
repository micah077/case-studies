"use client"
import Image from 'next/image';
import { useScreenWidth } from '@/lip/useScreenWidth';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ProvidedSolution = ({ data }) => {
  const imageRef = useRef(null)
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


  useEffect(() => {
    const image = imageRef.current

    if (image) {
      gsap.to(image, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }

    return () => {
      gsap.killTweensOf(image)
    }
  }, [])
  return (
    <div ref={sectionRef} className="pt-10">
      <div className="layout flex flex-col items-center gap-5 md:gap-10">
        <h1 className="text-[25px] md:text-[32px] xl:text-[60px] font-semibold">
          Our Provided <span style={{ color: data.brandColor }}>Solution</span>
        </h1>
        <div className="h-[2px] w-[63.98px]" style={{ backgroundColor: data.brandColor }} />
        <p className="text-[13px] md:text-[16px] xl:text-lg text-center text-[#8A90A2] md:leading-[24px] xl:leading-[34px] md:w-[80%]">
          {data.providedSoltuionDescription}
        </p>
      </div>

      <div
        style={{ backgroundImage: `url(${data.providedSolutionBackground.src})` }}
        className="mt-40 md:mt-80 pb-10 bg-cover bg-no-repeat"
      >
        <div className="layout flex flex-col ">
          <div className="" ref={imageRef}>

            <Image
              className="mt-[-150px] md:mt-[-290px]"
              alt="Provided Solution Image"
              height={isMobile ? 223 : 997}
              width={isMobile ? 324 : 1447} // Adjusted to integer
              src={data.providedSolutionLaptop.src}
              priority // Load this image with priority
            />
          </div>
          <div className="lg:ml-10 flex items-center h-full gap-5">
            <p className="border-l-4 border-solid border-white xl:leading-[36px] pl-5 text-[14px] md:text-[20px] xl:text-2xl text-white md:w-[75%] xl:w-[65%]">
              {data.providedSolutionLaptopDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidedSolution;
