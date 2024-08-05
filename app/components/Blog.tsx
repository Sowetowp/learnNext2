import React from 'react'

const Blog = () => {
    const works = [
        { img: "/img_9.jpeg", title: "Points to remember in the meeting", det: "" },
        { img: "/img_10.jpeg", title: "", det: "" },
        { img: "/img_11.jpeg", title: "", det: "" }
    ]
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Latest news</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.</p>
                <div className='w-full md:px-10 flex flex-wrap'>
                    {works.map((work, index) => (
                        <div key={index} className='xl:w-1/3 cursor-pointer md:w-1/2 w-full mt-14 px-3'>
                            <div className='w-full h-60 relative'>
                                <p className='bg-blue-700 w-fit bottom-0 px-4 absolute py-2 text-xs text-white'>JAN 11</p>
                                <img className='w-full object-cover h-full' src={work.img} alt="" />
                            </div>
                            <p className='font-medium text-xs tracking-wider mt-5 text-center'>{work.title}</p>
                            <p className='text-[0.8rem] mt-1 text-gray-500'>{work.det}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog