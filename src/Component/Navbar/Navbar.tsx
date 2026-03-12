'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname =  usePathname ()
  return (
    <div>
                <div className="h-[80px] md:h-[100px] w-full bg-amber-500">
                <div className="grid grid-cols-2 h-full">

                  {/* Logo */}
                  <div className="flex items-center">
                    <span
                      className="
                      font-bold font-serif
                      bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                      bg-clip-text text-transparent
                      text-[1.8rem] md:text-[2.5rem] lg:text-[3rem]
                      ml-4 md:ml-10
                    "
                    >
                      DEVCRIB
                    </span>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-end items-center">
                    <div className="mr-3 md:mr-5 gap-2 md:gap-4 flex">

                      <Link
                        href="/"
                        className={`
                          h-10 md:h-12
                          px-4 md:px-6
                          rounded-[10px]
                          flex items-center justify-center
                          hover:bg-[#141228]
                          text-sm md:text-base
                          ${pathname === "/" ? "bg-[#141228] text-[#6c63ff]" : "text-[#6c63ff]"}
                        `}
                      >
                        About
                      </Link>

                      <Link
                        href="/Project"
                        className={`
                          h-10 md:h-12
                          px-4 md:px-6
                          rounded-[10px]
                          flex items-center justify-center
                          hover:bg-[#141228]
                          text-sm md:text-base
                          ${pathname === "/Project" ? "bg-[#141228] text-[#6c63ff]" : "text-[#6c63ff]"}
                        `}
                      >
                        Project
                      </Link>

                    </div>
                  </div>

                </div>
              </div>
     
    </div>
  )
}

export default Navbar