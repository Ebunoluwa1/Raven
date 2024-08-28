import React from 'react'

const Navbar = () => {
  return (
   <div className=' top-0 z-[-10] w-full sticky bg-[#5E5E5E] text-white flex flex-row justify-evenly 
   items-center px-4 hover:text-black border-solid drop-shadow-sm'>
     <div className=''>
           <h2 className='bg-[#D9D9D9] w-[60px] h-[60px] text-black rounded-[50%] text-center p-4 m-2'> logo </h2>
     </div>
   

   <div>
    <ul className='flex items-center gap-x-4 hover:text-black'>
        <li><a className=''>Home</a></li>
        <li><a className=''>About</a></li>
        <li><a className=''>Team</a></li>
        <li><a className=''>Market Place</a></li>
        <li><a className=''>Contact us</a></li>
   </ul>
   </div>
   
   <div className='flex items-center gap-x-4'>
       <p className='hover:text-black'>Login</p>
   
       <div className='bg-[#6D6D6D] p-2 hover:drop-shadow-xl' >Sign up</div>
   </div>
    </div>
  )
}

export default Navbar;