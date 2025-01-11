import React from 'react'

function Card({serial,imgSrc,heading,paragraph}) {
  return (
    <div className='bg-[#E4D1FA] h-[64vh] max-w-[350px] rounded-md flex flex-col justify-start items-start overflow-hidden font-Clash p-4 gap-2'>
        <div className=' h-8 w-8 flex justify-center items-center rounded-full bg-zinc-900 text-white'>
            {serial}
        </div>
        <div className=' h-64 w-full over flex justify-center items-center' ><img className='w-[60%] h-[60%] object-contain' src={imgSrc} alt="" /></div>
        <h1 className=' text-black text-xl font-semibold'>{heading}</h1>
        <p className=' text-black'>{paragraph}</p>
    </div>
  )
}

export default Card