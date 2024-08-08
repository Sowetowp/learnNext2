import { comment } from 'postcss'
import React from 'react'

interface testimonyProp{
    testimonyData: any
}
const Testimony: React.FC<testimonyProp> = ({testimonyData}) => {
    
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000">{testimonyData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000">{testimonyData.body}</p>
                <div className='w-full md:px-10 px-5 flex flex-wrap'>
                    {testimonyData.works.map((test: any, index: any) => (
                        <div key={index} className='xl:w-1/3 md:w-1/2 m-auto w-full mt-14 md:px-5'>
                            <div data-aos="fade-up" data-aos-duration="1000" className='bg-white md:p-16 p-8 shadow text-center'>
                                <img data-aos="fade-up" data-aos-duration="1000" src={test.img} alt="" className='w-24 rounded-full m-auto' />
                                <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-xs tracking-wider mt-6 text-center'>{test.name}</p>
                                <p data-aos="fade-up" data-aos-duration="1000" className='text-[0.7rem] mt-1 text-gray-500'>{test.title}</p>
                                <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-4'>{test.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full pt-28 flex flex-wrap'>
                    {testimonyData.sponsors.map((sp, index) => (
                        <div data-aos="fade" data-aos-duration="1000" key={index} className='md:w-1/4 w-1/2'>
                            <img className='w-28 mt-4 m-auto' src={sp.img} alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Testimony