'use client';

import { useState, useEffect } from 'react';
import { FaCode, FaFileSignature, FaDesktop, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    icon: <FaDesktop className="text-3xl mb-4" />,
    title: 'Custom Website Development',
    description:
      'Expert in developing custom websites that perfectly align with your brand identity, focusing on performance, aesthetics, and user engagement.',
  },
  {
    icon: <FaShoppingCart className="text-3xl mb-4" />,
    title: 'E-Commerce UI Development',
    description:
      'Specialized in designing intuitive and visually appealing e-commerce interfaces that provide a smooth shopping experience and drive conversions.',
  },
  {
    icon: <FaCode className="text-3xl mb-4" />,
    title: 'Figma to Code Conversion',
    description:
      'Experienced turning Figma designs into fully responsive, pixel-perfect websites, ensuring that every design element is accurately implemented with optimal performance.',
  },
  {
    icon: <FaFileSignature className="text-3xl mb-4" />,
    title: 'Landing Page Development',
    description:
      'Created landing pages that captivate visitors and drive action, with a strong focus on clean design, fast loading times, and clear calls-to-action.',
  },
];

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  // Handle window resize
  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide only on small screens
  useEffect(() => {
    if (windowWidth < 768) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [windowWidth]);

  const visibleServices = windowWidth < 768 ? [services[currentIndex]] : services;

  // Prevent rendering on server
  if (!isClient) return null;

  return (
    <section className="min-h-screen bg-[#141414] text-white px-4 sm:px-6 md:px-12 py-16">
      <div className="text-center mb-14">
        <p className="text-green-400 text-xl font-medium">Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-[50px] xl:text-[70px] font-semibold mt-4 lg:mt-8">
          Crafting Solutions Tailored
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-[50px] xl:text-[70px] font-semibold lg:relative lg:top-6">
          to Your Needs
        </h2>
      </div>

      <div
        className={`${
          windowWidth < 768
            ? ''
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-x-12'
        } max-w-6xl mx-auto lg:relative lg:top-14`}
      >
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="border border-stone-300/20 hover:border-stone-300/50 rounded-lg p-6 hover:shadow-lg transition group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
              <p
                className={`relative top-1 transition-transform duration-700 ease-in-out ${
                  hoveredIndex === index ? 'flip-on-hover' : ''
                }`}
              >
                {service.icon}
              </p>
              <h3 className="text-white text-xl md:text-[20px] lg:text-[25px] xl:text-[30px] font-medium mb-2">
                {service.title}
              </h3>
            </div>
            <p className="text-stone-300 text-base md:text-[16px] lg:text-[16px] xl:text-lg pl-2 sm:pl-10 py-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination dots only for small screens */}
      {windowWidth < 768 && (
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? 'bg-green-400' : 'bg-white/20'
              }`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
}
