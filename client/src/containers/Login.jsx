import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets'
import { LoginInput } from '../components'
import { FaEnvelope } from '../assets/icons'

const Login = () => {

  const [userEmail, setUserEmail] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  return <div className='w-screen h-screen relative overflow-hidden flex'>
      <img src={LoginBg} 
      className='w-full object-cover absolute top-0 left-0' 
      alt=''
      />
      <div className='flex flex-col items-center bg-cardOverlay 
      w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        <div className='flex items-center justify-start gap-4 w-full'>
            <img src={Logo} className='w-8' alt="" />
            <p className='text-headingColor font-semibold text-2xl'>City</p>
        </div>
        <p className='text-headingColor font-semibold text-3xl'>Welcome Back</p>
        <p className='text-textColor text-xl  -mt-6'>Sign with following</p>

        <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput 
          placeHolder={"Email"} 
          icon={<FaEnvelope className=""/>}
          inputState={userEmail}
          inputStateFunction={setUserEmail} 
          type="email" isSignUp={isSignUp}
          />
        </div>
      </div>
    </div>
  
}

export default Login