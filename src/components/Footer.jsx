import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-screen px-10 py-5'>
        <div className='h-fit bg-[#606c38] rounded-xl text-white py-4 px-10 flex flex-col md:flex-row gap-5 items-end justify-between'>
          <div className='flex md:flex-col gap-5 md:gap-1'>
            <a href="https://github.com/Swayanshu004" target='blank'>            
              <div className='h-6'>
              <FaGithub className='text-white text-xl my-2 hover:text-2xl'/>
              </div>
            </a>
            <a to="https://x.com/SwayanshuSahoo">            
              <div className='h-6'>
              <FaXTwitter className='text-white text-xl my-2 hover:text-2xl'/>
              </div>
            </a>
            <a to="https://www.linkedin.com/in/swayanshu-satyapragyan-sahoo-084b6525a/">            
              <div className='h-6'>
              <FaLinkedinIn className='text-white text-xl my-2 hover:text-2xl'/>
              </div>
            </a>
          </div>
          <div className='text-right text-white font-mono font-semibold md:text-xl'>
            <p>
              Thanks for joining me on this tech journey.
            </p>
            <p>
              Keep exploring, keep learning, keep contributing
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer