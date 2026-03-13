import React from 'react'

const Teamwork = () => {
  return (
    <div> 
           <div className=" px-6 ">

                 
                  <div className="flex items-center">
                    <div className="h-[3px] w-[25px] md:w-[30px] bg-white"></div>
                    <span className="ml-3 text-[#6c63ff] text-sm md:text-base">
                      HOW WE WORK
                    </span>
                  </div>

             
                  <p className="font-bold text-white mt-3
                  text-[2rem] sm:text-[2.5rem] md:text-[3rem]">
                    OUR VALUES
                  </p>

                
                  <p className="text-[#7c7a99]  font-serif text-[0.95rem] sm:text-[1.1rem] md:text-[1.2rem] ">
                    We're not just a team, we're a mindset. These principles guide how we think, create, and collaborate.
                  </p>

               
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                    <div className="rounded-[20px] bg-[#16161f] border border-white/10 p-6 md:p-10
                     hover:border-purple-500/40 hover:-translate-y-1 transition duration-300">
                      <span className="text-white font-bold">
                        OPEN COLLABORATION
                      </span>
                      <p className="text-[#7c7a99] mt-4 text-sm md:text-base">
                        The best ideas surface in open, honest environments. We build psychological safety and celebrate diverse perspectives.
                      </p>
                    </div>

                    <div className="rounded-[20px] bg-[#16161f] border border-white/10 p-6 md:p-10
                     hover:border-purple-500/40 hover:-translate-y-1 transition duration-300">
                      <span className="text-white font-bold">
                        SUSTAINABLE IMPACT
                      </span>
                      <p className="text-[#7c7a99] mt-4 text-sm md:text-base">
                        We focus on creating long-term value for our clients, our community, and our craft. Our goal is to build solutions that endure beyond short-term results.
                      </p>
                    </div>

                    <div className="rounded-[20px] bg-[#16161f] border border-white/10 p-6 md:p-10
                    hover:border-purple-500/40 hover:-translate-y-1 transition duration-300">
                      <span className="text-white font-bold">
                        SHIP & LEARN
                      </span>
                      <p className="text-[#7c7a99] mt-4 text-sm md:text-base">
                        We prioritize progress through rapid iteration and continuous learning. Every launch is an opportunity to improve, refine, and move closer to excellence.
                      </p>
                    </div>

                  </div>

           </div>
   </div>
  )
}

export default Teamwork