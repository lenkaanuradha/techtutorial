import React from 'react'

export default function Newsletter() {
  return (
    <div className="bg-cyan-500 p-4">
        <div className=' max-w-[1240px] md:flex mx-auto justify-between py-[50px]'>
            <div className='m-2'>
        <div className=" text-white text-[20px] md:text-[40px]">Want to learn latest I.T. skills?</div>
        <span className=" text-white">
        Sign Up to our newsletter and stay up to date
        </span>
        </div>
        <div className='m-2'>
            <input type="text" className= 'p-3 mr-2 text-slate-600 rounded mb-2'placeholder='Email'/>
            <button className=' bg-black text-white rounded p-3'>Get Started</button>
            <br/>
            <p className='text-white'>We care about the protection of your data.Read our <br/><a href="#" className='text-black'>Privacy policy</a></p>
        </div>
        </div>
    </div>
  )
}
