import React from "react";
import Counter from "../components/Counter";

const Achievements = () => {
  return (
    <div className="bg-black gap-6 grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4 px-[15%] py-6 ">
    
        <div className="flex flex-col  gap-5">
          <div className="flex text-2xl md:text-4xl lg:text-5xl">
            <Counter maxNum={600}  />+
          </div>
          <hr className="w-[50px] h-[1.5px] bg-red-500" />
          <p className="text-xl md:text-2xl lg:text-3xl">Happy Customers</p>
      
        </div>
        <div className="flex flex-col gap-5">
        <div className="flex text-2xl md:text-4xl lg:text-5xl">
        <Counter maxNum={100} />%
        
        </div>
        <hr className="w-[50px] h-[1.5px] bg-red-500" />
        
        <p className="text-xl md:text-2xl lg:text-3xl">Satisfied Customers</p>
      </div>
        <div className="flex flex-col gap-5">
        <div className="flex text-2xl md:text-4xl lg:text-5xl">
        <Counter maxNum={350}  />+
           
        </div>
        <hr className="w-[50px] h-[1.5px] bg-red-500" />
          
          <p className="text-xl md:text-2xl lg:text-3xl">Total Projects</p>
        </div>
      
    
       
        <div className="flex flex-col gap-5">
        <div className="flex text-2xl md:text-4xl lg:text-5xl">
         <Counter maxNum={7} />
+            
        </div>
        
<hr className="w-[50px] h-[1.5px] bg-red-500" />
          
        
        <p className="text-xl md:text-2xl lg:text-3xl">Years Of Exp.</p>
        </div>
     
    </div>
    //
  );
};

export default Achievements;
