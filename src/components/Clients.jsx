import React from 'react'
import SlideImage from './SlideImage'

const Clients = () => {
  return (
    <div className='flex flex-col  text-center my-8 gap-4'>
     <p className='text-5xl '>our<span className='font-medium ml-2'>Clients</span></p>
     <p className='text-gray-700'>Some of our clients taken software solution from us</p>
     <hr  className=' mx-auto w-[50px] h-[2.5px] bg-red-500 '/>
     <div className='mx-20 my-5'>
      <SlideImage/>
     </div>
    
    </div>
  )
}

export default Clients