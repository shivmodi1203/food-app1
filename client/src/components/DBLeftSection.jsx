import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'

const DBLeftSection = () => {
  return (
    <div className='h-full py-12 flex flex-col bg-cardOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-3'>
      <NavLink to={'/'} className="flex items-center justify-start px-6 gap-4">
        <img src={Logo} alt="logo" className="w-12" />
        <p className="text-xl font-semibold">Khana Khazana</p>
      </NavLink>
      <hr/>
      <ul className='flex flex-col gap-4'>
        <NavLink 
          to={"/dashboard/home"}
          className={({ isActive }) =>
          isActive ? `${isActiveStyles} px-4 py-3 border-l-8 border-red-500` : isNotActiveStyles
          }>Home</NavLink>
        <NavLink 
          to={"/dashboard/orders"}
          className={({isActive})=>
            isActive ? `${isActiveStyles} px-4 py-3 border-l-8 border-red-500` : isNotActiveStyles
          }>Orders</NavLink>
        <NavLink 
          to={"/dashboard/items"}
          className={({isActive})=>
            isActive ? `${isActiveStyles} px-4 py-3 border-l-8 border-red-500` : isNotActiveStyles
          }>Items</NavLink>
        <NavLink 
          to={"/dashboard/newItems"}
          className={({isActive})=>
            isActive ? `${isActiveStyles} px-4 py-3 border-l-8 border-red-500` : isNotActiveStyles
          }>Add New Items</NavLink>
        <NavLink 
          to={"/dashboard/user"}
          className={({isActive})=>
            isActive ? `${isActiveStyles} px-4 py-3 border-l-8 border-red-500` : isNotActiveStyles
          }>Users</NavLink>
      </ul>
    </div>
  )
}

export default DBLeftSection