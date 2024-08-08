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
            setCount(prevCount => (prevCount < 1542 ? prevCount + 1 : prevCount));
            setCount1(prevCount1 => (prevCount1 < 2591 ? prevCount1 + 1 : prevCount1));
            setCount2(prevCount2 => (prevCount2 < 1045 ? prevCount2 + 1 : prevCount2));
            setCount3(prevCount3 => (prevCount3 < 1347 ? prevCount3 + 1 : prevCount3));
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

    const details = [
        {
            img: <svg className='w-9 m-auto' viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ic_fluent_people_community_28_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_people_community_28_filled" fill="#1d4ed8" fillRule="nonzero"> <path d="M17.75,18 C18.7164983,18 19.5,18.7835017 19.5,19.75 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,19.75 C8.5,18.7835017 9.28350169,18 10.25,18 L17.75,18 Z M18.2439108,11.9999135 L24.25,12 C25.2164983,12 26,12.7835017 26,13.75 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.3985759,19.007437 C20.0900029,17.9045277 19.1110503,17.0815935 17.9288034,17.0057197 L17.75,17 L16.8277704,17.0007255 C17.8477843,16.1757619 18.5,14.9140475 18.5,13.5 C18.5,12.9740145 18.4097576,12.4691063 18.2439108,11.9999135 Z M3.75,12 L9.75608915,11.9999135 C9.59024243,12.4691063 9.5,12.9740145 9.5,13.5 C9.5,14.8308682 10.0777413,16.0267978 10.996103,16.8506678 L11.1722296,17.0007255 L10.25,17 C8.9877951,17 7.92420242,17.85036 7.60086562,19.0094363 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,13.75 C2,12.7835017 2.78350169,12 3.75,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>,
            num: count,
            val: ,
            det: "Happy Clients"
        },
        {
            img: <svg className='w-9 m-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z" fill="#1d4ed8"></path> <path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="#1d4ed8"></path> <path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1d4ed8"></path> <path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="#1d4ed8"></path> <path d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#1d4ed8"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1d4ed8"></path> <path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="#1d4ed8"></path> <path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1d4ed8"></path> <path d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z" fill="#1d4ed8"></path> <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#1d4ed8"></path> <path d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z" stroke="#1d4ed8" strokeWidth="1.5"></path> <path d="M7 16H17" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>,
            num: count1,
            det: "Projects Done"
        },
        {
            img: <svg className='w-9 m-auto' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.5 3A1.5 1.5 0 003 4.5V6h14V4.5A1.5 1.5 0 0015.5 3h-11zM4 15.5A1.5 1.5 0 005.5 17h9a1.5 1.5 0 001.5-1.5V8H4v7.5zM7 11h6v2H7v-2z" fill="#1d4ed8"></path></g></svg>,
            num: count2,
            det: "Repositories"
        },
        {
            img: <svg className='w-9 h-9 m-auto' fill="#1d4ed8" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M178.853,272.412c-41.117,0-74.567,33.45-74.567,74.567s33.45,74.567,74.567,74.567s74.567-33.45,74.567-74.567 S219.97,272.412,178.853,272.412z M178.853,399.717c-29.08,0-52.738-23.658-52.738-52.738s23.658-52.738,52.738-52.738 s52.738,23.658,52.738,52.738S207.933,399.717,178.853,399.717z"></path> <path d="M332.961,305.914h-32.693c-1.825-5.382-4.009-10.64-6.538-15.736l23.131-23.131c4.262-4.262,4.262-11.173,0-15.435 l-42.64-42.64c-4.262-4.262-11.173-4.262-15.436,0l-23.13,23.131c-5.096-2.528-10.353-4.713-15.735-6.537v-32.693 c0-6.028-4.886-10.914-10.914-10.914h-60.302c-6.028,0-10.914,4.886-10.914,10.914v32.693c-5.382,1.824-10.64,4.009-15.736,6.537 l-23.13-23.13c-2.046-2.046-4.823-3.197-7.718-3.197c-2.894,0-5.671,1.15-7.718,3.197l-42.64,42.64 c-2.046,2.046-3.197,4.823-3.197,7.718s1.15,5.671,3.197,7.718l23.131,23.13c-2.528,5.096-4.713,10.354-6.537,15.736H24.747 c-6.028,0-10.914,4.886-10.914,10.914v60.302c0,6.028,4.886,10.914,10.914,10.914H57.44c1.824,5.382,4.009,10.64,6.537,15.736 l-23.13,23.13c-2.046,2.046-3.197,4.823-3.197,7.718c0,2.895,1.15,5.671,3.197,7.718l42.64,42.64 c2.046,2.046,4.823,3.197,7.718,3.197c2.895,0,5.671-1.15,7.718-3.197l23.13-23.13c5.096,2.528,10.354,4.713,15.736,6.537v32.693 c0,6.028,4.886,10.914,10.914,10.914h60.302c6.028,0,10.914-4.886,10.914-10.914v-32.693c5.382-1.824,10.64-4.009,15.735-6.537 l23.13,23.131c2.046,2.046,4.823,3.197,7.718,3.197c2.894,0,5.671-1.15,7.718-3.197l42.64-42.64 c4.262-4.262,4.262-11.173,0-15.435l-23.131-23.13c2.528-5.095,4.713-10.354,6.538-15.735h32.693 c6.028,0,10.914-4.886,10.914-10.914V316.83C343.875,310.8,338.989,305.914,332.961,305.914z M322.048,366.216h-0.002h-29.875 c-4.946,0-9.274,3.326-10.547,8.105c-2.419,9.08-6.047,17.811-10.782,25.952c-2.491,4.282-1.787,9.704,1.716,13.206 l21.149,21.149l-27.205,27.205l-21.149-21.15c-3.504-3.501-8.926-4.206-13.208-1.716c-8.141,4.737-16.871,8.365-25.95,10.782 c-4.779,1.273-8.106,5.6-8.106,10.547v29.875h-38.473v-29.875c0-4.946-3.327-9.274-8.106-10.547 c-9.08-2.418-17.81-6.045-25.951-10.782c-4.284-2.491-9.705-1.787-13.207,1.717l-21.149,21.149l-27.205-27.205l21.149-21.149 c3.502-3.502,4.208-8.926,1.717-13.207c-4.737-8.14-8.365-16.871-10.782-25.951c-1.273-4.779-5.6-8.106-10.547-8.106H35.662 v-38.473h29.875c4.946,0,9.274-3.326,10.547-8.106c2.417-9.08,6.045-17.81,10.782-25.951c2.491-4.282,1.787-9.704-1.716-13.207 L64,259.328l27.205-27.205l21.149,21.149c3.502,3.502,8.925,4.208,13.208,1.717c8.14-4.737,16.871-8.365,25.951-10.782 c4.779-1.273,8.106-5.6,8.106-10.547v-29.875h38.473v29.875c0,4.946,3.326,9.274,8.106,10.547 c9.079,2.418,17.81,6.045,25.95,10.782c4.283,2.491,9.704,1.787,13.207-1.716l21.149-21.15l27.205,27.205l-21.149,21.15 c-3.502,3.502-4.206,8.925-1.716,13.206c4.736,8.141,8.364,16.873,10.782,25.952c1.273,4.779,5.6,8.105,10.547,8.105h29.875 V366.216z"></path> <path d="M393.63,62.758c-24.073,0-43.657,19.585-43.657,43.657s19.585,43.658,43.657,43.658 c24.073,0,43.658-19.585,43.658-43.658S417.703,62.758,393.63,62.758z M393.63,128.244c-12.036,0-21.829-9.792-21.829-21.829 s9.792-21.829,21.829-21.829c12.036,0,21.829,9.792,21.829,21.829S405.667,128.244,393.63,128.244z"></path> <path d="M492.708,125.81l-12.616-7.284c0.568-4.024,0.854-8.073,0.854-12.111s-0.286-8.086-0.854-12.109l12.616-7.284 c5.22-3.013,7.009-9.689,3.995-14.909l-21.829-37.808c-3.013-5.22-9.69-7.009-14.909-3.995l-12.66,7.308 c-6.388-4.986-13.456-9.08-20.932-12.123V10.914C426.374,4.886,421.487,0,415.459,0h-43.657c-6.028,0-10.914,4.886-10.914,10.914 v14.581c-7.475,3.043-14.543,7.137-20.932,12.123l-12.66-7.308c-5.221-3.016-11.896-1.226-14.909,3.995l-21.829,37.808 c-3.015,5.22-1.226,11.896,3.995,14.909l12.616,7.284c-0.568,4.023-0.854,8.073-0.854,12.109s0.286,8.086,0.854,12.111 l-12.616,7.284c-5.22,3.013-7.009,9.689-3.995,14.909l21.829,37.808c1.447,2.507,3.831,4.336,6.627,5.085 c2.797,0.749,5.776,0.357,8.282-1.09l12.66-7.309c6.388,4.986,13.456,9.08,20.932,12.123v14.581 c0,6.028,4.886,10.914,10.914,10.914h43.657c6.028,0,10.914-4.886,10.914-10.914v-14.581c7.475-3.043,14.543-7.137,20.932-12.123 l12.66,7.309c2.507,1.447,5.484,1.84,8.282,1.09c2.796-0.75,5.18-2.578,6.627-5.085l21.829-37.808 C499.717,135.499,497.928,128.823,492.708,125.81z M457.322,91.247c1.191,4.999,1.794,10.102,1.794,15.168 s-0.604,10.169-1.794,15.169c-1.118,4.695,0.98,9.568,5.16,11.981l9.859,5.692l-10.914,18.905l-9.898-5.715 c-4.181-2.414-9.45-1.794-12.956,1.523c-7.439,7.036-16.512,12.291-26.237,15.196c-4.622,1.381-7.791,5.633-7.791,10.458v11.378 h-21.829v-11.38c0-4.824-3.167-9.076-7.791-10.458c-9.725-2.905-18.798-8.16-26.237-15.196 c-3.507-3.317-8.777-3.937-12.956-1.523l-9.898,5.715l-10.914-18.905l9.859-5.692c4.18-2.413,6.278-7.285,5.16-11.981 c-1.191-5-1.794-10.103-1.794-15.169s0.604-10.169,1.794-15.168c1.118-4.695-0.98-9.568-5.16-11.981l-9.859-5.692l10.914-18.905 l9.898,5.715c4.181,2.414,9.45,1.794,12.956-1.523c7.44-7.036,16.513-12.291,26.237-15.196c4.622-1.381,7.791-5.633,7.791-10.458 V21.829h21.829v11.38c0,4.824,3.167,9.076,7.791,10.458c9.724,2.905,18.797,8.16,26.237,15.196 c3.507,3.316,8.775,3.936,12.956,1.523l9.898-5.715l10.914,18.905l-9.859,5.692C458.303,81.68,456.204,86.552,457.322,91.247z"></path> <path d="M471.941,286.399h-6.508c-0.757-2.535-1.764-4.963-3.005-7.248l4.604-4.604c4.262-4.262,4.262-11.173,0-15.436 c-4.262-4.261-11.173-4.261-15.436,0l-4.604,4.604c-2.285-1.24-4.714-2.247-7.248-3.005v-6.508 c0-6.028-4.886-10.914-10.914-10.914s-10.914,4.886-10.914,10.914v6.508c-2.535,0.757-4.963,1.764-7.248,3.005l-4.604-4.604 c-4.262-4.261-11.173-4.261-15.436,0c-4.262,4.262-4.262,11.173,0,15.436l4.604,4.604c-1.24,2.285-2.247,4.714-3.005,7.248 h-6.508c-6.028,0-10.914,4.886-10.914,10.914s4.886,10.914,10.914,10.914h6.508c0.758,2.535,1.764,4.963,3.005,7.248 l-4.604,4.604c-4.262,4.262-4.262,11.173,0,15.436c2.132,2.13,4.925,3.197,7.718,3.197s5.587-1.066,7.718-3.197l4.604-4.604 c2.285,1.24,4.714,2.247,7.248,3.005v6.508c0,6.028,4.886,10.914,10.914,10.914s10.914-4.886,10.914-10.914v-6.508 c2.535-0.757,4.963-1.764,7.248-3.005l4.604,4.604c2.132,2.13,4.925,3.197,7.718,3.197c2.793,0,5.587-1.066,7.718-3.197 c4.262-4.262,4.262-11.173,0-15.436l-4.604-4.604c1.24-2.285,2.247-4.714,3.005-7.248h6.508c6.028,0,10.914-4.886,10.914-10.914 S477.969,286.399,471.941,286.399z M428.829,313.685c-9.027,0-16.372-7.344-16.372-16.372s7.344-16.372,16.372-16.372 s16.372,7.344,16.372,16.372S437.857,313.685,428.829,313.685z"></path> </g> </g> </g> </g></svg>,
            num: count3,
            det: "Client's served"
        }
    ]
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