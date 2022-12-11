/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {

  return (
    <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.2
            }}
      className='h-screen relative flex flex-col text-left overflow-hidden md:flex-row
                    max-w-full justify-center mx-auto items-center z-0 '>
      
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
                        text-xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                      snap-mandatory z-20 scrollbar-track-gray-400/20
                    scrollbar-thin scrollbar-thumb-[#F7AB0A]/50 '>
        
        {/* mapping the projects */}
        {projects?.map((project, i) => (

          // eslint-disable-next-line react/jsx-key
          <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center
                           p-20 md:p-40 h-screen' key={project._id}>
            
            <motion.img className='xl:h-[350px] w-auto md:h-[200px] md-w-auto' 
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1,  y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              
              src={ urlFor(project?.image).url() } alt=""/>
            
            <div className='space-y-0 px-0 md:px-10 max-w-6xl mt-2'>
              <h4 className='text-xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>Project {i + 1} of {projects.length} :
                  </span> {project?.title}
              </h4>


              <div className='flex items-center justify-center space-x-2'>
                { project?.technologies.map((technology) => (
                  <img className='h-8 w-8 m-1'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    width={300}
                    height={300} />
                ))}

              
              </div>
              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
              
            </div>

          </div>
        ))}

        </div>
        
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] skew-y-12">
      </div>
    </motion.div>
  )
}

export default Projects