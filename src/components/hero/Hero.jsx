import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen justify-center mx-auto text-center flex flex-col'> 
      <p className='uppercase text-4xl  font-medium text-[#00df9a] p-2'>Growing with data Analytics</p>
      <h1 className='w-full font-bold p-2 md:text-8xl sm:text-6xl text-4xl md:py-6'>Grow with Data. </h1>
      <div className='flex justify-center items-center'>
        <p className=' md:text-5xl sm:text-4xl text-xl font-semibold p-2'>Fast,flexible financing for</p>
        <Typed className=' md:text-5xl sm:text-4xl text-xl font-bold text-[#474a49]'
                strings={['BTB','BTC','SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop />
                
      </div>
      <div>
        <p className='md:text-2xl text-xl font-bold text-[#474a49] p-2'>Monitor your data Analytics to increase your revenue</p>
        <button className='bg-[#00df9a] w-[200px] font-medium py-2 my-6 mx-auto rounded-md text-[#060000] '>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Hero
