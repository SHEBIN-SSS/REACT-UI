import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <p className='py-4 text-white'>lorejdi jdhsi jhdisab ahda hdahoa haoidshoiad ooiasdoiash ojhdohasodh ohoahdoiha ohoashdoisah hoashdas ihosdhashdphpahd hdhasdh odohasd ashdoihsad ashdosahd ohodohasvb </p>
      <div className='flex justify-between md:w-[60%] my-6'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        
      </div>
      </div>
      <div className='lg:col-span-2 justify-between flex mt-8'>
        <div>
            <h6 className='font-medium px-8'>
            Solutions
            </h6>
            <ul>
                <li className='p-2 px-8 text-sm '>Anakytics</li>
                <li className='p-2 px-8 text-sm '>Anakytics</li>
                <li className='p-2 px-8 text-sm '>Anakytics</li>
                <li className='p-2 px-8 text-sm '>Anakytics</li>
                <li className='p-2 px-8 text-sm '>Anakytics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium '>
            Solutions
            </h6>
            <ul>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium '>
            Solutions
            </h6>
            <ul>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium '>
            Solutions
            </h6>
            <ul>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
                <li className='py-2 text-sm'>Anakytics</li>
            </ul>
        </div>
        
      </div>
      <p className=' w-full  justify-center mx-auto text-center flex col-span-3 mt-6 text-[#00df9a]'>Done with love by <span className='text-white px-2'> Shebin S</span></p>
    </div>
  )
}

export default Footer
