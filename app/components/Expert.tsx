import React from 'react'

const Expert = () => {
    const exp = [
        {
            img: <svg className='w-5' fill="#fff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>,
            head: "Modern Design"
        },
        {
            img: <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 6" id="Layer_6"> <path className="cls-1" d="M1.42,38.13l61.08-.19v3.48a7,7,0,0,1-7,7H8.39a7,7,0,0,1-7-7V14.83a7,7,0,0,1,7-7H55.52a7,7,0,0,1,7,7v17.9"></path> <path className="cls-1" d="M28.25,48.4S28,54.59,22,56.23"></path> <path className="cls-1" d="M35.93,48.4s.26,6.19,6.3,7.83"></path> <line className="cls-1" x1="18.04" x2="45.88" y1="56.23" y2="56.23"></line> <line className="cls-1" x1="31.02" x2="32.9" y1="43" y2="43"></line> </g> </g></svg>,
            head: "Free Support"
        },
        {
            img: <svg className='w-5' fill="#fff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>,
            head: "Responsive"
        }
    ]
    return (
        <>
            <section className='w-full max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center'>We are an expert consulting firm.</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae. Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.</p>
                <div className='w-full px-10 flex'>
                    {exp.map((ex, index) => (
                        <div className='w-1/3 md:px-10 text-center mt-14'>
                            <span className='bg-blue-700 inline-block p-6 rounded-full'>{ex.img}</span>
                            <p className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p className='text-sm text-gray-500 mt-3'>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard .</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Expert