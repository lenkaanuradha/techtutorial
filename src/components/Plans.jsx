import React from 'react'
import {RiContactsLine} from "react-icons/ri";
export default function Plans() {
  return (
    <div className="py-[100px] mx-2">
    <div className="bg-slate-50 w-[1240px]  mx-auto   md:grid grid-cols-3 gap-6 text-center">
      <div className=" shadow-xl my-6  h-[500px] col-span-1 hover:scale-105 duration-500 p-[20px]">
      <RiContactsLine className=" text-green-400 text-7xl "/>
   <h1 className='font-bold text-3xl mb-[30px]'>Web Development</h1>
   <span className='font-bold text-2xl '>$149</span>
   <p className='mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. . <br/> Voluptatum magni animi earum rerum ex provident?</p>
   <button className=' bg-green-600 text-white rounded p-3 mt-[50px]'>Start trial</button>
      </div>
      <div className=" shadow-xl my-6 bg-gray-100 h-[500px] col-span-1 hover:scale-105 duration-500 p-[20px]">
      <RiContactsLine className=" text-green-400 text-7xl"/>
      <h1 className='font-bold text-3xl mb-[30px]'>Digital Marketing</h1>
      <span className="font-bold text-2xl">$149</span>
      <p className='mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Voluptatum magni animi earum rerum ex provident?</p>
      <button className=' bg-black text-white rounded p-3 mt-[50px]'>Start trial</button>
      </div>
      <div className=" shadow-xl my-6  h-[500px] col-span-1 hover:scale-105 duration-500 p-[20px]">
        <RiContactsLine className=" text-green-400 text-7xl"/>
      <h1 className='font-bold text-3xl mb-[30px]'>Ethical Hacking</h1>
      <span className="font-bold text-2xl">$149</span>
      <p className='mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit..<br/>  Voluptatum magni animi earum rerum ex provident?</p>
      <button className=' bg-green-600 text-white rounded p-3 mt-[50px]'>Start trial</button>
      </div>
    </div>
    </div>
  )
}
