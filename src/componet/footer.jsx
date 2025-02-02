import React from 'react'
import img from "../assets/image/icon1.svg"

import img1 from "../assets/image/icon2.svg"
import img2 from "../assets/image/icon3.svg"
import img3 from "../assets/image/sicon1.svg"
import img4 from "../assets/image/sicon2.svg"
import img5 from "../assets/image/sicon3.svg"
import img6 from "../assets/image/sicon4.svg"
import img7 from "../assets/image/sicon5.svg"

function Footer() {
  return (
    <div className='bg-purple-800 px-20 pt-20 mt-20 pb-20'>

        <div className='flex gap-[80px]'>
            <div>
                <ul className='text-white  '>
                <h1 className='text-white text-xl'>ABOUT Us</h1>
                <li className='hover:text-gray-300 mt-1'>FAQ
                  </li>
                <li className='hover:text-gray-300 mt-1'>About Le Wagon</li>
                <li className='hover:text-gray-300 mt-1'>Press</li>
                <li className='hover:text-gray-300 mt-1'>Join Us</li>
                <li className='hover:text-gray-300 mt-1'>Contact Us</li>
                <li className='hover:text-gray-300 mt-1'>Privecy Policy</li>
                <li className='hover:text-gray-300 mt-1'>Legal noyice</li>
                </ul>
            </div>


            <div>
                <ul className='text-white  '>
                <h1 className='text-white text-xl'>RESOURCES</h1>
                <li className='hover:text-gray-300'>Next session
                   </li>
                <li className='hover:text-gray-300 mt-1'>Block 
                    </li>
                <li className='hover:text-gray-300 mt-1'>Free workshopping</li>
                <li className='hover:text-gray-300 mt-1'>Career Services</li>
                <li className='hover:text-gray-300 mt-1'>All Careers in Web devlopment</li>
                <li className='hover:text-gray-300 mt-1'>All Careers in Data sceince & Ai</li>
               
                </ul>
            </div>

            <div>
                <ul className='text-white  '>
                <h1 className='text-white text-xl'>CORPORATE</h1>
                <li className='hover:text-gray-300 mt-1'>Le wagon for business
                    </li>
                <li className='hover:text-gray-300 mt-1'>Hiring Partners
                    </li>
                <li className='hover:text-gray-300 mt-1'>Schools</li>
             
               
                </ul>
            </div>

            <div>
                <h1 className='text-white text-xl'>Explore our free courses</h1>

                <div className='text-orange-400 flex gap-6 mt-10 '>
                {/* <i class="fa-brands fa-python"></i> */}
                <img src={img} alt=""  className='w-[30px] h-[30px]'/>
                <img src={img1} alt=""  className='w-[30px] h-[30px]'/>
                <img src={img2} alt=""  className='w-[30px] h-[30px]'/>
               
                </div>
                <p className='text-white mt-6'>Get access to over 200 hours of expertly curated content.</p>
                <button className=' bg-purple-600 text-white rounded-md 
                  px-4 py-2  mt-6 hover:text-gray-300'>StartNow!<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        <hr  className='w-full text-white mt-10'/>
        <div className='flex justify-between pt-10'>
        <div className=''>
            <p className='text-white'>© 2025 Le Wagon, Inc. All rights reserved. </p>
        </div>
        <div className='flex gap-6'>
        {/* <i class="fa-brands fa-linkedin  text-purple-500    
            rounded-full px-3 py-2 bg-transparent "></i> */}
            <img src={img3} alt="" className='w-10 h-6' />
            <img src={img4} alt="" className='w-10 h-6' />
            <img src={img5} alt="" className='w-10 h-6' />
            <img src={img6} alt="" className='w-10 h-6' />
            <img src={img7} alt="" className='w-10 h-6' />
        </div>
        </div>

    </div>
  )
}

export default Footer