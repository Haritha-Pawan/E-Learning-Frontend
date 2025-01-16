import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const Sidemenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
        {
            isOpen && (
            <motion.div
            initial = {{opacity:0,y :-100}}
            animate = {{opacity:1,y:0}}
            exit={{opacity:0,y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
            >
             <div className='text-2xl font-semibold uppercase bg-[#0063ff] m-6 rounded-3xl py-10 text-white'>
                <ul className='flex flex-col items-center gap-10 justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                   
                </ul>
             </div>
            </motion.div>
       ) }
    </AnimatePresence>
  )
}

export default Sidemenu
