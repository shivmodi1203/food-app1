import React from 'react'
import { motion } from "framer-motion"
import { staggerFadeInOut } from "../animations"
// import { HicurrencyRupee } from ""

const OrdersData = ({index,data,admin}) => {
  return (
    <motion.div {...staggerFadeInOut(index)} className='w-full flex flex-col items-start px-3 py-2 border relative border-gray-300 bg-cardOverlay drop-shadow-md rounded-md gap-4'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-xl text-headingColor font-semibold'>Orders</h1>

            <div>
                {/* <p>Total : <HicurrencyRupee/></p> */}
            </div>
        </div>
    </motion.div>
  )
}

export default OrdersData