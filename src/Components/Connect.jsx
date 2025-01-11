import React from 'react'
import { GoArrowRight } from "react-icons/go";
function Connect() {
  return (
    <div className='bg-yellow-50 h-screen w-screen overflow-hidden font-Clash flex justify-center items-center flex-col gap-4'>
              <h1 className='  text-black text-center uppercase text-4xl font-semibold leading-none tracking-none md:text-5xl lg:text-6xl'>Connect with us</h1>
              <h1 className='  text-black text-center uppercase text-2xl font-medium leading-none tracking-none md:text-3xl lg:text-4xl'>Join our platform and showcase <br/> our brand to a wider audience.</h1>
              <button className=' bg-zinc-900 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2 md:text-xl'>Apply as a Brand
                    <GoArrowRight />
                </button>
    </div>
  )
}

export default Connect