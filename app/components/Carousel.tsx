"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [
        '/hero-4.jpg',
        '/hero-5.jpeg',
        '/hero-6.jpg',
    ];

    return (
        <>
            <main className='h-screen bg-black w-full max-w-7xl relative'>
                {slides.map((slide, index) => (
                    <div key={index} className='h-full w-full absolute z-10 transition-transform duration-500' style={{ transform: `translateX(${currentIndex === index ? "0%" : currentIndex- :""})` }}>
                        <div className='h-full w-full absolute text-center bg-[#00000091] flex justify-center items-center'>
                            <span className='pt-20'>
                                <p className='text-white font-bold text-5xl'>Talented Consultants</p>
                                <p className='text-white mt-3'>With over 20 years experience helping business to find comprehensive solutions</p>
                                <a href="" className='mt-4 px-5 py-3 bg-blue-700 inline-block text-xs text-white font-semibold'>OUR SERVICES</a>
                            </span>
                        </div>
                        <img className='h-full w-full object-cover' src={slide} alt="" />
                    </div>
                ))}
                <Navbar />
            </main>
        </>
    )
}

export default Carousel