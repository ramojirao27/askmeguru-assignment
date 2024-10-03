import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import footer from '../assets/footer.jpg'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col lg:flex-row lg:justify-between mx-16 gap-10'>
                <div className='flex flex-col gap-5'>
                    <img className='w-[15rem]' src={logo} alt="" />
                    <p >Software constraints are only confining if you use them for what they're intended to be used for.</p>
                </div>
                <div className='flex flex-col w-full lg:w-1/3'>
                  <h1 className='font-semibold'> Featured Cities</h1>
                    <div className='grid grid-cols-2 text-slate-400'>
                    <p className='flex gap-1 items-center'><span className='text-red-500'><IoMdArrowDropright size={"20px"}/></span>Home</p>
                    <p className='flex gap-1 items-center'><span className='text-red-500'><IoMdArrowDropright size={"20px"}/></span>Contact Us</p>
                    <p className='flex gap-1 items-center'><span className='text-red-500'><IoMdArrowDropright size={"20px"}/></span>About Us</p>
                    <p className='flex gap-1 items-center'><span className='text-red-500'><IoMdArrowDropright size={"20px"}/></span>Privacy Policy</p>
                    </div>

                </div>
                <div className='flex flex-col text-center gap-4 w-full lg:w-1/3'>
                    <h1 className='font-semibold'>Our Newsletter</h1>
                    <input className='bg-slate-100 rounded-full text-center py-2  text-sm' type="text " placeholder='Enter your email' />
                    <button className='bg-red-600 hover:bg-slate-800 text-sm font-semibold text-white rounded-full text-center py-2'>SUBSCRIBE NOW</button>
                </div>
        </div> 
        <div class="relative">
             <img src={footer} alt="Image" class="w-full h-[7rem]"/>

            <div class="absolute inset-0 flex flex-row items-center gap-4  mx-10 ">
              <div className='bg-[#4460A1] text-white p-2 flex text-center rounded-full'>
              <FaFacebookF size={"25px"}/>
              </div> 
              <div className='bg-[#34bce6] text-white p-2 rounded-full flex item-center'>
              <FaTwitter size={"25px"}/>
                   
              </div>
              <div className='bg-[#095C91] text-white p-2 rounded-full flex item-center'>
              <FaLinkedinIn size={"25px"}/>
              
              </div>
              <p >Copyright &copy; Askmeguru Technologies. All Rights Reserved</p>
            </div>
           
</div>

    </div>
  )
}

export default Footer