import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* desktop */}
        <div className=' hidden sm:block h-[100px] w-full bg-[#0a0a0f] backdrop-blur-xl  shadow-[0_4px_24px_rgba(108,99,255,0.15)]'>
           <div className='grid grid-cols-2 h-full '>
               <div className='col-span-1 h-full  flex items-center '>
                  <span className=' bg-gradient-to-r from-[#896a06] via-yellow-600 to-yellow-400 bg-clip-text text-transparent
                    bg-amber-300 font-serif text-[3rem] flex items-center justify-center  ml-10  '> 
                     DEVCRIB 
                </span>
               </div>
                <div className='col-span-1 h-full flex justify-end'>
                     
                        <div className=' mr-5 gap-4 flex justify-center items-center'>
                          <button className='bg-yellow-600 h-12 w-30 rounded-[10px]  hover:bg-yellow-700'>
                            About
                         </button>  
                          <button className='bg-yellow-600 h-12 w-30 rounded-[10px]  hover:bg-yellow-700'>
                            Project
                          </button>  
                        </div>
                     
                </div>
           </div>
         
        </div>
    </div>
  )
}

export default Navbar