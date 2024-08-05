import React from 'react'

const Contact = () => {
    const exp = [
        {
            img: <svg className='w-5' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <polygon className="fill-blue-700" points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 77.841,493.862 77.841,293.382 256.002,153.862 "></polygon> <polygon className="fill-blue-700" points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764 "></polygon> <polygon className="fill-blue-700" points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138 "></polygon> </g> </g></svg>,
            head: "CONTACT ADDRESS",
            det: "833 Indian Summer Court Carol Stream, IL 60188"
        },
        {
            img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
            head: "EMAIL ADDRESS",
            det: "caliberthemes@gmail.com",
            det1: "info.caliber@gmail.com"
        },
        {
            img: <svg className='w-5' viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>call [#192]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#1d4ed8"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#192]"> </path> </g> </g> </g> </g></svg>,
            head: "PHONE NUMBER",
            det: "1-800-440-010",
            det1: "1-800-044-107"
        }
    ]
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Get in touch with us</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard.</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {exp.map((ex, index) => (
                        <div key={index} className='md:w-1/3 w-full md:px-6 xl:px-10 text-center mt-14'>
                            <span className='border-2 border-blue-700 inline-block p-6 rounded-full'>{ex.img}</span>
                            <p className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p className='text-sm text-gray-500 mt-3 max-w-[70%] m-auto'>{ex.det}</p>
                            <p className='text-sm text-gray-500'>{ex.det1}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full'>
                    <div className='md:w-1/2 w-full'></div>
                </div>
            </section>
        </>
    )
}

export default Contact