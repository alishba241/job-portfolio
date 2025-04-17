import React from 'react'

function SatsSecion() {
  return (
    <div className=" text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-12 border-b border-green-400 pb-6">
          <div className="w-40 text-center">
            <h2 className="text-5xl font-bold text-white">01+</h2>
            <p className="text-stone-300 font-medium mt-1 text-lg">Years Experience</p>
          </div>
          <div className="w-40 text-center">
            <h2 className="text-5xl font-bold text-white">20+</h2>
            <p className="text-stone-300 font-medium mt-1 text-lg">Projects Completed</p>
          </div>
          <div className="w-40 text-center">
            <h2 className="text-5xl font-bold text-white">10+</h2>
            <p className="text-stone-300 font-medium mt-1 text-lg">Satisfied Clients</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-4 text-gray-300 text-sm">
          <p className="text-center sm:text-left">
            Email:{" "}
            <a
              href="mailto:alishbanaveeddev@gmail.com"
              className="text-white hover:underline"
            >
              AlishbaNaveedDev@gmail.com
            </a>
          </p>
          <p className="text-center">
            Phone:{" "}
            <a
              href="tel:+923305498438"
              className="text-white hover:underline"
            >
              +92-330-5498438
            </a>
          </p>
          <p className="text-center sm:text-right">Location: <span className='text-white'>Pakistan</span></p>
        </div>
      </div>
    </div>
  )
}

export default SatsSecion
