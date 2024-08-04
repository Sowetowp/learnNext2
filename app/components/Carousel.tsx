import React from 'react'
import Navbar from './Navbar'

const Carousel = () => {
    return (
        <>
            <main className='h-screen bg-black w-full max-w-7xl relative'>
                <div className='h-full w-full absolute z-10'>
                    <div className='h-full w-full absolute text-center bg-[#00000091] flex justify-center items-center'>
                        <span>
                            <p className='text-white font-bold text-5xl'>Talented Consultants</p>
                            <p className='text-white mt-3'>With over 20 years experience helping business to find comprehensive solutions</p>
                            <a href="" className='mt-4 px-5 py-3 bg-blue-600 inline-block text-xs text-white'>OUR SERVICES</a>
                        </span>
                    </div>
                    <img className='h-full w-full object-cover' src="/hero-4.jpg" alt="" />
                </div>
                <Navbar />
            </main>
        </>
    )
}

export default Carousel