import React,{useState} from 'react'
import{AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const[nav,Setnav] = useState(false)
  const handleNav =() => {
    Setnav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto text-white '>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact </li>
        {/* <button className='bg-[#ecf0ef] w-[100px] font-medium my-4 mx-auto rounded-md text-[#020907]'>sign up</button> */}
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl font-normal text-[#00df9a] m-8'>MENU</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
