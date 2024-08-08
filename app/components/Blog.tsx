import React from 'react'

const Blog = () => {
    const works = [
        { img: "/img_9.jpeg", title: "Points to remember in the meeting", det: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print." },
        { img: "/img_10.jpeg", title: "The perfect plan for the business", det: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print." },
        { img: "/img_11.jpeg", title: "Analytics is the important factor", det: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print." }
    ]
    const blogData = {
        head: "Our client's testimonials",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    }
    return (
        <>
            <section id='sec7' className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000">{}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000">There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.</p>
                <div className='w-full md:px-10 flex flex-wrap'>
                    {works.map((work, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={index} className='xl:w-1/3 m-auto cursor-pointer md:w-1/2 w-full mt-14 px-4'>
                            <div data-aos="fade-up" data-aos-duration="1000" className='w-full h-60 relative'>
                                <p className='bg-blue-700 w-fit bottom-0 px-4 absolute py-2 text-xs text-white'>JAN 11</p>
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