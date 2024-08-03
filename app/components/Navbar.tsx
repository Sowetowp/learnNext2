import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='bg-slate-500 w-full'>
                <section className='w-full max-w-7xl py-7 px-1 md:px-16'>
                    <h1 className='text-white text-xl leading-none tracking-widest'>SPERE</h1>
                    <div>
                        <a className='text-white text-xs font-semibold'>HOME</a>
                        <a className='text-white text-xs font-semibold' href="">ABOUT</a>
                        <a className='text-white text-xs font-semibold' href="">SERVICES</a>
                        <a className='text-white text-xs font-semibold' href="">TEAM</a>
                        <a className='text-white text-xs font-semibold' href="">WORK</a>
                        <a className='text-white text-xs font-semibold' href="">BLOG</a>
                        <a className='text-white text-xs font-semibold' href="">CONTACT</a>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar