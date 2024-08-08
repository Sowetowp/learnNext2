import dynamic from "next/dynamic";
import { useMemo } from "react";

interface contactDatatype {
    contactData: any
}
const Contact:React.FC<contactDatatype> = ({contactData}) => {
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
            <section id="sec8" className='w-full overflow-hidden max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000">{contactData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000">{contactData.body}</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {contactData.exp.map((ex, index) => (
                        <div key={index} className='md:w-1/3 w-full md:px-6 xl:px-10 text-center mt-14'>
                            <span className='border-2 border-blue-700 inline-block p-6 rounded-full' data-aos="fade-up" data-aos-duration="1000">{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3 max-w-[70%] m-auto'>{ex.det}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500'>{ex.det1}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full md:px-10 flex flex-wrap'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='md:w-1/2 w-full px-3 mt-24 h-96'>
                        <Map posix={[contactData.coordinate.lat, contactData.coordinate.lng]} />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className='md:w-1/2 w-full px-3 mt-24'>
                        <form className="flex flex-wrap justify-between">
                            <input className="border bg-stone-100 px-5 py-3 text-[16px] md:text-sm outline-none placeholder:font-light md:w-[48%] w-full" type="text" placeholder="Name*" />
                            <input className="border bg-stone-100 px-5 py-3 md:mt-0 mt-8 text-[16px] md:text-sm outline-none placeholder:font-light md:w-[48%] w-full" type="text" placeholder="Email*" />
                            <input className="border bg-stone-100 px-5 py-3 text-[16px] md:text-sm outline-none placeholder:font-light mt-8 w-full" type="text" placeholder="Subject" />
                            <textarea className="border resize-none h-36 bg-stone-100 px-5 py-3 text-[16px] md:text-sm mt-8 outline-none placeholder:font-light w-full" placeholder="Your Message*" />
                            <button className="w-full mt-8 font-semibold text-[16px] md:text-sm text-white py-3 bg-blue-700">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact