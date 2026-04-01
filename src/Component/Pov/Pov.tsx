import React from 'react'
import pov from "@/Data/Pov"
import Image from "next/image";

const Pov = () => {
  return (
    <div>
       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 ">
            {pov.map((member, index) => (

            <div key={index} className="rounded-[10px] panel ">

                <div
                className="p-6 rounded-[20px] bg-[#16161f] border border-white/10
                
                hover:border-purple-500/30
                hover:-translate-y-2
                transition-all duration-300
                relative overflow-hidden
                group cursor-pointer"
                >

                <div
                    className="absolute top-0 left-0 right-0 h-1
                    bg-gradient-to-r from-[#6c63ff] to-[#ff6584]
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left"
                ></div>

                <div className="h-50 w-full bg-purple-400 relative">
                    <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className=" object-cover "
                    />
                </div>

                <p className="mt-3 font-serif text-white">
                    {member.name}
                </p>

                <p className="mt-1 font-serif text-[#6c63ff]">
                    {member.role}
                </p>

                <p className="mt-2 text-[#7c7a99] text-[0.9rem]">
                    {member.bio}
                </p>
                { member.demo &&(

                   <div className=' w-30 bg-purple-400  border border-purple-500/20 text-black mt-2
                      text-center items-center justify-center py-2 rounded-[10px] flex   lg:hidden lg:group-hover:block '>
                     <a  
                       href={member.demo}
                       target="_blank"
                       rel="noopener noreferrer" 
                       >
                       live demo
                    </a>  
                  
                 </div>
                )}
             

                <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] text-[#a09af8]">

                    {member.skills.map((skill, i) => (
                    <button
                        key={i}
                        className="px-3 h-9 rounded-[10px] bg-purple-500/10 border border-purple-500/20"
                    >
                        {skill}
                    </button>
                    ))}

                </div>

                </div>

            </div>

            ))}

        </div>
     </div>
    
  )
};

export default Pov