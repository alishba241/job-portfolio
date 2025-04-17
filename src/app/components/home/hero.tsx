import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-[#111] h-auto'>
      {/* Container */}
      <div className='flex flex-col-reverse md:flex-row gap-10 justify-between md:pt-6 lg:pt-0 items-center px-6 md:px-10'>
        
        {/* Content */}
        <div className='text-center md:text-left mt-20'>
          <p className='text-stone-300 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px] font-[500]'>Hi There,</p>
          <h1 className='text-white text-[25px] md:text-[35px] lg:text-[50px] xl:text-[65px] font-[500] mt-3 md:mt-4 lg:mt-0'>I am Alishba Naveed</h1>
          <h1 className='text-white text-[25px] md:text-[35px] lg:text-[50px] xl:text-[65px] font-[500] -mt-2 lg:-mt-7 xl:-mt-8'>Frontend Developer</h1>
          <p className='text-stone-300 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[400] pt-4'>
            My passion for design, code and web interaction fuels <br className="hidden lg:block" />
            <span>my journey in the web dev realm.</span>
          </p>
        </div>

        {/* Image */}
        <div className='relative md:top-24 hidden md:block'>
          <Image src={'/portimage3.jpg'} alt='' width={350} height={300} className='md:w-[300px] md:h-[320px] lg:w-[300px] lg:h-[380px] xl:w-[350px] xl:h-[480px] mx-auto md:mx-0 rounded-lg'/>
        </div>
        <div className='relative top-24 md:hidden'>
          <Image src={'/portimage4.jpg'} alt='' width={350} height={300} className='mx-auto md:mx-0 rounded-lg'/>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 px-6 md:ml-3 mt-6 lg:relative lg:-top-[10px]'>
        <Link href='#portfolio'>
          <button className='bg-zinc-900 text-[15px] lg:text-[18px] font-semibold duration-300 text-white px-8 lg:px-12 py-2.5 rounded-lg border border-white hover:bg-white hover:text-black'>
            See Work
          </button>
        </Link>
        <a href='/Alishba_naveed_CV.pdf' download>
          <button className='bg-zinc-900 text-[15px] lg:text-[18px] font-semibold duration-300 text-white px-8 lg:px-12 py-2.5 rounded-lg border border-white hover:bg-white hover:text-black'>
            Download CV
          </button>
        </a>
      </div>

      {/* Marquee Scroller */}
      <div className="overflow-hidden whitespace-nowrap pt-10 md:pt-20">
        <div className="overflow-hidden whitespace-nowrap pt-2">
          <div className="flex animate-marquee1">
            <span className="mx-4 text-[#1d1d1d] text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Frontend Developer ✦ Next.js ✦ Javascript ✦ Html ✦ Css ✦ React ✦ Python ✦ TailwindCss ✦ Figma ✦ Typescript ✦
            </span>
            <span className="mx-4 text-[#1d1d1d] text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Frontend Developer ✦ Next.js ✦ Javascript ✦ Html ✦ Css ✦ React ✦ Python ✦ TailwindCss ✦ Figma ✦ Typescript ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


