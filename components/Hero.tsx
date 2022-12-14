import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'


type Props = {
  pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo?.name}`,
            "Guy-who-loves-coffee.jsx",
            "<ButLovesToCodeMore>"
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center 
                        text-center overflow-hidden'>
          <BackgroundCircles />
          <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={ urlFor(pageInfo?.heroImage).url() }
            alt=''
            width={376}
            height={190} />
            
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[14px]'>
                    { pageInfo?.role }
                </h2>
                <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
              </h1>
              
              <div className='pt-5 space-x-4'>
                  <a href="#about">
                    <button className='heroButton'>About</button>
                  </a>
                  
                  <a href="#skills">
                    <button className='heroButton'>Skills</button>
                  </a>
                  
                  <a href="#projects">
                    <button className='heroButton'>Projects</button> 
                  </a>
                
              </div>
            </div>
    </div>
  )
}

export default Hero