import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"

type ProjectInfo = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectInfo) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress= useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress= useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div 
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: scrollYProgress,
        }}
        className="group mb-3 sm:mb-8 last:mb-0 "
        >
            <section 
                className=' bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-7 relative sm:h-[20rem] even:pl-8 hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 '>
                {/* left side */}
                <div className=' sm:group-even:ml-[18rem] flex flex-col px-4 pt-2 sm:pl-5 sm:pr-2 sm:pt-6 sm:max-w-[55%] h-full pb-10'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {
                            tags.map((tag, index) => (
                                <li className='bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    {/* right side */}
                    <Image className='absolute top-8 -right-40 w-[28.25rem] h-[18rem] rounded-t-lg shadow-2xl hidden sm:block group-even:right-[initial] group-even:-left-40 group:hover:-translate-x-3 group:hover:translate-y-3 group-hover:-rotate-2 transition

                group-even:group:hover:translate-x-3 group-even:group:hover:translate-y-3 group-even:group-hover:rotate-2

                group-hover:scale-[1.05]' src={imageUrl} alt={'Project I worked on.'} quality={95} />
                </div>


            </section >
        </motion.div>
    )
}