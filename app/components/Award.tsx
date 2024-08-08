import React from 'react'

const Award = ({awardData}) => {  
  return (
    <>
      <section className='w-full max-w-7xl m-auto'>
        <div className="parallax">
          <p data-aos="fade" data-aos-duration="1000" className='text-white h-[20rem] items-center flex justify-center text-center m-auto font-bold md:w-[60%] w-[95%] text-[2rem] md:text-[3.3rem] leading-tight'>{awardData}</p>
        </div>
      </section>
    </>
  )
}

export default Award