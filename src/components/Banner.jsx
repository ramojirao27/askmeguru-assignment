import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import banner from '../assets/banner.jpg'


const Banner = () => {
  return (


    <div  className={`bg-[url(${banner})] bg-cover  bg-center w-full h-[147px] bg-gradient-to-r from-black to-blue-800 text-white flex flex-col items-center justify-center sm:flex-row sm:justify-around`} >
        <h1 className='text-xl font-medium md:text-3xl'>Who Are We</h1>
        <div className='flex gap-3'>
            <div className='flex items-center gap-2 hover:text-red-600'>
            <div className='text-red-600'>
                 <FaHome size={20}/>
            </div>
                <p className='font-medium'>Home</p>
            </div>
            <div className='flex items-center gap-2 hover:text-red-600'>
            <div className=''>
              <IoIosArrowDroprightCircle size={20}/>
            </div>
                <p className='font-medium'>Home</p>
            </div>
            
            
        </div>
        
    </div>
    
    
  )
}

export default Banner