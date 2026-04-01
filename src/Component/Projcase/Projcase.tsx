import React from 'react'
import Pov from '../Pov/Pov'

const Projcase = () => {
  return (
    <div>
        <div className=' h-20  flex justify-center items-center '>
            <div className='flex gap-6'>
              <span className=' text-[2rem]  sm:text-[3rem] font-serif text-[#a09af8]'>Project</span>
              <span className=' text-[2rem] sm:text-[3rem] font-serif text-[#a09af8]'>Showcase</span>
            </div>
        </div>
        <div className='bg-[#473442] sm:mt-5 flex justify-center items-center text-[#dedde9]'>
           <span className='text-center px-5 text-[0.8rem] sm:text-[1rem] '>Building products and growing communities here's what we've been working on.</span> 
        </div>
        <div className=' px-5 sm:px-10 '>
            <Pov/>
        </div>
    </div>
  )
}

export default Projcase