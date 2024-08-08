import React from 'react'

interface exx {
    expertData: any
}
const Expert = ({expertData}) => {
    
    return (
        <>
            <section id='sec2' className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000">{expertData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000">{expertData.body}</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {expertData.exp.map((ex, index) => (
                        <div key={index} className='md:w-1/3 w-full md:px-6 xl:px-10 text-center mt-14'>
                            <span data-aos="fade-up" data-aos-duration="1000" className='bg-blue-700 inline-block p-6 rounded-full'>{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3'>{ex.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Expert