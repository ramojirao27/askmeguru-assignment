import React,{useState} from 'react'
import hero from '../assets/hero.png';
import { IoPlayCircle } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true); // On image click, display the video
  };
  return (

   
    <div className='flex flex-col  gap-10 lg:flex-row lg:items-center mx-10 my-20'>
        {showVideo && (
        <div className="mt-6 absolute z-30 ">
         <div className='flex items-start'>
         <iframe
            width="1024"
            height="600"
            src="https://youtu.be/gnyoUXgl74c?si=laE2oETi5vVhCRc_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div onClick={()=>setShowVideo(false )} className='bg-red-800 p-2 cursor-pointer'>
          <ImCross size={"20px"}/>

          </div>
         </div>
          
        </div>
      )}
            <div className='relative inline-block min-w-[431px]'>
                <img className='w-full ' src={hero} alt="" />
                <div onClick={()=>setShowVideo(true)} className='absolute inset-0 flex items-center justify-center text-red-500 cursor-pointer'><IoPlayCircle size={100}/></div>
            </div>
            <div className='mx-8 flex flex-col gap-10'>
                <h1 className='text-5xl font-semibold'>
                    Leading Software Development Company In Hyderabad, India.
                </h1>
                <div className='text-gray-600'>
                    <p>
                    ASKMEGURU TECHNOLOGIES is the leading digital platform for all business firms across the world and an one stop automated solution for your trade and industry. ASKMEGURU TECHNOLOGIES began its business operation in bulk SMS and Digital Marketing solutions providing company in December 2013. On the public interest we have done our platform into all over Telangana state focusing exclusively in high quality and cost-effective software development and implementation of services. We are advancing on a tremendous pace and with involvement of 15 + skilled and experienced people working in the organization. Depending on the size and field of your organization, we have different products and services to meet your requirements. We provide the optimum and customized solutions made for your organization. ASKMEGURU is a leading provider of white label search & monetization solutions. We serve a network of more than 100 web publishers globally. Offering core search solutions as a proven means to monetize audience via a search based advertising revenue stream.
                    </p>
                </div>
            </div>

    </div>
  )
}

export default Hero