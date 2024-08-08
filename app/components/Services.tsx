import React from 'react'

interface servicesProp {
    serviceData: any
}
const Services: React.FC<servicesProp> = ({servicesData}) => {
    return (
        <>
            <section id='sec4' className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>{servicesData.head}</h2>
                <p data-aos="fade-up" data-aos-duration="1000" className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-[60%] xl:w-[40%] text-center'>{servicesData.body}</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {servicesData.exp.map((ex, index) => (
                        <div key={index} className='xl:w-1/4 md:w-1/2 w-full md:px-10 text-center mt-14'>
                            <span data-aos="fade-up" data-aos-duration="1000" className='bg-blue-700 inline-block p-4'>{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3'>{ex.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services