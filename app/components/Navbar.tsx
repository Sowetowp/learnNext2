"use client";
import React, { useEffect, useState } from 'react'

interface CarouselProps {
    view: string,
    navData: any
}

const Navbar: React.FC<CarouselProps> = ({ view, navData }) => {
    const [scrollHeader, setScrollHeader] = useState(false)
    const [menu, setMenu] = useState(false)
    const [current, setCurrent] = useState("sec1")
    useEffect(()=>{
        if(view){
            setCurrent(view)
        }
    },[view])
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
            <header className={`w-full transition-colors duration-500 ${scrollHeader ? "fixed z-[9999] bg-white shadow" : "relative z-[9999] md:bg-transparent"}`}>
                <section className='w-full m-auto max-w-7xl py-4 md:py-7 px-3 md:px-8 xl:px-16 flex items-center justify-between'>
                    <h1 className={`text-xl leading-none tracking-widest ${scrollHeader ? "text-black" : "text-white"}`}>{navData}</h1>
                    <div className='md:flex gap-8 items-center hidden'>
                        <a href='#sec1' className={`${scrollHeader && current === "sec1" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} hover:text-[#1d4ed8] text-[0.8rem] font-semibold`}>HOME</a>
                        <a className={`${current === "sec2" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec2">ABOUT</a>
                        <a className={`${current === "sec4" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec4">SERVICES</a>
                        <a className={`${current === "sec5" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec5">TEAM</a>
                        <a className={`${current === "sec6" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec6">WORK</a>
                        <a className={`${current === "sec7" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec7">BLOG</a>
                        <a className={`${current === "sec8" ? "text-blue-700" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#1d4ed8] font-semibold`} href="#sec8">CONTACT</a>
                    </div>
                    <div className='md:hidden'>
                        <label>
                            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                                <input onChange={(e) => handleMenuChange(e)} className="hidden peer" type="checkbox" />
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]`} ></div>
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-md transition-all duration-300 origin-center peer-checked:hidden`} ></div>
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]`} ></div>
                            </div>
                        </label>
                    </div>
                </section>
            </header>
            <section className={`w-full m-auto max-w-7xl md:hidden flex-col flex bg-[#000000de] transition-transform duration-500 ${scrollHeader ? "fixed top-[4.5rem]" : "relative"} z-[9999]`} style={{ transform: `translateX(${menu ? "0%" : "100%"})` }}>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href='#sec1'>HOME</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec2">ABOUT</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec4">SERVICES</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec5">TEAM</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec6">WORK</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec7">BLOG</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec8">CONTACT</a>
            </section>
        </>
    )
}

export default Navbar