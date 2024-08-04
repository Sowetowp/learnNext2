import React from 'react'
import Navbar from './Navbar'

const Carousel = () => {
  return (
    <>
    <main className='h-screen bg-black w-full max-w-7xl relative'>
        <div className='h-full w-full absolute z-10'>
            <img className='h-full w-full' src="/hero-4.jpg" alt="" />
        </div>
        <Navbar/>
    </main>
    </>
  )
}

export default Carousel