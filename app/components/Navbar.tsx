"use client";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleScroll = () => {
            setScrollHeader(window.pageYOffset > 200);
          };
    
          const debouncedHandleScroll = debounce(handleScroll, 50);
          window.addEventListener('scroll', debouncedHandleScroll);
    
          return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
          };
        }
      }, []);
    
      // Debounce function to limit the rate at which a function is executed
      const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      };

    return (
        <>
            <header className={`bg-slate-500 w-full ${scrollHeader ? "fixed" : ""}`}>
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