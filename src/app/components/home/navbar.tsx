'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import WavyText from './wavy' 
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'HOME' },
  { href: '#portfolio', label: 'PORTFOLIO' },
  { href: '#about', label: 'ABOUT' },
  { href: '#testimonials', label: 'TESTIMONIAL' },
  { href: '#contact', label: 'CONTACT' },
]


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="home" className="fixed h-[80px] top-0 left-0 w-full z-50 bg-[#111]/60 backdrop-blur-md py-4">
    <div className="flex justify-between items-center px-6 md:px-10 text-white font-[500] font-sans">
      
      {/* Logo */}
      <div className="group relative overflow-hidden text-[17px] lg:text-[17px] md:text-[15px] xl:text-[20px]">
        <WavyText text="ALISHBA NAVEED" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 md:gap-6 lg:gap-12 text-[16px] md:text-[13px] lg:text-[16px] xl:text-[18px]">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <li className="group relative overflow-hidden cursor-pointer">
              <WavyText text={link.label} />
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        {menuOpen ? (
          <X className="w-7 h-7 cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="w-7 h-7 cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden bg-[#111] text-white flex flex-col items-center gap-6 py-8 text-[18px] font-medium transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
      }`}
    >
      {links.map((link, index) => (
        <Link href={link.href} key={index} onClick={() => setMenuOpen(false)}>
          <div className="group relative overflow-hidden cursor-pointer">
            <WavyText text={link.label} />
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Navbar
