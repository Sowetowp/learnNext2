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

    const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void => {
        let timeout: NodeJS.Timeout;
        return (...args: Parameters<T>) => {
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
            <header className={`w-full ${scrollHeader ? "fixed z-[9999]" : "relative z-[9999]"}`}>
                <section className='w-full m-auto max-w-7xl py-4 md:py-7 px-1 md:px-8 xl:px-16 flex items-center justify-between'>
                    <h1 className='text-white text-xl leading-none tracking-widest'>SPERE</h1>
                    <div className='md:flex gap-8 items-center hidden'>
                        <a className='text-white text-[0.8rem] font-semibold'>HOME</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">ABOUT</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">SERVICES</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">TEAM</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">WORK</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">BLOG</a>
                        <a className='text-white text-[0.8rem] font-semibold' href="">CONTACT</a>
                    </div>
                    <div className='md:hidden'>
                        <label>
                            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                                <input className="hidden peer" type="checkbox" />
                                <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" ></div>
                                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden" ></div>
                                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" ></div>
                            </div>
                        </label>
                    </div>
                </section>
                <section className='w-full m-auto max-w-7xl flex flex-col'>
                    <a className='text-white text-[0.8rem] font-semibold py-2 text-center bg-[#00000077]'>HOME</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">ABOUT</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">SERVICES</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">TEAM</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">WORK</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">BLOG</a>
                    <a className='text-white text-[0.8rem] font-semibold' href="">CONTACT</a>
                </section>
            </header>
        </>
    )
}

export default Navbar