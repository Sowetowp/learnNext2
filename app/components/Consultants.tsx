import React from 'react'

const Consultants = () => {
    const exp = [

    ]
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our expert consultants</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                <div className='w-full px-10 flex flex-wrap'>
                    <div className='xl:w-1/4 md:w-1/2 w-full text-center mt-14 px-3'>
                        <div className='relative'>
                            <div className='h-62 w-full z-10 absolute bg-blue-700'>l</div>
                            <img className='w-full h-72 object-cover' src="/img-10.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Consultants