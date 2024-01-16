import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets'
import { LoginInput } from '../components'
import { FaEnvelope, FaLock, FcGoogle } from '../assets/icons'
import {motion} from 'framer-motion'
import { buttonClick } from '../animations'

const Login = () => {

  const [userEmail, setUserEmail] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("")
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
        <p className='text-textColor text-xl  -mt-6'>{isSignUp? "Sign Up": "Sign In"} with following</p>

        <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput 
          placeHolder={"Enter Email"} 
          icon={<FaEnvelope className="text-xl text-textColor"/>}
          inputState={userEmail}
          inputStateFunction={setUserEmail} 
          type="email" isSignUp={isSignUp}
          />
          <LoginInput 
          placeHolder={"Enter Password"} 
          icon={<FaLock className="text-xl text-textColor"/>}
          inputState={password}
          inputStateFunction={setPassword} 
          type="password" isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput 
            placeHolder={"Confirm Password"} 
            icon={<FaLock className="text-xl text-textColor"/>}
            inputState={confirm_password}
            inputStateFunction={setConfirm_password} 
            type="password" isSignUp={isSignUp}
            />
          )}
          {!isSignUp ? 
            (<p>
              Doesn't have an account ?{" "}
              <motion.button 
                {...buttonClick} 
                className='text-red-400 underline cursor-pointer bg-transparent'
                onClick={()=>setIsSignUp(true)}
              >
                    Create One
              </motion.button>
            </p>):(<p>
              Already have an account ?{" "}
              <motion.button 
                {...buttonClick} 
                className='text-red-400 underline cursor-pointer bg-transparent'
                onClick={()=>setIsSignUp(false)}
              >
                    Sign-in
              </motion.button>
            </p>)}
              {isSignUp ? (<motion.button {...buttonClick} 
              className='w-full px-4 py-2 rounded-md bg-red-400 text-white text-xl hover:bg-red-500 capitalize transition-all duration-150'>
                Sign Up
              </motion.button>):(<motion.button {...buttonClick} 
              className='w-full px-4 py-2 rounded-md bg-red-400 text-white text-xl hover:bg-red-500 capitalize transition-all duration-150'>
                Sign In
              </motion.button>)
              }
        </div>
        <div className='flex items-center justify-between gap-16'>
              <div className='w-24 h-[1px] rounded-md bg-white'></div>
              <p className='text-white'>or</p>
              <div className='w-24 h-[1px] rounded-md bg-white'></div>
        </div>

        <motion.div {...buttonClick} 
        className='flex items-center justify-center px-20 py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4'>
          <FcGoogle className='text-3xl'/>
          <p className='capitalize text-base text-headingColor'>Sign in with Google</p>
        </motion.div>
      </div>
    </div>
  
}

export default Login