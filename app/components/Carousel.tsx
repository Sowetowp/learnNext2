import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Carousel = () => {
  return (
    <>
    <main className='h-screen bg-black w-full max-w-7xl'>
        <div>
            <Image src="../public/" alt='carousel image 1'/>
        </div>
        <Navbar/>
    </main>
    </>
  )
}

export default Carousel