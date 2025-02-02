import React from 'react'
// import img1 from "../assets/image/img1.webp"
const Propcontent=(props)=> {
  return (
    <div className='flex gap-20 mt-20'>

        <div className='bg-white w-[300px] h-[300px]  pt-2 px-6 ml-6 rounded-md' >
        <div>
            <img src={props.img1} alt=""  className='w-[250px] h-[200px] rounded-md' />
       
   
          <h1 className='text-2xl font-bold  ml-3'> {props.title}</h1>
          <p className='text-gray-400 ml-3'>{props.pra}
        
            </p>
            <button className='bg-transparent border border-purple-600
             px-6 py-2 rounded text-purple-600 mt-3 ml-6  hover:bg-purple-400'>Learn Web Development</button>
        </div>
        </div>

        {/* <div className='bg-white w-[300px] h-[300px]  pt-2 px-6 ml-6 rounded-md' >
        <div>
            <img src={img1} alt=""  className='w-[250px] h-[200px] rounded-md' />
       
   
          <h1 className='text-2xl font-bold '> Web development</h1>
          <p className='text-gray-400'>Lorem ipsum dolor sit,amet
        
            </p>
            <button className='bg-purple-800 px-3 py-2 rounded text-white'>Learn Web Development</button>
        </div>
        </div> */}
    </div>
  )
}

export default Propcontent