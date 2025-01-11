import React, { useEffect } from 'react'
import Home from './Components/Home'
import Launch from './Components/Launch'
import Cards from './Components/Cards'
import Connect from './Components/Connect'
import Footer from './Components/Footer'
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust for smoothness
      smooth: true,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf); 
  });
  return (
    <>
    <Home></Home>
    <Launch></Launch>
    <Cards></Cards>
    <Connect></Connect>
    <Footer></Footer>
    </>
  )
}

export default App