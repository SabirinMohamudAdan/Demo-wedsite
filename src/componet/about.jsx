import React from 'react'
import img from "../assets/image/img5.webp"
import img1 from "../assets/image/img6.webp"
import img2 from "../assets/image/img7.webp"
function About() {
  return (
    <div className='bg-purple-800 w-full h-[100%] mt-20 pt-10 pb-20'>

    <h1 className='text-white text-center  text-3xl'>why LE WAGON</h1>
    <p className='text-5xl text-center mt-4
       text-white font-bold'>Learn with supportive teachers
        <br></br>and change your career in a few<br></br> months</p>
       <div className='text-white  mt-20 flex gap-40 justify-center'>
        {/* leftside */}
        <div>
     <h1 className='text-3xl font-bold '>Get solid foundations by <br></br>working on real-world<br>
     </br> projects</h1>
     <p className='text-md mt-6'>Join courses developed with industry experts and <br></br>practice on hands-on projects to get actionable <br></br>skills. Develop a standout portfolio to be ready for<br></br> your job search.</p>
        </div>
       
        {/* rightside */}
        <div>
  <img src={img} alt=""  className='w-[400px] h-[350px] rounded-xl mt-[-30px]'/>
        </div>
        </div>



{/* another-section */}


<div className='text-white  mt-20 flex gap-40 justify-center'>
        {/* leftside */}

        <div>
  <img src={img1} alt=""  className='w-[400px] h-[350px] rounded-xl mt-[-30px]'/>
        </div>

           {/* rightside */}
        <div>
     <h1 className='text-3xl font-bold '>Learn from industry experts<br></br>
     who will spend time with<br></br> you
     </h1>
     <p className='text-md mt-6'>
     Forget self-paced courses or 30-min mentoring<br></br>
      sessions. Get real teachers who care about your<br></br> progress
      and are here to help you when you need<br></br> it.</p>

      <p  className='text-md mt-6'>
        
You can join Le Wagon on-site, on 40 campuses, <br></br>
or online. If you choose the online format, 
you will<br></br> live an immersive experience with lots of live <br></br>sessions
 and interactions with teachers and<br></br> peers.
      </p>
        </div>
       
     
     
        </div>

        {/* thirdsection */}

        <div className='text-white  mt-20 flex gap-40 justify-center'>
        {/* leftside */}
        <div>
     <h1 className='text-3xl font-bold '>Benefit from career support<br></br> and 1:1 coaching</h1>
     <p className='text-md mt-6'>Our career services will prepare you
         to land a job <br></br>in tech through personal coaching, job fairs, 
        and a<br></br> network of 1000+ hiring partners..</p>
        </div>
       
        {/* rightside */}
        <div>
  <img src={img2} alt=""  className='w-[400px] h-[350px] rounded-xl mt-[-30px]'/>
        </div>
        </div>
    </div>
  )
}

export default About