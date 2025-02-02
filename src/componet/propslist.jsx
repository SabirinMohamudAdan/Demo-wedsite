import React from 'react'
import img from "../assets/image/img1.webp"
import img1 from "../assets/image/img3.webp"
import img2 from "../assets/image/img4.webp"
import img3 from "../assets/image/img5.webp"

import Propcontent from './propcontent'

const  Propslist=()=> {
  return (
    <div className='grid grid-cols-4'>

        <Propcontent img1={img}  title="Web development"
         pra="Lorem ipsum dolor sit,amet"/>
         <Propcontent img1={img1}  title="Data sceince& Ai"
         pra="Lorem ipsum dolor sit,amet"/>
         <Propcontent img1={img2}  title="Data Engineering"
         pra="Lorem ipsum dolor sit,amet"/>
         <Propcontent img1={img3}  title="Data Analytics"
         pra="Lorem ipsum dolor sit,amet"/>
       
    </div>


  )
}

export default Propslist