import React from 'react'
import Navbar from './Navbar'

const Carousel = () => {
  return (
    <>
    <main className='h-screen bg-black w-full max-w-7xl relative'>
        <div className='h-full w-full absolute z-10'>
            <div className='h-full w-full absolute bg-[#00000091]'>
                <p className='text-white font-extrabold text-5xl'>Talented Consultants</p>
                <p>With over 20 years experience helping business to find comprehensive solutions</p>
                <a href="">OUR SERVICES</a>
            </div>
            <img className='h-full w-full object-cover' src="/hero-4.jpg" alt="" />
        </div>
        <Navbar/>
    </main>
    </>
  )
}

export default Carousel