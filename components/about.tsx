"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'


const About = () => {

  const { ref } = useSectionInView( "About");

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] leading-8 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About Me</SectionHeading>

      <p className='mb-3'>
        Hello! I'm <span className='font-bold'>Aryan Saxena</span>, a dedicated Computer Science student with a passion for creating seamless user experiences through technology. My primary focus is on <span className='font-bold'>Android-Development</span> using <span className='font-bold'>Jetpack Compose</span> or  <span className='font-bold'>React-Native</span>, <span className='font-bold'>Web-Development utilizing the MERN stack</span>.
        I thrive on the challenge of breaking down complex problems into manageable components and finding elegant solutions. Currently, I'm seeking <span className='font-bold'>INTERNSHIP OPPORTUNITIES</span> where I can apply my skills, learn from experienced professionals, and contribute to impactful projects.
      </p>
      <p className='mb-2'>
        In addition to my academic pursuits, I'm an active member of the swimming club and have had the honor of competing as a <span className='font-bold'>6-time swimming nationalist</span>. My journey in swimming has taught me discipline, perseverance, and the joy of achieving goals through hard work and dedication.
        When I'm not coding or swimming, you'll find me exploring new technologies, connecting with fellow developers, and continuously pushing myself to grow both personally and professionally.
      </p>
    </motion.section>
  )
}

export default About