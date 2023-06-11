import React,{useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
export default function Header() {
    const[toggle,setToggle]=useState(false);
  return (
    <div className="bg-cyan-500 p-4">
        <div className="max-w-[1240px] py-[12px] flex justify-between items-center  mx-auto">
            <div className="text-3xl ">TechWorld</div>
            {
                toggle?<AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>:<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
            <div>
            
            
                <ul className=" hidden md:flex gap-10 text-white">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen  gap-10  bg-black text-white fixed top-[92px] ${toggle?'left-[0]':'left-[-100%]'}`}>
                    <li className="p-5">Home</li>
                    <li className="p-5">Company</li>
                    <li className="p-5">Resources</li>
                    <li className="p-5">About</li>
                    <li className="p-5">Contact</li>
                </ul>
            </div>
        </div>
         
    </div>
  )
}
