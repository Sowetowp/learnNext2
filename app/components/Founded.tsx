import React from 'react'

const Founded = () => {
    return (
        <>
            <section className='w-full flex items-center flex-wrap max-w-7xl m-auto bg-stone-50 px-3 md:px-16 py-28'>
                <div className='md:w-1/2 w-full'>
                    <h2 className='font-bold md:w-[80%] text-[1.9rem] mb-6'>Founded with the goal to serve expertise</h2>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>- Template is easy to setup and run</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>- Free support and lifetime updates</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1'>- Modern and unique design</p>
                    <a href="" className='mt-8 px-5 py-3 bg-blue-700 inline-block text-xs text-white font-semibold'>CONTACT US</a>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img className='w-full' src="/features.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Founded