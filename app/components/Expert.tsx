import React from 'react'

const Expert = () => {
    const expertData = {
        head: "We are an expert consulting firm.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae. Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.",
        exp: [
            {
                img: <svg className='w-5' fill="#fff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path> <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> </g></svg>,
                head: "Modern Design",
                body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
            },
            {
                img: <svg className='w-5' viewBox="0 -7.5 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>17-multimeda-speaker-megaphone</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="3.Multimedia" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"> <g id="Multimedia-(Color)" transform="translate(-1298.000000, -308.000000)" stroke="#fff" strokeWidth="3.5"> <g id="17-multimeda-speaker-megaphone" transform="translate(1300.000000, 310.000000)"> <rect id="Layer-1" fill="#fff" x="92" y="0" width="8" height="74" rx="4"> </rect> <path d="M52,22.2792969 C52,22.2792969 76.1601562,22.2792969 92,2.04785156 L92,72 C75.9351563,51.9902344 52,51.9902344 52,51.9902344 L52,22.2792969 Z" id="Layer-2" fill="#FFFFFF"> </path> <rect id="Layer-3" fill="#fff" x="12" y="19" width="40" height="36" rx="3"> </rect> <path d="M10,49 L5,49 C2.23857625,49 0,46.76369 0,43.9980273 L0,30.0019727 C0,27.2394595 2.24419519,25 5,25 L10,25" id="Layer-4" fill="#fff"> </path> <path d="M20.5,28 L43.5,28" id="Layer-5" fill="#fff"> </path> <path d="M30,55 L18,55 L18,81.0007252 C18,83.2132053 19.7889923,85 21.9958262,85 L32.4243989,84.9999999 C34.3526936,85 36.5622035,82.3296774 34.5478516,80 C34.5478516,80 30,74.6191406 30,72.8208008 C30,69.8348349 30,55 30,55 Z" id="Layer-6" fill="#fff"> </path> </g> </g> </g> </g></svg>,
                head: "Free Support",
                body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
            },
            {
                img: <svg className='w-5' fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></g></svg>,
                head: "Responsive",
                body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
            }
        ]
    }
    const expertData = {
        head:""
    }
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