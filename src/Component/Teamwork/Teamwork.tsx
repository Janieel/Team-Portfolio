import React from 'react'

const Teamwork = () => {
  return (
    <div> 
        <div className=' px-20'>
           <div className='flex items-center'>
              <div className='h-[3px] w-[30px] bg-white'></div><span className='ml-2 text-[#6c63ff]'>HOW WE WORK</span>
           </div>
           <p className='font-bold text-[3rem] text-white'>OUR VALUES</p>
           <p className=' text-[#7c7a99] '>We're not just a team, we're a mindset. These principles guide how we think, create, and collaborate.</p>
            <div className=' grid grid-cols-3  h-70 mt-10 gap-10'>
                <div className='rounded-[20px] bg-[#16161f] border border-white/10 p-10'>
                   <span className='text-white font-bold'>OPEN COLLABORATION</span>
                   <p className='text-[#7c7a99] mt-5'>The best ideas surface in open, honest environments.
                     We build psychological safety and celebrate diverse perspectives.
                   </p>
                </div>
                 <div className='rounded-[20px] bg-[#16161f] border border-white/10 p-10'>
                   <span className='text-white font-bold'>SUSTAINABLE IMPACT</span>
                   <p className='text-[#7c7a99] mt-5'>
                       We think long-term for our clients, our community, and our craft. Good work outlasts the sprint.
                   </p>
                </div>
                 <div className='rounded-[20px] bg-[#16161f] border border-white/10 p-10'>
                   <span className='text-white font-bold'>SHIP & LEARN</span>
                   <p className='text-[#7c7a99] mt-5'>
                       We move fast, iterate often, and treat every launch as a learning opportunity. Progress over perfection
                   </p>
                </div>
                
             
            </div>
        </div>
   </div>
  )
}

export default Teamwork