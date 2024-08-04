import React from 'react'
import Navbar from './Navbar'

const Carousel = () => {
  return (
    <>
    <main className='h-screen bg-black w-full max-w-7xl'>
        <div className='h-full w-full'>
            <img className='' src="/hero-4.jpg" alt="" />
        </div>
        <Navbar/>
    </main>
    </>
  )
}

export default Carousel