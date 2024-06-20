"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView as useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVarients = {
    initial:{
        opacity:0,
        y:100,
    },
    animate: (index : number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05*index,
        }
    })
}

const Skills = () => {

    const {ref} = useSectionInView("Skills")

    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        ref={ref}
        id="skills">
            <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap gap-2 justify-center text-lg text-gray-800'>
                {
                    skillsData.map( (skill, index) => (
                         <motion.li 
                        key={index} 
                        className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        variants={fadeInAnimationVarients}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once:true,}}
                        custom={index}>
                            {skill}
                        </motion.li>    
                    )
                )
                }
            </ul>
        </section>
    )
}

export default Skills