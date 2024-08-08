import React from 'react'

const Founded = () => {
    const foundedData = {
head: "Founded with the goal to serve expertise"
    }
    return (
        <>
            <section className='w-full flex overflow-hidden items-center flex-wrap max-w-7xl m-auto bg-stone-50 px-3 md:px-16 py-28'>
                <div data-aos="fade-right" data-aos-duration="1000" className='md:w-1/2 w-full'>
                    <h2 className='font-bold md:w-[80%] text-[1.9rem] mb-6'>{foundedData.head}</h2>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>{foundedData}</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>- Free support and lifetime updates</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>- Modern and unique design</p>
                    <a href="#sec8" className='mt-8 px-5 py-3 bg-blue-700 inline-block text-xs text-white font-semibold'>CONTACT US</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='md:w-1/2 w-full mt-12 md:mt-0'>
                    <img className='w-full' src="/features.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Founded