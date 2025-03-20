import { type } from 'os'
import { title } from 'process'
import React from 'react'
import {CustomButtonProps} from '@/types'
import { types } from 'util'

const CustomButton = ({title , containerStyles, handleClick}: CustomButtonProps ) => {
  return (
   <button 
   disabled={false}
   type={"button"}
   className={`custom-btn ${containerStyles}`}  
   onClick={handleClick}

   >
    <span className={'flex-1'}> 
      {title}
    </span>
   </button>
  )
}

export default CustomButton
