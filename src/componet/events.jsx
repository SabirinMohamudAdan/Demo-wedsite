import React from 'react'
import img from "../assets/image/e1.webp"
import img1 from "../assets/image/e2.webp"
import img2 from "../assets/image/e3.webp"
import img3 from "../assets/image/e4.webp"
import img4 from "../assets/image/e5.webp"
import Footer from './footer'
import Header from './header'
function Events() {
  return (
    <div>
        <Header/>

<div className='bg-pink-300 w-[80%] h-[400px] rounded-md ml-32 mt-10 pt-20 pl-20'>
  <div className='bg-pink-100 w-[150px] h-[30px] rounded-2xl px-6 pt-1 text-red-500 '>
    <i class="fa-regular fa-circle-dot mr-2 "></i>Live events</div>
  <div>
<h1>Explore our live events, <br></br>talks and free workshops</h1>

<p>Jump into a free workshop on UX design or data<br></br> analytics,
   attend our students' demo days or join us for<br></br> an interactive
   info session and find out more about Le<br></br> Wagon.</p>
  </div>
</div>





    <div className='pt-20 pb-20 ml-40'>
      {/* main-div */}
   <div className='flex gap-20 '>
    {/* left-section */}
    <div>
     <h1 className='text-4xl font-bold'>Filters</h1>
     <p className='text-gray-400 mt-4'>Topic</p>
    
      <select className='text-gray-300 bg-transparent  border-1
   border-purple-200  px-6 py-1 mt-3 outline-none'>
  <option  className='
   '  value="" >Select</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<hr className='w-[140px] mt-6 text-purple-300 shadow-lg  ' />

<h1 className='mt-3 text-2xl'>Type</h1>
<div className='mt-4'>
<label >
    <input type="radio" name="options" value="option1" className='mr-4' />
    All
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option2" className='mr-4' />
    Online
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option3" className='mr-4' />
   On-site
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option4" className='mr-4' />
   Replay
  </label>
  <hr className='w-[140px] mt-6 text-purple-300 shadow-lg  ' />
</div>



<h1 className='mt-3 text-2xl'>Language</h1>
<div className='mt-4'>
<label >
    <input type="radio" name="options" value="option1" className='mr-4' />
    All
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option2" className='mr-4' />
    English
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option3" className='mr-4' />
   Somali
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option4" className='mr-4' />
   Franch
  </label><br></br>

  <label>
    <input type="radio" name="options" value="option4" className='mr-4' />
   Spanish
  </label><br></br>
  <label>
    <input type="radio" name="options" value="option4" className='mr-4' />
   German
  </label>
  <hr className='w-[140px] mt-6 text-purple-300 shadow-lg  ' />
</div>
    </div>

    {/* right-section */}
    <div>
  <h1 className='text-4xl font-bold'>Events that match your search</h1>
  <hr  className='text-purple-300  w-[500px] mt-4'/>
  <div>
    <h1 className='mt-6 text-3xl font-bold'>Categories</h1>
    <div className='flex gap-10 mt-8'>
        <button className='  hover:text-purple-400'>All</button>
        <button>Workshop</button>
        <button>Talk</button>
        <button>infor session</button>
        <button>Demo Day</button>
    </div>
    {/* section-box */}
    <div className='flex gap-6
       w-[950px] h-[250px] border-1 rounded-md border-purple-300 mt-10 px-2'>
        {/* leftside */}
    <div className='mt-10 '>
 <img src={img} alt="" className='w-[250px] h-[120px] rounded-lg ' />
    </div>
    {/* rightside */}
    <div className='mt-10'>
  <h1 className='text-purple-400'>Info session</h1>
  <p className='mt-3'>How to finance your bootcamp with an <br></br>interest-free loan</p>
  <p className='text-red-500 mt-2'>Tue, February 4 • 12:00 pm 
    (Europe/AmsterdamTime)</p>
  <h5 className=' text-gray-400 mt-2 '>online</h5>
    </div>
    <div>

    <button className='bg-purple-500 text-white px-12 py-4  mt-20 ml-6 rounded-lg 
    '>Register now</button>
    </div>
    
    </div>

    {/* ----------------- */}
    <div className='flex gap-6
       w-[950px] h-[250px] border-1 rounded-md border-purple-300 mt-10 px-2'>
        {/* leftside */}
    <div className='mt-10 '>
 <img src={img1} alt="" className='w-[250px] h-[120px] rounded-lg ' />
    </div>
    {/* rightside */}
    <div className='mt-10'>
  <h1 className='text-purple-400'>Info session</h1>
  <p className='mt-3'>How to finance your bootcamp with an <br></br>interest-free loan</p>
  <p className='text-red-500 mt-2'>Tue, February 4 • 12:00 pm 
    (Europe/AmsterdamTime)</p>
  <h5 className=' text-gray-400 mt-2 '>online</h5>
    </div>
    <div>

    <button className='bg-purple-500 text-white px-12 py-4  mt-20 ml-6 rounded-lg 
    '>Register now</button>
    </div>
    
    </div>
{/* 
    ------------------- */}

<div className='flex gap-6
       w-[950px] h-[250px] border-1 rounded-md border-purple-300 mt-10 px-2'>
        {/* leftside */}
    <div className='mt-10 '>
 <img src={img2} alt="" className='w-[250px] h-[120px] rounded-lg ' />
    </div>
    {/* rightside */}
    <div className='mt-10'>
  <h1 className='text-purple-400'>Info session</h1>
  <p className='mt-3'>How to finance your bootcamp with an <br></br>interest-free loan</p>
  <p className='text-red-500 mt-2'>Tue, February 4 • 12:00 pm 
    (Europe/AmsterdamTime)</p>
  <h5 className=' text-gray-400 mt-2 '>online</h5>
    </div>
    <div>

    <button className='bg-purple-500 text-white px-12 py-4  mt-20 ml-6 rounded-lg 
    '>Register now</button>
    </div>
    
    </div>


    {/* ----------------- */}

    <div className='flex gap-6
       w-[950px] h-[250px] border-1 rounded-md border-purple-300 mt-10 px-2'>
        {/* leftside */}
    <div className='mt-10 '>
 <img src={img3} alt="" className='w-[250px] h-[120px] rounded-lg ' />
    </div>
    {/* rightside */}
    <div className='mt-10'>
  <h1 className='text-purple-400'>Info session</h1>
  <p className='mt-3'>How to finance your bootcamp with an <br></br>interest-free loan</p>
  <p className='text-red-500 mt-2'>Tue, February 4 • 12:00 pm 
    (Europe/AmsterdamTime)</p>
  <h5 className=' text-gray-400 mt-2 '>online</h5>
    </div>
    <div>

    <button className='bg-purple-500 text-white px-12 py-4  mt-20 ml-6 rounded-lg 
    '>Register now</button>
    </div>
    
    </div>
    {/* ------------------------- */}

    <div className='flex gap-6
       w-[950px] h-[250px] border-1 rounded-md border-purple-300 mt-10 px-2'>
        {/* leftside */}
    <div className='mt-10 '>
 <img src={img4} alt="" className='w-[250px] h-[120px] rounded-lg ' />
    </div>
    {/* rightside */}
    <div className='mt-10'>
  <h1 className='text-purple-400'>Info session</h1>
  <p className='mt-3'>How to finance your bootcamp with an <br></br>interest-free loan</p>
  <p className='text-red-500 mt-2'>Tue, February 4 • 12:00 pm 
    (Europe/AmsterdamTime)</p>
  <h5 className=' text-gray-400 mt-2 '>online</h5>
    </div>
    <div>

    <button className='bg-purple-500 text-white px-12 py-4  mt-20 ml-6 rounded-lg 
    '>Register now</button>
    </div>
    
    </div>
  </div>
    </div>
   </div>


    </div>
    <Footer/>
</div>
  )
}

export default Events