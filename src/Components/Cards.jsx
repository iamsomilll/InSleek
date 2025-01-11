import React from 'react'
import Card from './Card'

function Cards() {
    const cardsData = [
        {
            serial:1,
            imgSrc: "/assests/swipe.png",
            heading :"Swipe Based Shopping",
            paragraph:"Swipe-Based Shopping for clothes lets users swipe right to like and left to skip items, just like Tinder. It makes browsing quick and fun!"
        },
        {
            serial:2,
            imgSrc: "/assests/AI.png",
            heading :"AI Power Recommendation",
            paragraph:"Swipe-Based Shopping for clothes lets users swipe right to like and left to skip items, just like Tinder. It makes browsing quick and fun!"
        },
        {
            serial:3,
            imgSrc: "/assests/Arrow.png",
            heading :"And Many More...",
            paragraph:"New Features Unlocking on the Launch Stay Tuned................."
        },
    ]
  return (
    <div className=' bg-zinc-900 h-fit w-screen flex flex-col items-center gap-6 py-10 md:flex-wrap md:flex-row justify-center'>
        {cardsData.map((card)=>(
            <Card
            key={card.serial}
            serial={card.serial}
            imgSrc={card.imgSrc}
            heading={card.heading}
            paragraph={card.paragraph}
            />
        ))}
    </div>
  )
}

export default Cards