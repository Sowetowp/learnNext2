"use client";
import React, { useEffect, useState } from 'react'

interface CarouselProps {
    view: string;
}

const Happy: React.FC<CarouselProps> = ({ view }) => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [started, setStarted] = useState<boolean>(false);

    useEffect(() => {
        if (view === "happy") {
            setStarted(true);
        }
        if (!started) {
            return
        }
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            setCount(prevCount => (prevCount < details[0].val ? prevCount + 1 : prevCount));
            setCount1(prevCount1 => (prevCount1 < details[1].val ? prevCount1 + 1 : prevCount1));
            setCount2(prevCount2 => (prevCount2 < details[2].val ? prevCount2 + 1 : prevCount2));
            setCount3(prevCount3 => (prevCount3 < details[3].val ? prevCount3 + 1 : prevCount3));
        }, 1);

        return () => {
            clearInterval(interval);
        };
    }, [view, started]);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const handleScroll = () => {
    //             setScrollHeader(window.pageYOffset > 3000);
    //         };
    //         const debouncedHandleScroll = debounce(handleScroll, 50);
    //         window.addEventListener('scroll', debouncedHandleScroll);
    //         return () => {
    //             window.removeEventListener('scroll', debouncedHandleScroll);
    //         };
    //     }
    // }, []);

    // const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void => {
    //     let timeout: NodeJS.Timeout;
    //     return (...args: Parameters<T>) => {
    //         const later = () => {
    //             clearTimeout(timeout);
    //             func(...args);
    //         };
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //     };
    // };

    return (
        <>
            <section id='happy' className='w-full max-w-7xl flex items-center flex-wrap bg-stone-50 py-4 px-16'>
                {details.map((det, index) => (
                    <div key={index} className='xl:w-1/4 md:w-1/2 w-full text-center py-8'>
                        {det.img}
                        <p className='text-2xl font-medium mt-2'>{det.num}</p>
                        <p className='mt-1 text-[0.8rem] text-gray-500'>{det.det}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Happy