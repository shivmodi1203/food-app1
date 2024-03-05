import React from 'react'
import { BsFillBellFill, BsToggles2, MdLogout, MdSearch } from '../assets/icons';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';
import Avatar from "../assets/images/avatar.png"
import {getAuth} from 'firebase/auth'
import {app} from '../config/firebase.config'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUserNull } from '../context/actions/userActions';

const DBHeader = () => {
    const user = useSelector((state)=>state.user);
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signOut = () =>{
        firebaseAuth.signOut().then(()=>{
            dispatch(setUserNull());
            navigate("/login", {replace : true})
        }).catch((err)=>console.log(err));
    };
  return (
    <div className='w-full flex items-center justify-between gap-3'>
        <p className='text-2xl text-headingColor'>Welcome to City
            {user?.name &&(
                <span className='block text-base text-gray-500'>{`Hello ${user?.name}...!`}</span>
            )}
        </p>
        <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center justify-center gap-3 bg-cardOverlay backdrop-blur-md px-4 py-2 shadow-md'>
                <MdSearch className='text-gray-400 text-2xl'/>
                <input type='text' placeholder='Search here...'
                        className='border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor'/>
                <BsToggles2 className='text-gray-400 text-2xl'/>
            </div>
            <motion.div {...buttonClick}
                className='w-10 h-10 rounded-md cursor-pointer bg-cardOverlay backdrop-blur-md shadow-md flex items-center justify-center'>
                <BsFillBellFill className='text-gray-400 text-xl'/>
            </motion.div>
            <div className='flex items-center justify-center gap-2'>
                <div className=' w-10 h-10 rounded-md shadow-md cursor-pointer overflow-hidden
                                flex items-center justify-center'>
                    <motion.img className='w-full h-full object-cover'
                                src={user?.picture ? user?.picture : Avatar}
                                whileHover={{scale:1.15}}
                                referrerPolicy='no-referrer'/>
                </div>
                <motion.button {...buttonClick} onClick={signOut}
                                className=' group flex items-center justify-center bg-gray-300 hover:bg-gray-400 gap-3 px-3 py-2 rounded-md shadow-md'>
                    <MdLogout className='text-xl text-textColor group-hover::text-headingColor'/>
                                    
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default DBHeader