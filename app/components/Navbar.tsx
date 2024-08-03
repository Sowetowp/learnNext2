import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='bg-slate-500 w-full'>
                <section className='w-full max-w-7xl py-7 px-1 md:px-16'>
                    <h1 className='text-white text-xl leading-none tracking-widest'>SPERE</h1>
                    <div>
                        <a className='text-white text-xs font-semibold'>HOME</a>
                        <a href="">ABOUT</a>
                        <a href="">SERVICES</a>
                        <a href="">TEAM</a>
                        <a href="">WORK</a>
                        <a href="">BLOG</a>
                        <a href="">CONTACT</a>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar