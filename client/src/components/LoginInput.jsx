import React from 'react'

const LoginInput = ({placeHolder, icon, inputState, inputStateFunction, type, isSignUp}) => {
  return (
    <div className='flex items-center justify-center gap-4 bg-cardOverlay 
                        backdrop-blur-md rounded-md w-full px-4 py-2'>
        {icon}
    </div>
  )
}

export default LoginInput