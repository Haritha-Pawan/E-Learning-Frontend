import React from 'react'
import { motion } from "framer-motion"

const Navbanner = () => {

    const [isOpen, setIsOpen ] = React.useState(true);

  return (
    isOpen &&(
        <motion.div   initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7, delay:0.7}}className='bg-[#ffcf3a] text-center font-semibold p-1 lg:block relative hidden'>
                 Are you a university or school student 
                 for an online tutoring partnership?
                 <a href='#' className='text-[#0063ff] ml-2'>
                      Talk to us
                 </a>
                 <div className='absolute top-1/2 right-10 cursor-pointer
                 -translate-y-1/2'
                            onClick={()=>setIsOpen(false)}
                            >
                              X
                 </div>
        </motion.div>
    )
   
  )
}

export default Navbanner
