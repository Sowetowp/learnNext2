"use client";
import React, { useState } from 'react'

const CaseStudies = () => {
  const [preview, setPreview] = useState("")
  const works = [
    { img: "/img_2.jpg" },
    { img: "/img_4.jpg" },
    { img: "/img_6.jpg" },
    { img: "/img_7.jpg" },
    { img: "/img_10.jpg" },
    { img: "/img_12.jpg" }
  ]
  return (
    <>
      <section className='w-full max-w-7xl m-auto bg-white py-24'>
        <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our case studies</h2>
        <p className='mt-7 m-auto text-[0.9rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <div className='flex flex-wrap mt-11 justify-center items-center gap-5'>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">ALL</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">LOGO</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">GRAPHIC</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">PRINT</a>
        </div>
        <div className='w-full px-10 flex flex-wrap'>
          {works.map((work, index) => (
            <div onClick={()=>setPreview(work.img)} key={index} className='xl:w-1/3 cursor-pointer md:w-1/2 w-full mt-14 px-3'>
              <div className='w-full h-64 overflow-hidden'>
                <img className='w-full object-cover h-full hover:h-[80%] transition-all duration-500' src={work.img} alt="" />
                <p className='h-[20%] bg-blue-700 px-4 flex items-center text-lg text-white'>Lightbox</p>
              </div>
            </div>
          ))}
        </div>
        <div className='hidden fixe top-0 w-full h-screen bg-[#0000003a] z-[99999]'>
          <div className='flex items-center justify-center w-full h-full'>
            <img className='w-full md:w-[50%]' src="/img_2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies