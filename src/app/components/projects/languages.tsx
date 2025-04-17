import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "Python", icon: "/python.png" },
  { name: "React", icon: "/rect.png" },
  { name: "Next.js", icon: "/next.png" },
  { name: "TailwindCSS", icon: "/tailwind.png" },
  { name: "Figma", icon: "/fig2.png" },
  {name:"Sanity", icon:"/sanity.png"},
];

export default function SkillsGrid() {
  return (
    <div className="py-10">
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto place-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          {/* Icon Box */}
          <div className="bg-[#1d1d1d] p-3 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="object-contain md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
            />
          </div>
          {/* Name outside the box */}
          <p className="text-white text-sm text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

