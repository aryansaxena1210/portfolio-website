"use client"

import React, { useContext, useState } from 'react'
import { motion, spring } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
    
   
    return (
        <header className="z-[999] relative">
            <motion.div className='fixed flex flex-wrap top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[o.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-700 dark:border-black/30 dark:bg-opacity-75 '
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }} />

            <nav className='fixed flex justify-between top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0' >
                <ul className='flex w-[22rem] flex-wrap items-center justify-around gap-y-1 text-[0.9rem] font-medium text-grey-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
                    {
                        links.map((link) =>
                            <motion.li className=' relative h-3/4 flex items-center justify-center' key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                <Link
                                        onClick={ ()=> {                                            
                                             setActiveSection(link.name);
                                             setTimeOfLastClick(Date.now);
                                    }}
                                        className={ clsx (
                                                            "text-gray-600 flex items-center justify-center px-3 py-3 hover:text-gray-950 transition rounded-full dark:text-gray-300 dark:hover:text-gray-100 ",
                                                            {
                                                                "text-gray-950 dark:text-gray-100": activeSection === link.name,
                                                            }
                                                        )
                                        // end of className

                                    }   
                                        href={link.hash}>  
                                        {link.name}

                                    {
                                        //not using clsx as we need to render a completely new component of type 'span' (and not just a dynamic string) 

                                        link.name === activeSection && (<motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800' layoutId="activeSection" transition={{type:"spring", stiffness:380, damping:30}}></motion.span>)
                                    }

                                </Link>
                            </motion.li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

