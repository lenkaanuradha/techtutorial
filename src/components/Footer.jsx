import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
export default function Footer() {
  return (
    <div className='bg-cyan-500 w-[100%]  md:grid grid-cols-2 justify-between'>
       
        <div className=' w-[80%] h-[400px] col-span-1 m-[20px] pt-[20px] '>
            <h1 className="text-black text-3xl  m-[20px]">TechWorld</h1>
            <p className='text-white m-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ut alias <br/>exercitationem temporibus, reiciendis consectetur nobis in e
                 labore adipisci soluta ea!</p>
                
        </div>

        <div className='h-[400px] col-span-1 m-[20px] pt-[20px] '>
            <h1 className="text-black text-3xl  m-[20px]">About Us</h1>
            <p className='text-white m-[20px]'>Lorem ipsum dolor sit amet consectetur, <br/>adipisicing elit. Veniam ut alias <br/>exercitationem temporibus, reiciendis consectetur nobis in e
                 labore adipisci soluta ea! nem veniam tempora iusto. Illo doloremque quibusdam ratione praesentium veritatis.</p>
                 <div className='text-white text-2xl flex mt-[100px] gap-5 ml-[30px]'>
                <AiOutlineTwitter />
                  <BsFacebook      />
                  <AiFillInstagram />
                    </div> 
        </div>
        </div>
  )
}
