import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='mt-30  h-20 flex items-center justify-center border border-t-[#29283a] mx-20'>
                <p className=' bg-gradient-to-r from-[#6c63ff] via-[#ff6584] to-[#43e97b] bg-clip-text text-transparent font-light text-[0.9rem]'>
                  © {new Date().getFullYear()} Devcrib. All Rights Reserved.
                </p>    
        </div>
    </div>
  )
}

export default Footer