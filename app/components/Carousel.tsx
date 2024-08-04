"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [next, setNext] = useState(null)
    const slides = [
        '/hero-4.jpg',
        '/hero-5.jpeg',
        '/hero-6.jpg',
    ];

    const position = (index: any) => {
        if (index === currentIndex) {
            return "0%"
        } else if (currentIndex === slides.length - 1 && index === 0) {
            return "100%"
        } else if (index === slides.length - 1 && currentIndex === 0) {
            return "-100%"
        } else if (index === currentIndex - 1) {
            return "-100%"
        } else if (index === currentIndex + 1) {
            return "100%"
        }
    }

    const handlePrev = () => {
        setNext(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    console.log(currentIndex)
    const handleNext = () => {
        setNext(false)
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <main className='h-screen bg-black m-auto w-full max-w-7xl relative'>
                {slides.map((slide, index) => (
                    <div key={index} className={`h-full w-full absolute ${currentIndex === index ? "z-[11]" : currentIndex === slides.length - 1 && index === 0 && !next ? "-z-10" : index === slides.length - 1 && currentIndex === 0 && next ? "-z-10" : "z-10"} transition-transform duration-500`} style={{ transform: `translateX(${position(index)})` }}>
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
            <button className='border bg-black  p-14' onClick={handleNext}>kk</button>
            <button className='border bg-red-500  p-14' onClick={handlePrev}>kk</button>
        </>
    )
}

export default Carousel