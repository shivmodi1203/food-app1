import { motion } from 'framer-motion'
import React from 'react'
import { fadeInOut } from '../animations'
import { FaCheck } from "../assets/icons"
import { BsExclamation, BsExclamationTriangleFill, BsFillExclamationTriangleFill } from 'react-icons/bs'
import { BiAlarmAdd, BiBarcodeReader, BiFork, BiInfoCircle } from 'react-icons/bi'

const Alert = ({type, message}) => {
  if(type==="success"){
        return (
            <motion.div {...fadeInOut} className="fixed z-50 top-32 px-4 py-2 rounded-md bg-emerald-300 shadow-md right-12 backdrop-blur-sm flex items-center gap-4">
                <FaCheck className='text-xl text-emerald-700'/>
                <p className='text-xl text-emerald-700'>{message}</p>
            </motion.div>       
        )
    }
  if(type==="warning"){
        return (
            <motion.div {...fadeInOut} className="fixed z-50 top-32 px-4 py-2 rounded-md bg-orange-300 shadow-md right-12 backdrop-blur-sm flex items-center gap-4">
                <BsExclamationTriangleFill className='text-xl text-orange-700'/>
                <p className='text-xl text-orange-700'>{message}</p>
            </motion.div>       
        )
    }
  if(type==="danger"){
        return (
            <motion.div {...fadeInOut} className="fixed z-50 top-32 px-4 py-2 rounded-md bg-red-300 shadow-md right-12 backdrop-blur-sm flex items-center gap-4">
                <BsFillExclamationTriangleFill className='text-xl text-red-700'/>
                <p className='text-xl text-red-700'>{message}</p>
            </motion.div>       
        )
    }
  if(type==="info"){
        return (
            <motion.div {...fadeInOut} className="fixed z-50 top-32 px-4 py-2 rounded-md bg-blue-300 shadow-md right-12 backdrop-blur-sm flex items-center gap-4">
                <BiInfoCircle className='text-xl text-blue-700'/>
                <p className='text-xl text-blue-700'>{message}</p>
            </motion.div>       
        )
    }
}

export default Alert