import { Power2 } from 'gsap';
import React, { useEffect, useRef } from 'react'
import "./Home.css"
import Slide from "./Slide"
const Home = ({timeline}) => {

  const imgref=useRef();

  useEffect(()=>{
    timeline.from(imgref.current,{
      opacity:0,
      duration:0.7,
      ease:Power2.easeIn
    },"-=3")

  })

  return (
    <div>
      <img src="https://www.flawwears.com/Uploads/SayfaTasarim/Sayfa3/flaw-atelier-8173.jpg" ref={imgref} alt="" />
      <div className="e">
        <h1>Best Sellers</h1>
        <Slide/>
      </div>

    </div>
  )
}

export default Home