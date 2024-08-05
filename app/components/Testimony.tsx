"use client";
import React from 'react'

const Testimony = () => {
    const works = [
        { img: "/img_5.jpg" },
        { img: "/img_4 (1).jpg" },
        { img: "/img_6 (1).jpg" }
    ]
    const sponsors = [
        { img: "/img_1.png" },
        { img: "/img_2.png" },
        { img: "/img_4.png" },
        { img: "/img_5.png" }
    ]
    const AutoScrollSection: React.FC = () => {
        const scrollContainerRef = useRef<HTMLDivElement>(null);
      
        useEffect(() => {
          const scrollContainer = scrollContainerRef.current;
      
          if (!scrollContainer) return;
      
          const scrollContentWidth = scrollContainer.scrollWidth / 2; // Width of original content (not duplicated content)
      
          function autoScroll() {
            if (scrollContainer.scrollLeft >= scrollContentWidth) {
              scrollContainer.scrollLeft -= scrollContentWidth; // Reset to start of content
            } else {
              scrollContainer.scrollLeft += 1;
            }
          }
      
          const scrollInterval = setInterval(autoScroll, 20); // Adjust speed as needed
      
          return () => clearInterval(scrollInterval); // Cleanup on unmount
        }, []);
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our client's testimonials</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {works.map((test, index) => (
                        <div key={index} className='xl:w-1/3 md:w-1/2 w-full mt-14 px-5'>
                            <div className='bg-white p-16 shadow text-center'>
                                <img src={test.img} alt="" className='w-24 rounded-full m-auto' />
                                <p className='font-medium text-xs tracking-wider mt-6 text-center'>JAMES WILLAMSON</p>
                                <p className='text-[0.7rem] mt-1 text-gray-500'>CREATIVE DIRECTOR</p>
                                <p className='text-sm text-gray-500 mt-4'>This theme is very easy to use and understand, and provides enough options and customization without being overwhelming.</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full pt-28 flex justify-around'>
                    {sponsors.map((sp, index)=>(
                    <img className='w-28' key={index} src={sp.img} alt="" />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Testimony