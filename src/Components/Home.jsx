import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Home() {
  return (
    <div className=' bg-zinc-900 h-screen w-screen flex justify-center items-center flex-col font-Clash gap-4 relative overflow-hidden'>
      <h1 className='  text-white text-center uppercase text-4xl font-medium leading-none tracking-none md:text-5xl lg:text-7xl'>Can't find what <br /> you're looking for?</h1>
      <h2 className=' text-white text-center text-sm hidden md:block lg:text-xl'>Say goodbye to endless scrolling on traditional fashion sites. With InSleek, finding your perfect outfit is effortless. <br /> Just swipe left or right fun, fast, and completely tailored for you!</h2>
      <button className=' bg-white text-black px-4 py-2 rounded-full flex justify-center items-center gap-2 md:text-xl'>Join the waitlist
        <GoArrowRight />
      </button>
      <div className="absolute top-10 left-72 rotate-12 md:left-[70%] md:top-10 lg:left-[70%] lg:top-20 animate-float">
  <img src="./assests/Cone.png" alt="" />
</div>
<div className="absolute bottom-10 right-72 rotate-[70deg] md:right-[70%] md:bottom-10 lg:right-[70%] lg:bottom-20 animate-float">
  <img src="./assests/Cone.png" alt="" />
</div>

    </div>
  )
}

export default Home