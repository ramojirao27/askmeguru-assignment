import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
<div className='shadow-lg sticky top-0 z-20 flex flex-col bg-blue-800 text-white lg:text-black lg:bg-white px-4'>
<div className='flex  items-center justify-between lg:justify-normal   w-full h-[90px]'>
        <img className="mr-36"src={logo} alt="" />
        
        <div className='hidden lg:block'>
                <ul className='flex gap-7   font-bold'>
                    <li className='hover:text-red-500 cursor-pointer'>Home</li>
                    <li className='hover:text-red-500 cursor-pointer'>About Us</li>
                    <li className='hover:text-red-500 cursor-pointer'>Services</li>
                    <li className='hover:text-red-500 cursor-pointer'>Contact</li>
                    <li className='hover:text-red-500 cursor-pointer'>Login</li>
                </ul>
        </div>
        <div onClick={()=>setShowMenu(!showMenu)} className='lg:hidden mx-4 '>
           {showMenu?<ImCross size={"20px"}/>:<IoMdMenu size={35}/>}
            
        </div>  
    </div>
    {showMenu &&
    <div className='w-full lg:none'>
    <ul className='flex flex-col gap-4 p-4 font-bold'>
                    <li className=' hover:text-red-500 cursor-pointer  border-slate-50'>Home</li>
                    <hr className='bg-slate-400'/>
                    <li className=' hover:text-red-500 cursor-pointer  border-slate-50'>About Us</li>
                    <hr className='bg-slate-400'/>
                    <li className=' hover:text-red-500 cursor-pointer  borde-slate-100'>Services</li>
                    <hr className='bg-slate-400'/>
                    <li className=' hover:text-red-500 cursor-pointer   border-slate-50'>Contact</li>
                    <hr className='bg-slate-400'/>
                    <li className=' hover:text-red-500 cursor-pointer   border-slate-50'>Login</li>
                </ul>

    </div>}
</div>
  )
}

export default Navbar