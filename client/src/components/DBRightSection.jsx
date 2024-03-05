import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DBHome,DBHeader, DBOrders, DBItems, DBNewItems, DBUsers } from '../components'

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 flex-1 h-full  px-12'>
      <DBHeader/>
      <div className='flex flex-col flex-1 overflow-scroll scrollbar-none'>
      <Routes>
        <Route path='/home' element={<DBHome/>}/>
        <Route path='/orders' element={<DBOrders/>}/>
        <Route path='/items' element={<DBItems/>}/>
        <Route path='/newItems' element={<DBNewItems/>}/>
        <Route path='/users' element={<DBUsers/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default DBRightSection;