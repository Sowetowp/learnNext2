import React from 'react'

const Testimony = () => {
    const works = [
        { img: "/img_5.jpg" },
        { img: "/img_4(1).jpg" },
        { img: "/img_6(1).jpg" }
      ]
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our client's testimonials</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {works.map((test, index)=>(
                        
                    ))}
                    <div className='xl:w-1/3 md:w-1/2 w-full mt-14 px-3'>
                        <div className='bg-white p-5 shadow text-center'>
                            <img src="" alt="" />
                            <p className='font-medium text-xs tracking-wider mt-5 text-center'>JAMES WILLAMSON</p>
                            <p className='text-[0.8rem] mt-1 text-gray-500'>CREATIVE DIRECTOR</p>
                            <p className='text-sm text-gray-500 mt-3'>This theme is very easy to use and understand, and provides enough options and customization without being overwhelming.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimony