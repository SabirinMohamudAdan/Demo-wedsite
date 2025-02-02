import React from 'react'
import img from "../assets/image/slideimg4.webp"

function Slides(props) {
  return (
    <div className='mt-20'>
        <div className='ml-8 pl-6'>
            <div className=' relative pt-2'>
                <img src={props.img} alt="" className='w-[250px] h-[250px] rounded-xl' />
                <h1 className='text-blackte  text-3xl   font-bold mt-4 '>{props.name}</h1>
                <p className='text-gray-400 mt-4'> {props.title}<br></br>
                {props.work}<a href="" className='text-purple-500'>--in</a> </p>
                <div className='bg-white w-[50px] h-[50px] rounded-lg 
                top-[220px] absolute left-[180px]'>
                <img src={props.imgicon} alt=""  className=' absolute top-[10px]
                 left-[10px] w-[30px] h-[30px]'/>
                 </div>
            </div>  

        </div>



    </div>
  )
}

export default Slides