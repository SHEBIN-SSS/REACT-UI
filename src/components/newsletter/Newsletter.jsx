import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-[#fff] bg-[#040000] w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to track ?</h1>
            <p>sign up and explore the funtions immediately</p>
        </div>
        <div className='my-4 '>
        <div className='w-full flex flex-col sm:flex-row items-centre justify-between'  >
            <input className='rounded-md text-[#060000] p-3 w-full flex my-6 mr-2 ' type="email" placeholder='Enter Email'/>
            <button className='bg-[#00df9a] w-[200px] font-medium py-2 my-6 mx-auto rounded-md text-[#060000]'>Notify me</button>
        </div>
        <p>we care abput the privacy of our customre visit contact <span className='text-[#00df9a]'> privacy policy.</span></p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
