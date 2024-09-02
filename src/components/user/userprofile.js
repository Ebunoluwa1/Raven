import React, { useState } from 'react'
import { TextComponent } from '../atoms/text.atom';
import { Close } from '../assets/close';
import ButtonComponent from '../atoms/button.atoms';


const UserProfile = () => {

    const [isVisible , setIsVisible] = useState(true)

    const ToggleVisible = ()=> {
        setIsVisible(!isVisible)
    }
   
  return (
   <>
      {isVisible && ( 
           <div id='profile' className='bg-gray-100 min-h-screen flex items-center justify-center sm:min-w-24'>
      <div className='max-w-md bg-white p-8 rounded shadow-md md:min-w-24'>
        {/* Avatar */}
       
          <div className="flex w-full items-left justify-between mb-6 md:min-w-24">
            {/* <div className=''> */}
                <div className=" w-20 h-20 mr-4 overflow-hidden rounded-full">
                    <img src="https://picsum.photos/200/300" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className='sm:min-w-24'>
                    <label for="avatar" className="cursor-pointer text-black-500 text-bold ">Your name</label> <br></br>
                    <label for="avatar" className="cursor-pointer text-gray-500 ">yourname@gmail.com</label>
                </div>
            {/* </div> */}
          
           <div className='ml-24'>
                <Close  onClick={ToggleVisible}/>
            </div>
        </div>

        {/* section */}

        <div class=" md:min-w-24 md:ml-4">
                  <p className='border-solid border-2 border-gray-200 my-2' ></p> 
                    <div className='flex items-center justify-between '>
                        <p  className=" text-black font-bold sm:font-light ">Name</p>
                        <p className=" ml-24 sm:min-w-24 sm:ml-4" > Your name </p>
                    </div>   
                     <p className='border-solid border-2 border-gray-200 my-2' ></p> 
                      <div className='flex items-center justify-between '>
                        <p  className=" text-black font-bold sm:font-light">Email Account</p>
                        <p className=" sm:min-w-24 sm:ml-4 ml-24 " > yourname@gamil.com </p>
                    </div>
                  <p className='border-solid border-2 border-gray-200 my-2' ></p> 
                  <div className='flex items-center justify-between '>
                        <p  className=" text-black font-bold sm:font-light ">Mobile Number</p>
                        <p className=" ml-24 sm:min-w-24 sm:ml-4 " > Add Number</p>
                  </div>
                  
                   <p className='border-solid border-2 border-gray-200 my-2' ></p> 
                  <div className='flex items-center justify-between '>
                        <p  className=" text-gray  font-bold sm:font-light ">Location</p>
                        <p className=" ml-24  sm:ml-4" > USA</p>
                    </div>
        </div>

        <div className='my-2 sm:md:min-w-24 sm:items-center '>
        <ButtonComponent padding='14px'  children="Save Changes"/>
       </div>
       
   
      </div>
    </div>
      )};
   </>
   
  )
}

export default UserProfile