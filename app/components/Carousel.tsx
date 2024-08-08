"use client";
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

interface CarouselProps {
    view: string;
}

const Carousel: React.FC<CarouselProps> = ({ view, slides,  }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = useRef(0)
    const nextRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (nextRef.current) {
                nextRef.current.click();
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

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

    const handleNext = () => {
        prevIndex.current = currentIndex
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <section id='sec1' className='xl:h-screen 2xl:h-[40vh] h-[60vh] bg-black m-auto w-full overflow-hidden max-w-7xl relative'>
                {slides.map((slide, index) => (
                    <div key={index} className={`h-full w-full absolute ${currentIndex === index || prevIndex.current === index ? "z-[11]" : "z-10"} transition-transform duration-700`} style={{ transform: `translateX(${position(index)})` }}>
                        <div className='h-full w-full absolute text-center bg-[#00000091] flex justify-center items-center'>
                            <span className='pt-20'>
                                <p className='text-white font-bold text-5xl'>{slide.title}</p>
                                <p className='text-white mt-3 max-w-[95%] m-auto'>{slide.details}</p>
                                <a href={slide.url} className='mt-8 px-5 py-3 bg-blue-700 inline-block text-xs text-white font-semibold'>{slide.btn}</a>
                            </span>
                        </div>
                        <img className='h-full w-full object-cover' src={slide.img} alt="" />
                    </div>
                ))}
                <button onClick={handlePrev} className='absolute z-20 md:left-5 left-0 h-full'>
                    <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#fff"></path> </g></svg>
                </button>
                <button ref={nextRef} onClick={handleNext} className='absolute z-20 md:right-5 right-0 h-full'>
                    <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#fff"></path> </g></svg>
                </button>
                <div className='absolute z-20 flex gap-1 w-full justify-center bottom-4'>
                    {slides.map((slide, index) => (
                        <div onClick={() => setCurrentIndex(index)} key={index} className={`${index === currentIndex ? "bg-white" : ""} border-2 border-white w-3 h-3 rounded-full`}></div>
                    ))}
                </div>
                <Navbar view={view} />
            </section>
        </>
    )
}

export default Carousel