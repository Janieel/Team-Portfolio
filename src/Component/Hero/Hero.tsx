import React from 'react'

const Hero = () => {
  return (
         <div>
           <div className="pt-10 px-4">

              {/* Collaboration Badge */}
              <div className="flex justify-center items-center">
                <button className="h-[40px] w-[220px] sm:w-60 bg-[#32314a] flex items-center justify-center rounded-[20px] border border-[#6863c2] gap-2">
                  
                  <div className="h-5 w-5 flex justify-center items-center relative">
                    <span className="animate-ping absolute inline-flex h-[5px] w-[5px] rounded-full bg-green-400 opacity-75"></span>
                  </div>

                  <span className="text-[0.8rem] sm:text-[0.9rem] text-[#655eee]">
                    OPEN TO COLLABORATION
                  </span>

                </button>
              </div>

              {/* Heading 1 */}
              <div className="flex justify-center text-white text-center">
                <span className="font-bold mt-3 tracking-tight leading-tight 
                text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem]">
                  WE CREATE
                </span>
              </div>

              {/* Heading 2 */}
              <div className="flex justify-center font-serif -mt-2 sm:-mt-4 md:-mt-6">
                <span className="bg-gradient-to-r from-[#6c63ff] via-[#ff6584] to-[#43e97b] bg-clip-text text-transparent
                text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-center">
                  Thriving Platforms
                </span>
              </div>

              {/* Description */}
              <div className="flex justify-center px-4">
                <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] text-center text-white max-w-[700px] mb-10">
                  Cross-functional team of engineers, designers, and thinkers crafting products that leave a mark.
                </span>
              </div>

              {/* Buttons */}
              <div className="flex  sm:flex-row gap-4 sm:gap-6 items-center justify-center text-white ">
                
                <button className="h-12 w-44 sm:h-14 sm:w-52 bg-[#4e47d0] text-[1rem] sm:text-[1.1rem] rounded-[15px]
                hover:bg-[#3b3878] hover:scale-[1.03]
                   transition duration-200 ">
                  View our work
                </button>

                <button className="h-12 w-44 sm:h-14 sm:w-52 bg-[#4e47d0] text-[1rem] sm:text-[1.1rem] rounded-[15px]
                hover:bg-[#3b3878] hover:scale-[1.03] transition duration-200 ">
                  Meet the team
                </button>

              </div>

            </div>
    </div>
  )
}

export default Hero