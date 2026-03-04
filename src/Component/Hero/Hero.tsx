import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='bg-emerald-800 h-100 pt-10 '>
              <div className='bg-red-300  flex justify-center items-center '>
             
                <button className=' h-[40px]  w-60  bg-yellow-600 flex items-center justify-center rounded-[20px] border '> 
                 <div className='bg-red-500 h-5 w-5 flex justify-center items-center  '> <span className="animate-ping absolute inline-flex h-[5px] w-[5px] rounded-full bg-green-400 opacity-75 "></span></div>
                   <span className='text-[0.9rem]'>OPEN TO COLLABORATION </span>
                </button>
              </div>
             <div className='bg-green-400 flex items-center justify-center font-serif'> <span className='text-[100px]'>WE CREATE</span> </div>
             <div className='flex items-center justify-center font-serif'><span className='text-[100px] bg-blue-600'>Thriving Platforms</span></div>
        </div>
    </div>
  )
}

export default Hero