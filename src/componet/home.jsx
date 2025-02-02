import React from 'react'
import img from "../assets/image/bg1.webp"
function Home() {
  return (
    <div className='mt-20'>

         {/* section two*/}

    <div className='absolute  '>
        <img className=' w-[100%] h-[90vh] ml-10 rounded-3xl' src={img} alt="" />
    </div>
    <div className='relative top-20 ml-20 '>
        <h1 className='bg-gray-300 mb-7 w-[450px] p-3 rounded-4xl'>🚀 1st-ranked bootcamp in the world for 6,000+ reviews</h1>
        <h1 className='text-5xl pb-7 w-[500px] font-extrabold text-white'>Build your future. Learn Tech & AI.</h1>
        <p className='text-white w-[500px] text-2xl pb-5'>Join our immersive courses in web development, data and AI to transform your career and access new opportunities.</p>
        <button className='bg-purple-600 text-white px-9 py-5 text-2xl rounded-2xl'>Browse Courses</button>
        <h1 className='ml-[70%] text-white'>Daniella, KaFia Software Engineer</h1>
    </div>
    </div>
  )
}

export default Home