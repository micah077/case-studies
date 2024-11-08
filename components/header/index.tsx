"use client"
import { Images } from '@/assests/GardenCase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { links } from './data'
import { LuArrowDown   } from "react-icons/lu";

const Header = () => {
    const [hoveredId, setHoveredId] = useState<null | number>(null)
    return (
        <header>
            <nav className=" px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="layout flex flex-wrap justify-between items-center">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="/logo.png" className="mr-3 w-[150px] object-contain" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center lg:order-2 gap-5">
                        <div className="group cursor-pointer hover:bg-orange-600 border border-orange-600 px-6 py-3 rounded-md flex items-center justify-center gap-3 transition-colors duration-1000">
                            <Image
                                src={Images.chat.src}
                                width={25}
                                height={25}
                                alt='button'
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-1000" // Smooth transition for color change
                            />
                            <p className='m-0 text-white group-hover:text-black transition-colors duration-1000'>Let&apos;s Talk</p>
                            <GoArrowUpRight size={25} className='m-0 text-orange-500 group-hover:text-black transition-colors duration-1000' />
                        </div>

                        <Image src={Images.buttonIcon.src} width={25} height={25} alt='button' />

                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">


                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                            {links.map((item) => {
                                return (
                                    <li key={item.id} onMouseLeave={() => setHoveredId(null)} onMouseEnter={() => setHoveredId(item.id)} className="group ">
                                        {item.id === hoveredId ? <div className="h-1 bg-orange-500 w-full rounded-lg transition-all duration-300 hover:border-4 hover:border-orange-600" /> : <div className="h-1 bg-orange-500 opacity-0 w-full  " />}
                                        <div className="flex items-center gap-1">
                                            <Link href="/services" className="mx-1 text-white ">{item.title}</Link>
                                           {item.isDropDown && <LuArrowDown   color='white'/> }
                                        </div>
                                        {/* {item.isDropDown && <div className="absolute left-32 w-[90vw] z-10 hidden group-hover:block">
                                            <div className="grid grid-cols-10 gap-5  m-5">
                                                {Array.from({ length: 5 }, (_, colIndex) => (
                                                    <div key={colIndex} className="p-4 col-span-2 bg-red-600">
                                                        {Array.from({ length: 5 }, (_, linkIndex) => (
                                                            <Link key={linkIndex} href={`/service${colIndex}-${linkIndex}`} className="block mb-1 text-black">
                                                                Service {colIndex + 1} Link {linkIndex + 1}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>} */}
                                    </li>
                                )
                            })}
                        </ul>



                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header