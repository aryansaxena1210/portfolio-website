"use client" 
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

const Projects = () => {

    const { ref } = useSectionInView( "Projects", 0.5 );

    return (
        <section className='scroll-mt-28' id="projects" ref={ref}>

            <SectionHeading>My Projects</SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>))
                }
            </div>

        </section>
    )
}


export default Projects