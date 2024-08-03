import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", () => {
                setScrollHeader(window.pageYOffset > 200)
            })
        }
    }, [])

    return (
        <>
            <header className='bg-slate-500 w-full fixed'>
                <section className='w-full max-w-7xl py-7 px-1 md:px-16 flex items-center justify-between'>
                    <h1 className='text-white text-xl leading-none tracking-widest'>SPERE</h1>
                    <div className='flex gap-8 items-center'>
                        <a className='text-white text-[0.8rem] font-semibold'>HOME</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">ABOUT</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">SERVICES</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">TEAM</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">WORK</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">BLOG</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">CONTACT</a>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar