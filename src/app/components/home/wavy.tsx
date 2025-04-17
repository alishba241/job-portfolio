import React from 'react'

const WavyText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex gap-[2px] cursor-pointer">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 group-hover:-translate-y-1 group-hover:text-green-300"
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

export default WavyText
