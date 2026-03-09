import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className=' pt-10 '>
              <div className=' flex justify-center items-center '>
             
                <button className=' h-[40px]  w-60  bg-[#32314a] flex items-center justify-center rounded-[20px] border border-[#6863c2] '> 
                 <div className=' h-5 w-5 flex justify-center items-center  '> <span className="animate-ping absolute inline-flex h-[5px] w-[5px] rounded-full bg-green-400 opacity-75 "></span></div>
                   <span className='text-[0.9rem] text-[#655eee]'>OPEN TO COLLABORATION </span>
                </button>
              </div>
             <div className=' flex items-center justify-center  text-white '> 
                  <span className='text-[6em] font-bold text-white mt-2 tracking-tight leading-tight'>WE CREATE</span> 
              </div>
             <div className='flex items-center justify-center font-serif -mt-8 '>
                <span className='text-[5rem] bg-gradient-to-r from-[#6c63ff] via-[#ff6584] to-[#43e97b] bg-clip-text text-transparent'>Thriving Platforms</span>
            </div>
             <div className='flex items-center justify-center font-extralight'><span className='text-[1.2rem] text-center text-white mb-10'>  cross-functional team of engineers, designers, and thinkers  crafting products that leave a mark.</span></div>
             <div className=' h-20'>
                 <div className='flex gap-6 h-full mt-10] items-center justify-center text-white'>
                    <button className='h-15 w-50 bg-[#4e47d0] text-[1.2rem] rounded-[15px] hover:bg-[#3b3878] '>view our work </button>
                    <button className='h-15 w-50 bg-[#4e47d0]  text-[1.2rem]  rounded-[15px] hover:bg-[#3b3878]  '>meet the team </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero