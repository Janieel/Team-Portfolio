import Image from "next/image";
import team from "@/Data/Team"

const TeamInfo = () => {
  return (
       <div>
              

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6  mt-10bg-red-400 
        
              ">

               
                   {team.map((member, index) => (
            
              <div key={index} className="rounded-[10px]">
                
              
              <div className="p-6 mt-10 rounded-[20px] bg-[#16161f] border border-white/10 
               h-120 sm:h-80 md:h-80 lg:h-90 xl:h-110 
               
              hover:border-purple-500/30 
                hover:-translate-y-2
                transition-all
                duration-300
                relative
                overflow-hidden
                group
                cursor-pointer
                " > 
                 <div className="
                  absolute 
                  top-0 
                  left-0 
                  right-0 
                  h-1
                  bg-gradient-to-r 
                  from-[#6c63ff] 
                  to-[#ff6584]
                  scale-x-0 
                  group-hover:scale-x-100
                  transition-transform 
                  duration-300 
                  origin-left
                "></div>

                <div className="h-20 w-20   ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-[10px] object-cover"
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
        }

export default TeamInfo