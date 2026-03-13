import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="mt-16 md:mt-24 lg:mt-30 border-t border-[#29283a] mx-4 md:mx-10 lg:mx-20 py-6 flex items-center justify-center">
        <p className="bg-gradient-to-r from-[#6c63ff] via-[#ff6584] to-[#43e97b] bg-clip-text text-transparent text-center font-light text-sm md:text-base">
          © {new Date().getFullYear()} Devcrib. All Rights Reserved.
        </p>
</div>
    </div>
  )
}

export default Footer