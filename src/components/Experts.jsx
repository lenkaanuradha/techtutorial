import React from 'react'
import img from '../assets/images/img.jpg'
export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto bg-white  my-10 md:grid grid-cols-2'>
      <div className=' col-span-1 md:w-[80%]'>
      <img src={img} alt="" className="inline"/>
      </div>
      <div className='col-span-1 md:flex flex-col justify-center'>
        <h1 className="text-[#5ac85a] text-2xl font-bold my-2">Learn from Experts</h1>
        <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus quae. Reiciendis eum magni aliquam labore alias sunt, cumque, accusantium, eos ratione ducimus at? Perferendis dolorum, quae veniam omnis natus repudiandae impedit.</p>
        <button className='w-[20%] bg-black text-white rounded p-3'>Get Started</button>
      </div>

    </div>
  )
}
