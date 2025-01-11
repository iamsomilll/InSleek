import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Footer() {
  return (
    <div className=' h-screen w-screen bg-zinc-900 font-Clash'>
        <div className=' h-[90%] w-full flex flex-col justify-center items-center md:flex-wrap md:flex-row md:gap-4'>
        <h1 className='  text-[#E9B8FF] text-left uppercase text-4xl font-semibold leading-none tracking-wide md:text-5xl lg:text-7xl'>join the<br/>new wave of<br />indian fashion! </h1>
        <div className=' h-24 w-80 flex justify-end items-center md:justify-start'>
            <div className=' h-20 w-20 rounded-full bg-[#E9B8FF] flex justify-center items-center md:h-32 md:w-32'>
            <GoArrowUpRight className='text-4xl md:text-6xl transition-transform duration-300 hover:rotate-45 ease-in-out' />

            </div>
        </div>
        </div>
        <div className=' h-[10%] w-full flex justify-center items-center'>
            <h1 className='text-[#7E7E7E] uppercase '>InSleek © 2024. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer