import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo : PageInfo
}

function About({ pageInfo }: Props) {
  return (
      <motion.div
          initial={{
                  x: -200,
                  opacity: 0
              }}
              whileInView={{
                  x: 0,
                  opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                  duration: 1
              }}
          className='flex flex-col text-center md:text-left relative h-screen 
                        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
                        text-xl'>
        about
        </h3>  
          
          <motion.img
              initial={{
                  x: -200,
                  opacity: 0
              }}
              whileInView={{
                  x: 0,
                  opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                  duration: 1
              }}
             src={ urlFor(pageInfo?.profilePic).url() }
              className='mb-24 mt-4 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover
                            md:rounded-lg md:w-64 md:h-95 xl:w-[380px] xl:h-[380px]'
        />
        
        <div className='mt-2 space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>
                A <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>
                { pageInfo?.backgroundInformation }
            </p>
        </div>
    </motion.div>
  )
}

export default About