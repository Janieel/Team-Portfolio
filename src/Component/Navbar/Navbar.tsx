import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        {/* desktop */}
        <div className=' hidden sm:block h-[100px] w-full  '>
           <div className='grid grid-cols-2 h-full '>
               <div className='col-span-1 h-full  flex items-center '>
                  <span className=' font-bold bg-gradient-to-r from-[#6c63ff] to-[#ff6584] bg-clip-text text-transparent
                    bg-amber-300 font-serif text-[3rem] flex items-center justify-center  ml-10  '> 
                     DEVCRIB 
                </span>
               </div>
                <div className='col-span-1 h-full flex justify-end'>
                     
                        <div className=' mr-5 gap-4 flex justify-center items-center'>
                          <button className='text-[#6c63ff] h-12 w-30 rounded-[10px] bg-[#141228] '>
                           <Link href={'/'}> About </Link>
                         </button>  
                          <button className=' text-[#6c63ff]  hover:bg-[#141228]  h-12 w-30 rounded-[10px]  '>
                          <Link href={'/Project'}>Project</Link>
                          </button>  
                        </div>
                     
                </div>
           </div>
         
        </div>
    </div>
  )
}

export default Navbar