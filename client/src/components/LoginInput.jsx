import React, { useState } from 'react'
import {animate, motion} from 'framer-motion'
import { faddInOut } from '../animations'

const LoginInput = ({placeHolder, icon, inputState, inputStateFunction, type, isSignUp}) => {
    const [isFocus, setIsFocus] = useState(false)
  return (
    <motion.div  {...faddInOut}
      className={`flex items-center justify-center gap-4 bg-cardOverlay 
                        backdrop-blur-md rounded-md w-full px-4 py-2 
                        ${isFocus? "shadow-md shadow-red-400" : "shadow-none"}`}
    >
      {icon}
      <input 
            type={type} 
            placeholder={placeHolder} 
            className='w-full h-full bg-transparent
                    text-headingColor text-lg font-normal border-none outline-none'
            value={inputState}
            onChange={(e)=> inputStateFunction(e.target.value)}  
            onFocus={(e)=>setIsFocus(true)}
            onBlur={(e)=>setIsFocus(false)}
      />
    </motion.div>
  )
}

export default LoginInput