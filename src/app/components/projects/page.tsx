import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import SkillsGrid from './languages'

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#111] text-white pt-10 md:pt-28 px-4 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-green-400 text-lg font-medium mb-2">Portfolio</p>
        <h2 className="text-4xl md:text-[35px] lg:text-[50px] xl:text-[65px] font-syne font-bold leading-tight">
          Latest Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="lg:h-[370px] md:h-[280px] h-[200px] w-full relative group rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
          {/* Background Image */}
          <Image
            src="/project1.JPG"
            alt="Project 1"
            width={700}
            height={700}
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-10 rounded-xl"></div>

          {/* Main Project Image */}
          <div className="relative z-20 w-[90%] max-w-[500px] shadow-2xl shadow-black group-hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image
              src="/project1.JPG"
              alt="Project 1"
              width={700}
              height={700}
              className="w-full h-auto"
            />
            {/* Gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>

          {/* Hover Buttons */}
          <div className="absolute bottom-4 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500 z-30">
            <Link
              href="https://github.com/alishba241/vantela-e-commerce-website.git"
              target="_blank"
              className="bg-[#111] border border-white px-2.5 py-2.5 md:px-3 md:py-3 text-sm rounded-lg shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaGithub className="text-white text-[18px] md:text-[20px]" />
            </Link>
            <Link
              href="https://vantela-e-commerce-website.vercel.app/"
              target="_blank"
              className="bg-[#111] border border-white px-2.5 py-2.5 md:px-3 md:py-3  text-sm rounded-lg shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaLink className="text-white text-[18px] md:text-[20px]" />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="lg:h-[370px] md:h-[280px] h-[200px] w-full relative group rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center md:-top-[40%]">
          {/* Background Image */}
          <Image
            src="/project2.JPG"
            alt="Project 2"
            width={700}
            height={700}
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-10 rounded-xl"></div>

          {/* Main Project Image */}
          <div className="relative z-20 w-[90%] max-w-[500px] shadow-2xl shadow-black group-hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image
              src="/project2.JPG"
              alt="Project 2"
              width={700}
              height={700}
              className="w-full h-auto"
            />
            {/* Gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>

          {/* Hover Buttons */}
          <div className="absolute bottom-4 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500 z-30">
            <Link
              href="https://github.com/alishba241/ui-ux-hackathon-temp0.git"
              target="_blank"
              className="bg-[#111] border border-white px-2.5 py-2.5 md:px-3 md:py-3  text-sm rounded-lg shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaGithub className="text-white text-[18px] md:text-[20px]" />
            </Link>
            <Link
              href="https://ui-ux-hackathon-temp0.vercel.app/"
              target="_blank"
              className="bg-[#111] border border-white px-2.5 py-2.5 md:px-3 md:py-3  text-sm rounded-lg shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaLink className="text-white text-[18px] md:text-[20px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroller Text */}
      <div className="overflow-hidden whitespace-nowrap pt-10 md:pt-20">
        <div className="overflow-hidden whitespace-nowrap pt-2">
          <div className="flex animate-marquee2">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4 text-[#1d1d1d] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Own the Code ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <SkillsGrid />
    </section>
  )
}

export default Portfolio
