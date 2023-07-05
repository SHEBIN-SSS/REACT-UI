import React from 'react'
import assets from '../../Assests/laptop.jpg'


const Analytics = () => {
  return (
    <div className='bg-[#fff] px-16 py-4 w-full'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[500px] mx-6 my-4' src={assets} alt="" />
        <div className='text-[#121111] p-4 m-auto flex flex-col'>
            <p className='font-medium text-2xl '>DATA ANALYTICS DASHBOARD</p>
            <h1 className='font-bold text-3xl pt-2 pb-2 text-[#040f0b]'>Manage Data Analytics Centrally</h1>
            <p className=''>lorejdi jdhsi jhdisab ahda hdahoa haoidshoiad ooiasdoiash ojhdohasodh ohoahdoiha ohoashdoisah hoashdas ihosdhashdphpahd hdhasdh odohasd ashdoihsad ashdosahd ohodohasvb </p>
            <button className='bg-[#010705] w-[200px] font-medium py-2 my-6 mx-auto md:mx-0 rounded-md text-[#00df9a]   '>Get Started</button>

        </div>
        
      </div>
    </div>
  )
}

export default Analytics
