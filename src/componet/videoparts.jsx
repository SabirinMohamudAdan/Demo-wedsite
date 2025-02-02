import React from 'react'
import viedo from "../assets/image/v1.mp4"
import viedo1 from "../assets/image/v2.mp4"
import viedo2 from "../assets/image/v3.mp4"
function Videoparts() {
  return (
    <div>
<div className='bg-pink-200  w-[90%] h-[800px]
 mt-20 ml-20 mr-20 rounded-xl pt-10'>

   <h1 className='text-pink-400 text-xl text-center'> Student stories</h1>
   <p className='text-5xl  text-black font-bold mt-6 text-center '>They joined our bootcamps<br></br>
   to change their lives.</p>
  <div className='flex gap-3 mr-40'>
<div className='pt-20 '>
    <iframe src={viedo} frameborder="0" className='w-[400px]
     h-[400px] rounded-xl'></iframe>
    {/* <video src={viedo}></video> */}
     </div>
     <div className='pt-20 '>
    <iframe src={viedo1} frameborder="0" className='w-[400px]
     h-[400px] rounded-xl'></iframe>
    {/* <video src={viedo}></video> */}
     </div>
     <div className='pt-20 '>
    <iframe src={viedo2} frameborder="0" className='w-[400px]
     h-[400px] rounded-xl'></iframe>
    {/* <video src={viedo}></video> */}
     </div>
     </div>
     <button className='bg-transparent  border border-purple-500 px-6 py-2 text-white
      hover:bg-purple-500 rounded-md mt-10  ml-120'>See more stories <i class="fa-solid fa-arrow-right"></i></button>

</div>


    </div>
  )
}

export default Videoparts