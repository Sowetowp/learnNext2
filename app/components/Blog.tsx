import React from 'react'

interface 
const Blog = ({blogData}) => {
    
    return (
        <>
            <section id='sec7' className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000">{blogData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000">{blogData.body}</p>
                <div className='w-full md:px-10 flex flex-wrap'>
                    {blogData.works.map((work, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={index} className='xl:w-1/3 m-auto cursor-pointer md:w-1/2 w-full mt-14 px-4'>
                            <div data-aos="fade-up" data-aos-duration="1000" className='w-full h-60 relative'>
                                <p className='bg-blue-700 w-fit bottom-0 px-4 absolute py-2 text-xs text-white'>{work.day}</p>
                                <img className='w-full object-cover h-full' src={work.img} alt="" />
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-lg mt-5'>{work.title}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-[0.8rem] mt-1 text-gray-500'>{work.det}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog