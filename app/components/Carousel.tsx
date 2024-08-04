"use client";
import React, { useRef, useState } from 'react'
import Navbar from './Navbar'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = useRef(0)
    const slides = [
        {img:'/hero-4.jpg', title: "Talented Consultants", details: "With over 20 years experience helping business to find comprehensive solutions", url:"OUR SERVICES"},
        {img: '/hero-5.jpeg', title:"Qualified Professionals", details: "We have spent thousands of hours to learn technology for solving problems", url:"ABOUT US"},
        {img:'/hero-6.jpg', title: "Returns Guaranteed", details: "We have helped hundreds of companies to grow their business in the competitive world", url: "CASE STUDIES"},
    ];

    const position = (index: number) => {
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
        prevIndex.current = currentIndex
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    console.log(currentIndex)
    console.log(prevIndex.current)
    const handleNext = () => {
        prevIndex.current = currentIndex
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <main className='xl:h-screen 2xl:h-[40vh] h-[60vh] bg-black m-auto w-full overflow-hidden max-w-7xl relative'>
                {slides.map((slide, index) => (
                    <div key={index} className={`h-full w-full absolute ${currentIndex === index || prevIndex.current === index ? "z-[11]" : "z-10"} transition-transform duration-500`} style={{ transform: `translateX(${position(index)})` }}>
                        <div className='h-full w-full absolute text-center bg-[#00000091] flex justify-center items-center'>
                            <span className='pt-20'>
                                <p className='text-white font-bold text-5xl'>{slide.title}</p>
                                <p className='text-white mt-3'>{slide.details}</p>
                                <a href="" className='mt-8 px-5 py-3 bg-blue-700 inline-block text-xs text-white font-semibold'>{slide.url}</a>
                            </span>
                        </div>
                        <img className='h-full w-full object-cover' src={slide.img} alt="" />
                    </div>
                ))}
                <div className='h-full bg-slate-500 w-full absolute z-20'>
<span>
    <button></button>
    <button>
        
    </button>
</span>
                </div>
                <Navbar />
            </main>
            <button className='border bg-black  p-14' onClick={handleNext}>kk</button>
            <button className='border bg-red-500 h-[300vh]  p-14' onClick={handlePrev}>kk</button>
        </>
    )
}

export default Carousel