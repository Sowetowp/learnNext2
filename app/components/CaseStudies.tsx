"use client";
import React, { useState } from 'react'

const CaseStudies = () => {
  const [preview, setPreview] = useState("")
  const [works, setWorks] = useState([])
  const worksData = [
    { img: "/img_2.jpg", id: "1" },
    { img: "/img_4.jpg", id: "2" },
    { img: "/img_6.jpg", id: "3" },
    { img: "/img_7.jpg", id: "1" },
    { img: "/img_10.jpg", id: "2" },
    { img: "/img_12.jpg", id: "3" }
  ]
  const filter = (id: number) => {
    let filtered: Object = worksData.filter((fil:Object) => fil.id: number === id)
    setWorks(filtered)
  }
  return (
    <>
      <section id='sec6' className='w-full max-w-7xl m-auto bg-white py-24'>
        <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our case studies</h2>
        <p className='mt-7 m-auto text-[0.9rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <div className='flex flex-wrap mt-11 justify-center items-center gap-5'>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">ALL</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">LOGO</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">GRAPHIC</a>
          <a className='font-medium hover:text-[#1d4ed8] text-xs text-gray-600' href="">PRINT</a>
        </div>
        <div className='w-full md:px-10 flex flex-wrap'>
          {works.map((work, index) => (
            <div onClick={() => setPreview(work.img)} key={index} className='xl:w-1/3 cursor-pointer md:w-1/2 w-full mt-14 px-3'>
              <div className='w-full h-64 overflow-hidden group'>
                <img className='w-full object-cover h-full group-hover:h-[80%] transition-all duration-500' src={work.img} alt="" />
                <p className='h-[20%] bg-blue-700 px-4 flex items-center text-lg text-white'>Lightbox</p>
              </div>
            </div>
          ))}
        </div>
        <div onClick={() => setPreview("")} className={`${preview === "" ? "hidden" : "fixed"} top-0 w-full h-screen bg-[#0000003a] z-[99999]`}>
          <div className='flex items-center justify-center w-full h-full'>
            <img className='w-full md:w-[50%]' src={preview} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies