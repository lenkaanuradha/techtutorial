import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className="bg-cyan-500 w-full py-[50px]">
        <div className="max-w-[1240] my-[90px] text-center mx-auto">
      <div className="text-black text-xl md:text-5xl md:p-[24px] ">
        Learn with us
      </div>
      <div className="text-white text-5xl md:text-[80px] mt-4 md:p-[20]">
        Grow with us
      </div>
      <div className="text-[20px] text-white md:text-[50px] md:p-[24px]">
        Learn {" "}
                   <Typed
                   className='pl-20px'
                    strings={['Web Development','Ethical Hacking','Digital Marketing']}
                    typeSpeed={60}
                    loop={true}
                    backspeed={70}
                   />
                   
      </div>
      <button className='md:w-[10%] w-[20%] bg-black text-white rounded p-3'>Get Started</button>
      </div>
    </div>
  )
}
