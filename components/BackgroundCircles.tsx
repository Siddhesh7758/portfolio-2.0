import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function BackgroundCircles({}: Props) {
  return (
      <motion.div
          initial={{
              opacity: 0, 
          }} 
          animate={{
              scale: [1, 2, 2, 3, 1],
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
              borderRadius: ["20%","20%","50%","80%","20%"],
          }}
          transition={{
              duration: 2.5
          }}
                
          className='relative flex items-center justify-center'>
          
          <div className='absolute border border-gray-500 rounded-full h-[150px] w-[150px] mt-56
                            animate-ping'/>
          <div className='absolute border border-gray-500 rounded-full h-[280px] w-[280px] mt-56
                            animate-ping'/>
          <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[560px] w-[560px]
                            absolute mt-56 animate-pulse'/>
          <div />

    </motion.div>
  )
}

export default BackgroundCircles