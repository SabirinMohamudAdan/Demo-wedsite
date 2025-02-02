import React from 'react'
import Slides from './slides'
import img from "../assets/image/slideimg4.webp"
import img1 from "../assets/image/slideimg3.webp"
import img2 from "../assets/image/slideimg2.webp"
import img3 from "../assets/image/slideimg1.webp"
import icon1 from "../assets/image/slideicon1.webp"
import icon2 from "../assets/image/slideicon5.webp"
import icon3 from "../assets/image/slideicon4.webp"
import icon4 from "../assets/image/slideicon3.webp"
function Slideprops() {
  return (
    <div className='grid grid-cols-4 gap-8'>


        <Slides  img={img} name="Sabirinaa"  title="senior Web Develper " 
        work="Freelancer" imgicon={icon1}/>
         <Slides  img={img1} name="Akram"  title="staf interaction Designer " 
        work="Google" imgicon={icon2}/>
         <Slides  img={img2} name="Kafia"  title="senior Web Develper " 
        work="shopify" imgicon={icon3}/>
         <Slides  img={img3} name="Maahir"  title="Data science  " 
        work="Capegamini" imgicon={icon4}/>
    </div>
  )
}

export default Slideprops