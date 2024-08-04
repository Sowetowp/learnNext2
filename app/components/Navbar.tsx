"use client";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrollHeader, setScrollHeader] = useState(false)
    const [menu, setMenu] = useState(false)

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

    const handleMenuChange = (e: any) => {
        if (e.target.checked) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    return (
        <>
            <header className={`w-full transition-all duration-600 ${scrollHeader ? "fixed z-[9999] bg-[#000000e0]" : "relative z-[9999]"} ${menu ? "bg-[#000000f3]" : ""} md:bg-transparent`}>
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
                                <input onChange={(e) => handleMenuChange(e)} className="hidden peer" type="checkbox" />
                                <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" ></div>
                                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden" ></div>
                                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" ></div>
                            </div>
                        </label>
                    </div>
                </section>
            </header>
            <section className={`w-full m-auto max-w-7xl md:hidden flex-col flex bg-[#000000de] transition-transform duration-500 relative z-[9999]`} style={{ transform: `translateX(${menu ? "0%" : "100%"})` }}>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center'>HOME</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">ABOUT</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">SERVICES</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">TEAM</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">WORK</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">BLOG</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="">CONTACT</a>
            </section>
        </>
    )
}

export default Navbar