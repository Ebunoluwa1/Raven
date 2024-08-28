import React from 'react'
import ButtonComponent from '../atoms/button.atoms';

const Section = () => {
  return (
    <div className='bg-[#D9D9D9] p-4  '>
      <div className='flex flex-col items-center px-8 pt-16 justify-center'>
        <h4 className='w-[60%] text-center text-6xl font-normal'>
          Lorem ipsum dolor sit amet consectetur. Elementum at amet
        </h4>
       <p className='m-4 pt-4 text-center w-[60%]'>Lorem ipsum dolor sit amet consectetur. Elementum at ametLorem ipsum dolor sit amet consectetur. Elementum at amet.Lorem ipsum dolor sit amet consectetur. Elementum at amet</p>

       <div className='mb-10'>
        <ButtonComponent padding='14px'  children="Open an account"/>
       </div>
      </div>
    </div>
  )
}

export default Section;