import Image from 'next/image'
import React from 'react'
import SatsSecion from './StatsSection'

function About() {
  return (
    <div id='about' className='bg-[#141414] h-full font-sora'>
      
      {/* Heading Section */}
      <div className='flex flex-col justify-center items-center py-16 px-4 text-center'>
        <p className='text-green-400 text-[18px] sm:text-[20px] font-semibold'>About Me</p>
        <h1 className='text-white text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-semibold'>Unveiling the</h1>
        <h1 className='text-white text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-semibold -mt-2 md:-mt-6'>Layers of My Story</h1>
      </div>

      {/* Content Section */}
      <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center gap-10 px-6 pb-10'>
        {/* Image */}
        <div className='lg:block hidden'>
        <div  className='flex justify-center'>
          <div className='transition-transform -mt-8 duration-500 ease-in-out transform hover:rotate-3 hover:scale-110'>
            <Image 
              src={'/portimage4.jpg'} 
              alt='About Image' 
              width={300} 
              height={300}
              className='rounded-lg'
            />
          </div>
        </div>
        </div>
         {/* Text */}
         <div className='w-full lg:w-[60%]'>
          <p className='text-base md:text-[16px] lg:text-[17px] xl:text-xl md:-mt-8 lg:-mt-0 -mt-10 font-medium text-stone-300 text-center lg:text-left'>
            My journey into development began in 2023 with a deep curiosity for building things from scratch.
            I quickly found my flow with frontend technologies—especially Next.js. Turning Figma designs into smooth,
            responsive websites became my creative outlet. For me, coding is more than logic—it’s how I bring ideas to life.
          </p>
          <SatsSecion />
        </div>
      </div>
    </div>
  )
}

export default About
