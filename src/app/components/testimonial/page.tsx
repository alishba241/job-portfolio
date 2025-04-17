'use client';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Fatima Noor',
    country: 'Pakistan',
    review: "Alishba’s custom designs and smooth development boosted our online presence and conversions.",
  },
  {
    name: 'Ahmed Khan',
    country: 'Pakistan',
    review: "Exceptional service! The website she developed is fast, responsive, and visually stunning.",
  },
  {
    name: 'Sara Malik',
    country: 'Pakistan',
    review: "She transformed our web idea into reality—smooth, user-friendly, and flawless across devices.",
  },
  {
    name: 'Adeel Raza',
    country: 'Pakistan',
    review: "Working with Alishba was a delight. Her design sense is sharp, and delivery was always on time.",
  },
  {
    name: 'Mehreen Fatima',
    country: 'Pakistan',
    review: "Alishba brought creativity and precision to our frontend revamp. We saw an instant boost in engagement.",
  },
  {
    name: 'Bilal Hussain',
    country: 'Pakistan',
    review: "Her Next.js skills are top-notch. Clean, scalable code with excellent attention to detail.",
  },
  {
    name: 'John Carter',
    country: 'USA',
    review: "Truly impressive work! Alishba handled our E-commerce platform frontend with elegance and efficiency.",
  },
  {
    name: 'Emily Zhang',
    country: 'Canada',
    review: "Very professional and friendly. Loved how responsive and attractive the web UI turned out.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // auto scroll every 3 sec
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        return testimonials.slice(currentIndex, currentIndex + 1);
      } else if (window.innerWidth < 1024) {
        return testimonials.slice(currentIndex, currentIndex + 2);
      }
    }
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id='testimonials' className="bg-[#111] text-white px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-green-400 text-xl font-medium">Testimonial</p>
        <h2 className="text-[28px] md:[40px] lg:text-[50px] xl:text-[60px] font-bold leading-tight mt-4">
          Reviews from My <br />Satisfied Clients
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 transition-all duration-500">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#121212] w-full max-w-[90%] sm:max-w-[400px] p-6 rounded-xl border border-white/10 shadow-lg hover:border-white/30 transition"
          >
            <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm">{testimonial.country}</p>
            <p className="text-white mt-4 text-base leading-relaxed">
              {testimonial.review}
            </p>
            <div className="flex gap-1 mt-4 animate-pulse text-green-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4 flex-wrap">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex ? 'bg-green-400' : 'bg-white/20'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
