"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight} from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

const Intro = () => {

    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    const { ref } = useSectionInView( "Home", 0.5 );

    return (
        <section id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96' ref={ref}>

            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image src="/portfolio-profile-picture.jpg" alt="Aryan photo"
                            width='192' height='192' priority={true} quality='100' className=' h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                    </motion.div>

                    <motion.span className='absolute text-4xl bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <div>
                <motion.h1 className='mb-10 mt-4 px-4 font-medium !leading-[1.5] text-2xl sm:text-4xl'
                    initial={{ opacity: 0, x: 0, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Hello, I'm
                    <span className="font-bold"> Aryan.</span> I'm a student located in {" "}
                    <span className='font-bold'>Ames, Iowa</span>, and I am majoring in {" "}
                    <span className="font-bold">Computer Science. </span>
                    I would love for you reach out to me!
                </motion.h1>
            </div>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 txt-lg font-medium'
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1, }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-8 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition '
                onClick={()=>{
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now)
                }}
                >Contact Me Here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition '/></Link>
                
                <a href="/Resume-Aryan-Saxena.pdf" download={true} className=' group flex items-center justify-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>Download Resumé <HiDownload className='opacity-60 group-hover:translate-y-1 transition '/></a>
              
                <a href="  http://www.linkedin.com/in/aryan-saxena-4a2149176" target="_blank" className='flex txt-gray-700 items-center justify-center gap-2 bg-white p-4 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:text-black-950 dark:bg-white/10 dark:text-white/50'>
                    <BsLinkedin/>
                </a>
                
                <a href="https://github.com/aryansaxena1210" target="_blank" className='flex txt-gray-700 items-center justify-center gap-2 bg-white p-4 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack hover:text-black-950  dark:bg-white/10 dark:text-white/50'>
                    <FaGithubSquare/>
                </a>

            </motion.div>

        </section>
    )
}

export default Intro